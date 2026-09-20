import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

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
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // 주제가 넷으로 늘었으니 폴더는 접힌 상태로 시작합니다.
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],

  right: [
    Component.Graph(),
    // 홈에서는 목차가 방해가 되므로 본문 글에만 붙입니다.
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.Backlinks(),
  ],

  afterBody: [
    // 홈에서만 최근 글 목록
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "최근에 고친 노트",
        limit: 5,
        linkToMore: "tags/" as SimpleSlug,
        filter: (f) => !["conventions", "index"].includes(f.slug ?? ""),
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
}

// 태그 페이지 / 폴더 페이지
// tagPage.tsx 와 folderPage.tsx 가 이걸 import 합니다. 지우면 빌드가 깨집니다.
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ folderDefaultState: "collapsed" })),
  ],

  right: [],
}

// 참고
//
// 1. ConditionalRender 가 v4.5.0 에 없다면 (quartz/components/index.ts 에서 확인)
//    감싼 부분을 풀고 Component.DesktopOnly(Component.TableOfContents()) 와
//    Component.RecentNotes({...}) 를 그대로 두세요. 모든 글에 붙는 것 말고는
//    문제 없습니다.
//
// 2. 사이드바 폴더 순서를 math / ml / philosophy / tools 로 고정하고 싶으면
//    Explorer 에 sortFn 을 넘기면 됩니다. 다만 FileNode 의 필드 이름이 버전마다
//    달라서(name vs displayName/slugSegment), quartz/components/ExplorerNode.tsx 를
//    먼저 확인하고 붙이세요. 지금은 기본 정렬입니다.
//
// 3. KaTeX 매크로는 quartz.config.ts 의 Plugin.Latex 쪽에서 등록합니다.
//    Plugin.Latex({ renderEngine: "katex", katexOptions: { macros: { ... } } })
