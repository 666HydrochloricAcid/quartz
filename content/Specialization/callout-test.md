---
title: 콜아웃 테스트
tags:
  - meta
draft: true
---

서식이 제대로 붙었는지 확인하고 쓰는 법을 익히기 위한 페이지입니다. 각 항목마다 결과가 먼저 나오고 바로 아래에 원본이 있습니다. `draft: true`라서 배포본에는 안 올라갑니다.

---

## 1. 정의

정의만 박스로 나와야 합니다.

> [!definition] 1.1 정의
> 집합 $X$ 위의 모임 $\mathcal{A} \subseteq \mathcal{P}(X)$ 가 다음을 만족하면 $X$ 위의 **시그마 대수**라 한다.
>
> 1. $X \in \mathcal{A}$
> 2. $A \in \mathcal{A}$ 이면 $A^c \in \mathcal{A}$
> 3. $A_1, A_2, \ldots \in \mathcal{A}$ 이면 $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$

````markdown
> [!definition] 1.1 정의
> 집합 $X$ 위의 모임 $\mathcal{A} \subseteq \mathcal{P}(X)$ 가 다음을 만족하면 $X$ 위의 **시그마 대수**라 한다.
>
> 1. $X \in \mathcal{A}$
> 2. $A \in \mathcal{A}$ 이면 $A^c \in \mathcal{A}$
> 3. $A_1, A_2, \ldots \in \mathcal{A}$ 이면 $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$
````

빈 줄도 `>` 를 붙여야 합니다. 안 붙이면 거기서 콜아웃이 끊깁니다.

---

## 2. 주해

표제만 굵고 본문은 평문, 박스 없음.

> [!remark] 1.2 주해
> 조건 3에서 가산 합집합을 유한 합집합으로 바꾸면 대수(algebra)가 된다. 이 차이가 르베그 적분과 리만 적분을 가른다.

````markdown
> [!remark] 1.2 주해
> 조건 3에서 가산 합집합을 유한 합집합으로 바꾸면 대수(algebra)가 된다. 이 차이가 르베그 적분과 리만 적분을 가른다.
````

---

## 3. 정리와 증명

정리 진술은 이탤릭, 증명은 접힌 상태로 시작하고 끝에 ∎ 가 붙어야 합니다.

> [!theorem] 1.3 정리
> $\mathcal{A}$ 가 $X$ 위의 시그마 대수이면 $\mathcal{A}$ 는 가산 교집합에 대해서도 닫혀 있다.

> [!proof]- 증명
> 드모르간 법칙에 의해
> $$\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^{c} \right)^{c}$$
> 이다. 조건 2에 의해 각 $A_n^c \in \mathcal{A}$ 이고, 조건 3에 의해 그 합집합이 $\mathcal{A}$ 에 속하며, 다시 조건 2를 적용하면 그 여집합도 $\mathcal{A}$ 에 속한다.

````markdown
> [!theorem] 1.3 정리
> $\mathcal{A}$ 가 $X$ 위의 시그마 대수이면 $\mathcal{A}$ 는 가산 교집합에 대해서도 닫혀 있다.

> [!proof]- 증명
> 드모르간 법칙에 의해
> $$\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^{c} \right)^{c}$$
> 이다. 조건 2에 의해 각 $A_n^c \in \mathcal{A}$ 이고, ...
````

`-` 는 접힘, `+` 는 펼침, 아무것도 안 붙이면 접히지 않고 토글도 안 생깁니다. 짧은 증명은 `+` 로 펼쳐 두세요.

---

## 4. 보조정리 · 따름정리 · 명제

셋 다 정리와 같은 조판입니다.

> [!lemma] 1.4 보조정리
> $f: X \to Y$ 가 가측이고 $B \subseteq Y$ 가 보렐 집합이면 $f^{-1}(B)$ 는 가측이다.

> [!corollary] 1.5 따름정리
> 가측 함수의 합성은 가측이다.

> [!proposition] 1.6 명제
> 단조 증가하는 가측 함수열의 극한은 가측이다.

````markdown
> [!lemma] 1.4 보조정리
> ...

> [!corollary] 1.5 따름정리
> ...

> [!proposition] 1.6 명제
> ...
````

---

## 5. 줄임말

타이핑을 줄이려면 아래도 같은 결과입니다.

> [!def] 1.7 정의
> `def` 는 `definition` 과 같습니다.

> [!thm] 1.8 정리
> `thm`, `cor`, `prop`, `rmk`, `pf` 도 각각 동작합니다.

> [!pf]+ 증명
> 자명하다.

````markdown
> [!def] 1.7 정의
> ...

> [!thm] 1.8 정리
> ...

> [!pf]+ 증명
> 자명하다.
````

---

## 6. 흔한 실수

### 제목을 안 쓴 경우

> [!definition]
> 제목을 생략하면 타입 이름이 그대로 노출됩니다. 번호 체계를 쓰는 이상 항상 제목을 적으세요.

### 빈 줄에 `>` 를 빠뜨린 경우

> [!remark] 잘못된 예
> 이 다음 줄에 `>` 없는 빈 줄을 두면

여기서부터는 콜아웃 밖입니다. 위 블록이 여기서 끊겼다면 정상 동작입니다.

### 디스플레이 수식

`$$` 는 콜아웃 안에서도 각 줄 앞에 `>` 가 필요합니다. 한 줄로 쓰는 편이 안전합니다.

> [!remark] 수식 테스트
> 인라인 $\int_0^1 x^2\,dx = \tfrac{1}{3}$ 과
> $$\lim_{n \to \infty} \int f_n \, d\mu = \int \lim_{n \to \infty} f_n \, d\mu$$
> 둘 다 렌더링되어야 합니다.

---

## 7. 중첩

증명 안에 주해를 넣는 것도 됩니다. 자주 쓸 일은 없지만 깨지지는 않는지 확인용.

> [!proof]+ 증명
> 귀납법으로 보인다.
>
> > [!remark] 참고
> > 기저 사례는 1.3에서 이미 확인했다.
>
> 귀납 단계는 조건 3의 직접 적용이다.

---

## 8. 진단

| 증상 | 원인 |
| --- | --- |
| 전부 파란 기본 콜아웃 | `ofm.ts` 의 `calloutMapping` 추가 누락 |
| 매핑은 됐는데 회색 밋밋한 박스 | `custom.scss` 미로드 또는 선택자 불일치 |
| 정의 박스가 안 나옴 | `.callout[data-callout="definition"]` 특이도 부족 — Quartz 기본 `callouts.scss` 보다 뒤에 와야 함 |
| 증명 토글이 안 눌림 | 제목 뒤 `-` 누락 |
| ∎ 가 두 번 | 본문 끝에 직접 적은 ∎ 가 있는지 확인 |
| 수식이 날것으로 보임 | `quartz.config.ts` 의 `Plugin.Latex` 확인 |

브라우저 개발자 도구에서 해당 blockquote 를 눌러 `data-callout` 속성값이 `definition` 인지 `note` 인지 보면 위 둘을 바로 구분할 수 있습니다.
