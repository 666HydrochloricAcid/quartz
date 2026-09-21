import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// 쓸 그림을 여기서 고릅니다. 둘 다 quartz/static/ 에 있어야 합니다.
//   "static/ivan-logo.webp"         원본 비율 (세로로 긴 초상)
//   "static/ivan-logo-square.webp"  정사각 (가슴 아래를 잘라내고 아래 테두리를 다시 붙인 판)
const LOGO = "static/ivan-logo.webp"

const IvanTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title", "ivan-page-title")}>
      <a href={baseDir} class="ivan-logo-link">
        {/* 비율 유지에 필요한 규칙은 태그에 직접 둡니다.
            스타일시트가 덮이거나 늦게 붙어도 그림이 늘어나지 않습니다. */}
        <img
          class="ivan-logo"
          src={joinSegments(baseDir, LOGO)}
          alt="IVAN, 홈으로"
          style="display:block;width:100%;height:auto;max-width:100%;margin:0;object-fit:contain;"
        />
      </a>
    </h2>
  )
}

IvanTitle.css = `
/* 사이드바 폭을 넘지 않도록 */
.page-title.ivan-page-title {
  width: 100%;
  min-width: 0;
  margin: 0;
  line-height: 0;
}

/* Search 창과 같은 규칙: 사이드바 폭을 채우되 최대 14rem */
.ivan-page-title .ivan-logo-link {
  display: block;
  width: 100%;
  max-width: 14rem;
  background-color: transparent;
}

.ivan-page-title .ivan-logo {
  border-radius: 0;
  transition: filter 0.2s ease;
}

.ivan-page-title .ivan-logo-link:hover .ivan-logo,
.ivan-page-title .ivan-logo-link:focus-visible .ivan-logo {
  filter: contrast(1.12);
}

/* 모바일: 상단 막대에 들어가므로 작은 썸네일로 */
@media all and (max-width: 800px) {
  .page-title.ivan-page-title {
    width: auto;
  }

  .ivan-page-title .ivan-logo-link {
    width: auto;
    max-width: none;
  }

  .ivan-page-title .ivan-logo {
    width: auto !important;
    height: 3rem !important;
  }
}
`

export default (() => IvanTitle) satisfies QuartzComponentConstructor
