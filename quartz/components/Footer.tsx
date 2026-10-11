import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const title = fileData.frontmatter?.title ?? cfg.pageTitle
    const url = `https://${cfg.baseUrl}/${fileData.slug ?? ""}`
    const bibtex = `@misc{ivan${year},
  author = {IVAN},
  title  = {${title}},
  year   = {${year}},
  url    = {${url}}
}`
    const links = opts?.links ?? {}

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year} IVAN. Licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.
        </p>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor