import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/cite.scss"
// @ts-ignore
import script from "./scripts/cite.inline"
import { classNames } from "../util/lang"

export default (() => {
  const CiteButton: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const title = fileData.frontmatter?.title ?? cfg.pageTitle
    const url = `https://${cfg.baseUrl}/${fileData.slug ?? ""}`
    const bibtex = `@misc{ivan${year},
  author = {IVAN},
  title  = {${title}},
  year   = {${year}},
  url    = {${url}}
}`

    return (
      <div class={classNames(displayClass, "cite")}>
        <button class="cite-button" type="button" aria-label="How to cite" title="How to cite">
          cite
        </button>
        <dialog class="cite-dialog">
          <div class="cite-inner">
            <p class="cite-heading">How to cite</p>
            <pre>
              <code>{bibtex}</code>
            </pre>
            <div class="cite-actions">
              <button class="cite-copy" type="button">
                Copy
              </button>
            </div>
          </div>
        </dialog>
      </div>
    )
  }

  CiteButton.css = style
  CiteButton.afterDOMLoaded = script
  return CiteButton
}) satisfies QuartzComponentConstructor