import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/404.scss"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // baseUrl에 하위 경로가 있으면 그 경로를 홈으로 사용
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint not-found">
      <p class="nf-code">404</p>
      <p class="nf-math">
        ∄ <i>p</i> ∈ Pages <i>s.t.</i> url(<i>p</i>) = this
      </p>
      <p class="nf-message">The page you are looking for does not exist, or has been moved.</p>
      <a class="nf-home internal" href={baseDir}>
        ← Back to home
      </a>
    </article>
  )
}

NotFound.css = style
export default (() => NotFound) satisfies QuartzComponentConstructor