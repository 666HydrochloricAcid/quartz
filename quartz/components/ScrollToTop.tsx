import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/scrollToTop.scss"
// @ts-ignore
import script from "./scripts/scrollToTop.inline"
import { classNames } from "../util/lang"

export default (() => {
  const ScrollToTop: QuartzComponent = ({ displayClass }: QuartzComponentProps) => (
    <button
      class={classNames(displayClass, "scroll-to-top")}
      type="button"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up preview-icon"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  )

  ScrollToTop.css = style
  ScrollToTop.afterDOMLoaded = script
  return ScrollToTop
}) satisfies QuartzComponentConstructor