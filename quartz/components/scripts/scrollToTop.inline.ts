document.addEventListener("nav", () => {
  const btn = document.querySelector<HTMLButtonElement>(".scroll-to-top")
  if (!btn) return

  const update = () => btn.classList.toggle("visible", window.scrollY > 400)
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
  }

  update()
  window.addEventListener("scroll", update, { passive: true })
  btn.addEventListener("click", toTop)
  window.addCleanup(() => {
    window.removeEventListener("scroll", update)
    btn.removeEventListener("click", toTop)
  })
})