import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "./../util/lang"

const EMAIL = "666hydrochloric@gmail.com"

// 오류 제보 메일 버튼. 제목과 본문은 보고 있던 글에 맞춰 스크립트가 채웁니다.
const Report: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
  <a
    class={classNames(displayClass, "report-button")}
    href={`mailto:${EMAIL}`}
    title="Report"
    aria-label="Report Issue"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  </a>
)

Report.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const link = document.querySelector(".report-button")
  if (!link) return

  const title = (document.querySelector("article h1, .article-title")?.textContent ?? document.title).trim()
  const subject = "[IVAN] Report: " + title
  const body = [
    "Page : " + window.location.href,
    "",
    "Part :",
    "",
    "Content :",
    "",
  ].join("\\n")

  link.setAttribute(
    "href",
    "mailto:${EMAIL}?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body),
  )
})
`

Report.css = `
.report-button {
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  background-image: none;
}

.report-button svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--darkgray);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.2s ease;
}
`

export default (() => Report) satisfies QuartzComponentConstructor
