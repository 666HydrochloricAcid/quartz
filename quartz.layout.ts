// quartz.layout.ts 에 반영할 부분만 발췌했습니다.

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/666HydrochloricAcid",
      // 필요하면 여기에 추가
    },
  }),
}

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
    // 주제가 넷으로 늘었으니 폴더는 접힌 상태로 시작하는 편이 낫습니다.
    Component.Explorer({
      folderDefaultState: "collapsed",
      // math / ml / philosophy / tools 순으로 고정
      sortFn: (a, b) => {
        const order = ["math", "ml", "philosophy", "tools", "series", "notes"]
        const ai = order.indexOf(a.slugSegment)
        const bi = order.indexOf(b.slugSegment)
        if (ai !== -1 || bi !== -1) {
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
        }
        return a.displayName.localeCompare(b.displayName, "ko")
      },
    }),
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
        linkToMore: "tags/" as const,
        filter: (f) => !["conventions", "index"].includes(f.slug ?? ""),
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
}

// 참고
//
// 1. ConditionalRender 는 비교적 최근에 들어온 컴포넌트입니다.
//    quartz/components/index.ts 에 export 가 없으면 v4 최신으로 올리시거나,
//    ConditionalRender 없이 RecentNotes / TableOfContents 만 두셔도 됩니다.
//
// 2. Explorer 의 sortFn 시그니처는 버전에 따라 FileNode 구조가 조금 다릅니다.
//    타입 에러가 나면 quartz/components/ExplorerNode.tsx 에서 필드 이름을 확인하세요.
//    (구버전은 a.name, 신버전은 a.slugSegment / a.displayName)
//
// 3. 수학 글에 KaTeX 매크로를 쓰실 거면 quartz.config.ts 의
//    Plugin.Latex({ renderEngine: "katex", katexOptions: { macros: { ... } } })
//    쪽에 \abs, \norm 같은 걸 등록해 두면 글마다 다시 정의할 필요가 없습니다.