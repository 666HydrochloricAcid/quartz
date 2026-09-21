import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponentProps } from "./quartz/components/types"
import { SimpleSlug } from "./quartz/util/path"

const onHome = (page: QuartzComponentProps) => page.fileData.slug === "index"
const offHome = (page: QuartzComponentProps) => page.fileData.slug !== "index"

// 모든 페이지가 공유하는 부분
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/666HydrochloricAcid",
    },
  }),
}

// 본문 글 + 홈
export const defaultContentPageLayout: PageLayout = {
  // 홈에는 히어로가 제목 역할을 하므로 제목·경로·메타를 숨깁니다.
  beforeBody: [
    Component.ConditionalRender({ component: Component.Breadcrumbs(), condition: offHome }),
    Component.ConditionalRender({ component: Component.ArticleTitle(), condition: offHome }),
    Component.ConditionalRender({ component: Component.ContentMeta(), condition: offHome }),
    Component.ConditionalRender({ component: Component.TagList(), condition: offHome }),
  ],

  left: [
    Component.IvanTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],

  right: [
    Component.Graph(),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: offHome,
    }),
    Component.Backlinks(),
  ],

  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "최근에 고친 노트",
        limit: 5,
        linkToMore: "tags/" as SimpleSlug,
        filter: (f) => !["conventions", "index"].includes(f.slug ?? ""),
      }),
      condition: onHome,
    }),
    // 아무것도 그리지 않고 CSS/JS만 싣습니다. 스크립트가 알아서 홈에서만 동작합니다.
    Component.HomeEffects(),
  ],
}

// 태그 페이지 / 폴더 페이지
// tagPage.tsx 와 folderPage.tsx 가 이걸 import 합니다. 지우면 빌드가 깨집니다.
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],

  left: [
    Component.IvanTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ folderDefaultState: "collapsed" })),
  ],

  right: [],
}
