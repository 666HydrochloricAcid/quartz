// 홈 화면 효과.
// Quartz는 SPA 라우팅을 쓰므로 DOMContentLoaded 대신 "nav" 이벤트에 붙고,
// 페이지를 떠날 때 window.addCleanup 으로 리스너를 해제합니다.

const clamp = (x: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, x))
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

/** scroll/resize 를 requestAnimationFrame 한 번으로 묶는다. 해제 함수를 돌려준다. */
function onFrame(fn: () => void): () => void {
  let queued = false
  const handler = () => {
    if (queued) return
    queued = true
    requestAnimationFrame(() => {
      queued = false
      fn()
    })
  }
  window.addEventListener("scroll", handler, { passive: true })
  window.addEventListener("resize", handler)
  fn()
  return () => {
    window.removeEventListener("scroll", handler)
    window.removeEventListener("resize", handler)
  }
}

/* ─────────────────────────────────────────────
   1. 평행선이 만나 V가 된다 (접속 시 자동 재생)
   획이 다 그려진 뒤, 위쪽 끝점은 고정한 채 아래쪽 끝점이 가운데로 모인다.
   ───────────────────────────────────────────── */
const CONVERGE_DELAY = 1650 // ms, 마지막 획(N)이 다 그려지는 시점 (0.36s + 308 × 0.004s ≈ 1.6s)
const CONVERGE_DURATION = 1000 // ms

function setupHero(hero: HTMLElement): () => void {
  const v = hero.querySelector<SVGPathElement>("[data-ivan-v]")
  if (!v) return () => {}
  hero.setAttribute("data-live", "")

  const TOP_L = 40
  const TOP_R = 80
  const MID = 60
  const H = 100

  const render = (p: number) => {
    if (p >= 0.999) {
      // 완전히 만나면 한 획으로 바꿔 꼭짓점을 깔끔하게 잇는다
      v.setAttribute("d", `M${TOP_L},0 L${MID},${H} L${TOP_R},0`)
      hero.classList.add("is-met")
    } else {
      const bl = TOP_L + (MID - TOP_L) * p
      const br = TOP_R - (TOP_R - MID) * p
      v.setAttribute("d", `M${TOP_L},0 L${bl.toFixed(2)},${H} M${TOP_R},0 L${br.toFixed(2)},${H}`)
      hero.classList.remove("is-met")
    }
  }

  render(0)

  let raf = 0
  const timer = window.setTimeout(() => {
    const start = performance.now()
    const step = (now: number) => {
      const t = clamp((now - start) / CONVERGE_DURATION)
      render(t >= 1 ? 1 : easeInOut(t))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
  }, CONVERGE_DELAY)

  return () => {
    window.clearTimeout(timer)
    cancelAnimationFrame(raf)
  }
}

/* ─────────────────────────────────────────────
   2. 연재 카드 진행도 막대
   "진행 중 · 4/12" 에서 숫자를 읽어 막대를 만든다. 숫자가 없으면 건너뛴다.
   ───────────────────────────────────────────── */
function prepareBars(grid: HTMLElement) {
  for (const card of Array.from(grid.querySelectorAll<HTMLElement>(".home-card"))) {
    if (card.querySelector(".home-card-bar")) continue
    const text = card.querySelector(".home-card-meta")?.textContent ?? ""
    const m = text.match(/(\d+)\s*\/\s*(\d+)/)
    if (!m) continue
    const done = Number(m[1])
    const total = Number(m[2])
    if (!total) continue

    const bar = document.createElement("span")
    bar.className = "home-card-bar"
    bar.setAttribute("aria-hidden", "true")
    const fill = document.createElement("span")
    fill.style.setProperty("--p", clamp(done / total).toFixed(3))
    bar.appendChild(fill)
    card.appendChild(bar)
  }
}

const fillBar = (card: Element) => card.classList.add("is-filled")

/* ─────────────────────────────────────────────
   3. 스크롤하면 떠오르는 본문
   첫 화면에 이미 보이는 것은 숨기지 않는다 (깜빡임 방지).
   ───────────────────────────────────────────── */
function setupReveal(article: HTMLElement, hero: HTMLElement): () => void {
  const targets: HTMLElement[] = []
  for (const el of Array.from(article.children) as HTMLElement[]) {
    if (el === hero) continue
    if (el.classList.contains("home-grid")) {
      Array.from(el.children).forEach((card, i) => {
        const c = card as HTMLElement
        c.style.setProperty("--i", String(i % 2)) // 같은 줄은 왼쪽 → 오른쪽
        targets.push(c)
      })
    } else {
      targets.push(el)
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        el.classList.add("is-visible")
        if (el.classList.contains("home-card")) fillBar(el)
        io.unobserve(el)
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  )

  const fold = window.innerHeight * 0.92
  for (const el of targets) {
    if (el.getBoundingClientRect().top < fold) {
      if (el.classList.contains("home-card")) {
        // 한 프레임 늦춰야 막대가 0에서부터 차오른다
        requestAnimationFrame(() => requestAnimationFrame(() => fillBar(el)))
      }
      continue
    }
    el.setAttribute("data-reveal", "")
    io.observe(el)
  }

  return () => io.disconnect()
}

/* ─────────────────────────────────────────────
   4. 읽는 순서: 스크롤을 따라 그어지는 선
   ───────────────────────────────────────────── */
function setupPath(path: HTMLElement): () => void {
  const items = Array.from(path.querySelectorAll<HTMLElement>("li"))
  path.setAttribute("data-live", "")

  return onFrame(() => {
    const rect = path.getBoundingClientRect()
    if (rect.height === 0) return
    const p = clamp((window.innerHeight * 0.7 - rect.top) / rect.height)
    path.style.setProperty("--draw", p.toFixed(3))

    const reach = rect.top + rect.height * p
    for (const li of items) {
      li.classList.toggle("is-passed", li.getBoundingClientRect().top + 12 <= reach)
    }
  })
}

/* ─────────────────────────────────────────────
   5. 폴더 페이지를 책 목차처럼
   "1. Linear Regression" → 번호 칸 + 제목,
   "Appendix A. ..."      → Appendix 구획 아래 "A." + 제목,
   날짜는 2026.09.20 형식으로.
   태그 페이지(tags/...)는 건드리지 않는다.
   ───────────────────────────────────────────── */
function setupToc() {
  const slug = document.body.dataset.slug ?? ""
  if (slug.startsWith("tags/")) return
  const listing = document.querySelector<HTMLElement>(".page-listing")
  if (!listing || listing.dataset.toc === "1") return
  listing.dataset.toc = "1"

  // "N items under this folder." 제거
  // 위치가 버전마다 조금 달라서, 문구로 찾아 지운다.
  const scope = listing.closest(".popover-hint") ?? listing.parentElement ?? listing
  for (const p of Array.from(scope.querySelectorAll("p"))) {
    if (/\bitems?\s+under\s+this\s+folder\b/i.test(p.textContent ?? "")) p.remove()
  }

  // 본문에 "Table of Contents" 제목
  const list = listing.querySelector("ul.section-ul")
  if (list && !listing.querySelector(".toc-heading")) {
    const heading = document.createElement("h2")
    heading.className = "toc-heading"
    heading.textContent = "Table of Contents"
    list.before(heading)
  }

  const span = (cls: string, text: string) => {
    const s = document.createElement("span")
    s.className = cls
    s.textContent = text
    return s
  }

  let appendixStarted = false
  for (const li of Array.from(listing.querySelectorAll<HTMLElement>(".section-li"))) {
    // 날짜: 빌드 시점 표기와 어긋나지 않도록 ISO 문자열에서 바로 자른다
    const time = li.querySelector("time")
    const iso = time?.getAttribute("datetime")
    if (time && iso) time.textContent = iso.slice(0, 10).replace(/-/g, ".")

    const a = li.querySelector<HTMLAnchorElement>(".desc a")
    if (!a) continue
    if (a.getAttribute("href")?.endsWith("/")) li.classList.add("is-folder")

    const text = (a.textContent ?? "").trim()
    let num: string | null = null
    let title = text

    const appendix = text.match(/^Appendix\s+([A-Za-z])\.\s*(.*)$/)
    const chapter = text.match(/^(\d+)\.\s*(.*)$/)

    if (appendix) {
      num = `${appendix[1].toUpperCase()}.`
      title = appendix[2]
      li.classList.add("is-appendix")
      if (!appendixStarted) {
        appendixStarted = true
        const part = document.createElement("li")
        part.className = "toc-part"
        part.textContent = "Appendix"
        li.before(part)
      }
    } else if (chapter) {
      num = `${chapter[1]}.`
      title = chapter[2]
    }

    if (num !== null) {
      a.textContent = ""
      a.append(span("toc-num", num), span("toc-title", title))
      li.classList.add("is-numbered")
    }
  }
}

/* ───────────────────────────────────────────── */

document.addEventListener("nav", () => {
  setupToc()

  const hero = document.querySelector<HTMLElement>(".ivan-hero")
  if (!hero) return

  const article = hero.closest("article")
  const grid = article?.querySelector<HTMLElement>(".home-grid") ?? null
  if (grid) prepareBars(grid)

  // 움직임 줄이기 설정이면 최종 상태만 보여 주고 끝낸다
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    grid?.querySelectorAll(".home-card").forEach(fillBar)
    return
  }

  const cleanups: Array<() => void> = [setupHero(hero)]
  if (article) cleanups.push(setupReveal(article, hero))
  const path = article?.querySelector<HTMLElement>(".reading-path")
  if (path) cleanups.push(setupPath(path))

  window.addCleanup(() => cleanups.forEach((fn) => fn()))
})
