---
title: 수학 서식 테스트
tags:
  - meta
draft: true
---

각 환경의 결과가 먼저 나오고 바로 아래에 원본이 있습니다. `draft: true`라 배포본에는 안 올라갑니다.

여는 태그 다음 줄과 닫는 태그 앞줄은 **반드시 비워야** 하고, 항목 사이에도 빈 줄이 있어야 각각 별개 문단이 되어 매달린 들여쓰기가 걸립니다.

---

## Definition

<div class="def">

**Definition 1.1.** 집합 $X$ 위의 collection $\mathcal{A} \subseteq \mathcal{P}(X)$ 가 다음을 만족하면 $X$ 위의 **σ-algebra**라 한다.

1. $X \in \mathcal{A}$

2. $A \in \mathcal{A}$ 이면 $A^c \in \mathcal{A}$

3. $A_1, A_2, \ldots \in \mathcal{A}$ 이면 $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$

</div>

````markdown
<div class="def">

**Definition 1.1.** ... 다음을 만족하면 **σ-algebra**라 한다.

(i) $X \in \mathcal{A}$

(ii) $A \in \mathcal{A}$ 이면 $A^c \in \mathcal{A}$

</div>
````

## Recall

<div class="recall">

**Recall 1.2.** De Morgan's law에 의해 임의의 집합족에 대해 $\left( \bigcup_n A_n \right)^c = \bigcap_n A_n^c$ 가 성립한다.

</div>

````markdown
<div class="recall">

**Recall 1.2.** ...

</div>
````

## Theorem, Lemma, Corollary

<div class="thm">

**Theorem 1.3.** $\mathcal{A}$ 가 $X$ 위의 σ-algebra이면 다음이 성립한다.

1.  $\varnothing \in \mathcal{A}$

2. $\mathcal{A}$ 는 countable intersection에 대해 닫혀 있다.

</div>

<div class="lem">

**Lemma 1.4.** $f : X \to Y$ 가 measurable이고 $B \subseteq Y$ 가 Borel set이면 $f^{-1}(B)$ 는 measurable이다.

</div>

<div class="cor">

**Corollary 1.5.** Measurable function의 composition은 measurable이다.

</div>

````markdown
<div class="thm">

**Theorem 1.3.** ...

</div>

<div class="lem">

**Lemma 1.4.** ...

</div>

<div class="cor">

**Corollary 1.5.** ...

</div>
````

## Proof

<div class="pf">

*Proof.* (i)은 조건 1과 2에서 바로 나온다. (ii)는 Recall 1.2를 쓰면 된다.

$$\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^{c} \right)^{c}$$

우변의 각 $A_n^c$ 가 조건 2에 의해 $\mathcal{A}$ 에 속하고, 조건 3에 의해 그 union도 속하며, 다시 조건 2를 적용하면 그 complement도 속한다.

</div>

````markdown
<div class="pf">

*Proof.* ...

</div>
````

∎ 는 직접 치지 마세요. 마지막 요소 뒤에 자동으로 붙습니다.

## Remark, Example

<div class="rmk">

**Remark 1.6.** 조건 3에서 countable union을 finite union으로 바꾸면 algebra가 된다. 이 차이가 Lebesgue integral과 Riemann integral을 가른다.

</div>

<div class="ex">

**Example 1.7.** $X$ 가 uncountable일 때, countable이거나 complement가 countable인 부분집합들의 모임은 σ-algebra다.

</div>

## 이어지는 문단이 있을 때

둘째 문단부터 자동으로 매달린 들여쓰기가 걸립니다. 항목이 아니라 그냥 이어지는 설명이라면 `no-hang`을 붙이세요.

<div class="rmk no-hang">

**Remark 1.8.** 첫 문단입니다.

이 문단은 들여쓰기 없이 평범하게 이어집니다.

</div>

````markdown
<div class="rmk no-hang">
````

## 진단

| 증상 | 원인 |
| --- | --- |
| 박스 안에 `**` 나 `$` 가 그대로 보임 | 여는 태그 다음이나 닫는 태그 앞에 빈 줄 없음 |
| (ii)가 (i)과 같은 줄에서 시작 | 항목 사이에 빈 줄 없음 (한 문단으로 뭉침) |
| 표제가 본문과 같은 서체 | 표제가 문단 맨 앞이 아니거나 `**` 로 감싸지 않음 |
| ∎ 가 두 번 | 본문 끝에 직접 친 ∎ 가 있음 |
| 전체가 기울어짐 | Theorem 계열은 진술이 이탤릭인 것이 정상 |
