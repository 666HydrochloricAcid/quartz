import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "./../util/lang"

// 글자 크기 토글. 기본 크기 ↔ 큰 크기 두 단계만 둡니다.
const FontSize: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <button
    type="button"
    class={classNames(displayClass, "fontsize-toggle")}
    title="본문 글자 크게"
    aria-label="본문 글자 크게"
    aria-pressed="false"
  >
    <span class="fontsize-mark" aria-hidden="true">
      A<span class="fontsize-mark-small">A</span>
    </span>
  </button>
)

// 화면이 한 번 작게 그려졌다가 커지는 깜빡임을 막기 위해, 저장값은 DOM 생성 전에 읽습니다.
// (Quartz 의 다크모드가 쓰는 방식과 같습니다)
FontSize.beforeDOMLoaded = `
try {
  if (localStorage.getItem("ivan-font-size") === "large") {
    document.documentElement.setAttribute("data-font", "large")
  }
} catch (e) {}
`

FontSize.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const button = document.querySelector(".fontsize-toggle")
  if (!button) return

  const sync = () => {
    const large = document.documentElement.getAttribute("data-font") === "large"
    button.setAttribute("aria-pressed", large ? "true" : "false")
    button.title = large ? "본문 글자 기본 크기로" : "본문 글자 크게"
    button.setAttribute("aria-label", button.title)
  }

  const toggle = () => {
    const large = document.documentElement.getAttribute("data-font") === "large"
    if (large) {
      document.documentElement.removeAttribute("data-font")
    } else {
      document.documentElement.setAttribute("data-font", "large")
    }
    try {
      localStorage.setItem("ivan-font-size", large ? "normal" : "large")
    } catch (e) {}
    sync()
  }

  sync()
  button.addEventListener("click", toggle)
  window.addCleanup(() => button.removeEventListener("click", toggle))
})
`

FontSize.css = `
/* 루트 글자 크기를 키우면 rem 기반인 Quartz 전체가 비례해서 커집니다 */
html[data-font="large"] {
  font-size: 118%;
}

.fontsize-toggle {
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

/* 아이콘이 아니라 실제 글자. 본문 서체를 그대로 쓴다.
   크기를 px 로 고정해, 글자 크게 상태에서도 버튼은 커지지 않게 한다. */
.fontsize-mark {
  display: flex;
  align-items: baseline;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  line-height: 1;
  color: var(--darkgray);
  transition: color 0.2s ease;
}

.fontsize-mark-small {
  margin-left: 1px;
  font-size: 13px;
}

.fontsize-toggle:hover .fontsize-mark,
.fontsize-toggle[aria-pressed="true"] .fontsize-mark {
  color: var(--secondary);
}
`

export default (() => FontSize) satisfies QuartzComponentConstructor
