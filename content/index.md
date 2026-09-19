---
title: IVAN
description: 수학, 기계학습, 철학을 증명과 논증 단위로 정리해 두는 곳
---

> 평행선이 만나는 걸 내 눈으로 본다 해도, 나는 받아들이지 않겠다.

부산에서 수학을 공부하고 있습니다. 인공지능을 연계전공으로 하면서, 모델이 왜 작동하는지를 정의와 정리 수준까지 내려가 정리해 두려고 만든 공간입니다. 철학 쪽 글도 같이 올립니다. 대부분은 완결된 해설이 아니라 계속 고쳐 쓰는 노트에 가깝습니다.

## 연재

<div class="home-grid">
  <a class="home-card" href="/series/analysis">
    <span class="home-card-title">해석학 노트</span>
    <span class="home-card-desc">Wade, <i>An Introduction to Analysis</i>를 따라 실수의 완비성에서 리만 적분까지.</span>
    <span class="home-card-meta">진행 중 · 4/12</span>
  </a>
  <a class="home-card" href="/series/measure-theory">
    <span class="home-card-title">측도론 노트</span>
    <span class="home-card-desc">시그마 대수에서 출발해 르베그 적분의 수렴 정리까지.</span>
    <span class="home-card-meta">진행 중 · 3/8</span>
  </a>
  <a class="home-card" href="/series/german-existentialism">
    <span class="home-card-title">독일 실존주의 계보</span>
    <span class="home-card-desc">칸트의 인식론에서 유물론과 현상학을 거쳐 하이데거까지, 한 계보로 읽기.</span>
    <span class="home-card-meta">진행 중 · 2/10</span>
  </a>
  <a class="home-card" href="/series/cnn-to-vit">
    <span class="home-card-title">CNN에서 ViT까지</span>
    <span class="home-card-desc">VGG16 · ResNet-50 · YOLO · ViT를 구조 변화의 이유 중심으로.</span>
    <span class="home-card-meta">진행 중 · 2/4</span>
  </a>
  <a class="home-card" href="/series/history-of-philosophy">
    <span class="home-card-title">서양철학사</span>
    <span class="home-card-desc">탈레스부터. 위 계보를 읽는 데 필요한 배경을 역순으로 채워 나갑니다.</span>
    <span class="home-card-meta">준비 중</span>
  </a>
  <a class="home-card" href="/series/generative-models">
    <span class="home-card-title">생성 모델 읽기</span>
    <span class="home-card-desc">DCGAN과 CycleGAN의 손실 함수를 확률론 언어로 다시 쓰기.</span>
    <span class="home-card-meta">준비 중</span>
  </a>
</div>

## 먼저 읽을 만한 글

- [측도의 완비화가 필요한 이유](/notes/completion-of-measure) — 르베그 측도를 보렐 측도로 두면 무엇이 불편해지는지.
- [ResNet의 잔차 연결을 야코비안으로 보기](/notes/resnet-jacobian) — 기울기 소실 설명을 미분 가능성 조건으로 바꿔 쓴 글.
- [포이어바흐가 헤겔에게서 빼앗은 것](/notes/feuerbach-hegel) — 유물론적 전도가 실제로 무엇을 뒤집었는가.

## 읽는 순서

노트끼리 선수 관계가 있어서, 처음이라면 이 순서를 권합니다.

1. [집합과 기수](/notes/sets-and-cardinality)
2. [실수의 완비성](/notes/completeness-of-R) → 해석학 노트로 이어집니다
3. [시그마 대수](/notes/sigma-algebra) → 측도론 노트로 이어집니다
4. [선형대수 복습](/notes/linear-algebra-recap) → 기계학습 쪽 글의 전제

철학 글은 선수 관계가 느슨합니다. 계보 연재는 순서대로 읽는 편이 낫지만, 개별 철학자 글은 어디서 시작해도 됩니다.

## 주제별로 보기

[수학](/math) · [기계학습](/ml) · [철학](/philosophy) · [도구와 환경](/tools) · [전체 태그](/tags)

> [!note]- 이 블로그의 서식
> 수학 글은 Wade의 *An Introduction to Analysis* 조판을 따릅니다. 한 글 안에서 정의·정리·보조정리·주해가 번호 하나를 공유하고, 정의만 박스로 빼고 나머지는 굵은 표제로 구분합니다. 증명은 접혀 있고 클릭하면 펼쳐집니다.
>
> 철학 글은 별도 서식 없이 평문으로 씁니다. 논증을 콜아웃으로 잘라내면 텍스트의 결이 죽는다고 봐서요. 대신 인용은 출처와 판본을 밝히고, 원어 표기가 필요한 개념은 처음 나올 때 병기합니다.
>
> 자세한 건 [서식 규약](/notes/conventions)에 정리해 두었습니다.

## 요즘

- 읽는 중: Wade 3장, 하이데거 『존재와 시간』 1편
- 만지는 중: ViT 구현을 처음부터 다시 써 보기
- 미뤄 둔 것: DQN 노트 정리
