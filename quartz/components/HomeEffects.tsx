import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/homeEffects.inline"
import style from "./styles/homeEffects.scss"

// 화면에 아무것도 그리지 않고, 홈 화면 효과용 CSS와 스크립트만 싣는 컴포넌트입니다.
// Quartz는 컴포넌트의 CSS/JS를 모든 페이지에 번들하므로,
// 스크립트 쪽에서 .ivan-hero 가 있는 페이지(= index)에서만 동작하도록 막아 두었습니다.
const HomeEffects: QuartzComponent = () => null

HomeEffects.css = style
HomeEffects.afterDOMLoaded = script

export default (() => HomeEffects) satisfies QuartzComponentConstructor
