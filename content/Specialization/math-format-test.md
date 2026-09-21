---
title: 수학 서식 테스트
tags:
draft: false
---

서식이 제대로 붙었는지 확인하고 쓰는 법을 익히기 위한 페이지입니다. 각 항목마다 결과가 먼저 나오고 바로 아래에 원본이 있습니다. `draft: true`라서 배포본에는 안 올라갑니다.

---

## 1. Definition

외곽선 박스 안에 굵은 표제가 나와야 합니다.

<div class="def">

**Definition 1.1.** 집합 $X$ 위의 collection $\mathcal{A} \subseteq \mathcal{P}(X)$ 가 다음을 만족하면 $X$ 위의 **σ-algebra**라 한다. ^def-1-1

1. $X \in \mathcal{A}$
2. $A \in \mathcal{A}$ 이면 $A^c \in \mathcal{A}$
3. $A_1, A_2, \ldots \in \mathcal{A}$ 이면 $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$

</div>

````markdown
<div class="def">

**Definition 1.1.** 집합 $X$ 위의 collection $\mathcal{A} \subseteq \mathcal{P}(X)$ 가 다음을 만족하면 $X$ 위의 **σ-algebra**라 한다.

1. $X \in \mathcal{A}$
2. $A \in \mathcal{A}$ 이면 $A^c \in \mathcal{A}$
3. $A_1, A_2, \ldots \in \mathcal{A}$ 이면 $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$

</div>
````

`<div class="def">` 다음 줄과 `</div>` 앞줄이 **반드시 비어 있어야** 합니다. 이게 전부입니다.

백링크는 [[math-format-test#^def-1-1|Def 1.1]] 이렇게.

---

## 2. Remark

박스 없이 표제만 굵게.

**Remark 1.2.** 조건 3에서 countable union을 finite union으로 바꾸면 algebra가 된다. 이 차이가 Lebesgue integral과 Riemann integral을 가른다.

````markdown
**Remark 1.2.** 조건 3에서 countable union을 finite union으로 바꾸면 algebra가 된다. ...
````

---

## 3. Theorem과 Proof

**Theorem 1.3.** $\mathcal{A}$ 가 $X$ 위의 σ-algebra이면 $\mathcal{A}$ 는 countable intersection에 대해서도 닫혀 있다.

*Proof.* De Morgan's law에 의해

$$\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^{c} \right)^{c}$$

이다. 조건 2에 의해 각 $A_n^c \in \mathcal{A}$ 이고, 조건 3에 의해 그 union이 $\mathcal{A}$ 에 속하며, 다시 조건 2를 적용하면 그 complement도 $\mathcal{A}$ 에 속한다. ∎

````markdown
**Theorem 1.3.** $\mathcal{A}$ 가 $X$ 위의 σ-algebra이면 ...

*Proof.* De Morgan's law에 의해

$$\bigcap_{n=1}^{\infty} A_n = \left( \bigcup_{n=1}^{\infty} A_n^{c} \right)^{c}$$

이다. ... 그 complement도 $\mathcal{A}$ 에 속한다. ∎
````

`*Proof.*` 는 별표 하나(이탤릭), 표제들은 별표 둘(굵게). ∎ 는 직접 칩니다. macOS에서는 문자 뷰어에서 "end of proof"로 찾거나, 수식으로 `$\blacksquare$` 를 써도 됩니다.

---

## 4. Lemma · Corollary · Proposition

전부 같은 방식입니다.

**Lemma 1.4.** $f: X \to Y$ 가 measurable이고 $B \subseteq Y$ 가 Borel set이면 $f^{-1}(B)$ 는 measurable이다.

**Corollary 1.5.** Measurable function의 composition은 measurable이다.

**Proposition 1.6.** Monotone increasing measurable function sequence의 pointwise limit은 measurable이다.

````markdown
**Lemma 1.4.** ...

**Corollary 1.5.** ...

**Proposition 1.6.** ...
````

---

## 5. 접는 Proof (선택)

긴 증명만 접고 싶을 때. 평소에는 3번처럼 평문으로 쓰세요.

<details class="proof">
<summary>Proof.</summary>

귀납법으로 보인다. $n = 1$ 인 경우는 Theorem 1.3에서 이미 확인했다.

$n$ 에서 성립한다고 가정하면, 조건 3을 직접 적용해 $n+1$ 에서도 성립한다.

</details>

````markdown
<details class="proof">
<summary>Proof.</summary>

귀납법으로 보인다. ...

$n$ 에서 성립한다고 가정하면, ...

</details>
````

여기서도 `<summary>` 다음 줄과 `</details>` 앞줄은 비워야 합니다. 이 경우 ∎ 는 자동으로 붙으니 직접 치지 마세요.

---

## 6. Definition 안의 display math

<div class="def">

**Definition 1.7.** Measure space $(X, \mathcal{A}, \mu)$ 위의 nonnegative measurable function $f$ 에 대해

$$\int_X f \, d\mu = \sup \left\{ \int_X \varphi \, d\mu : 0 \le \varphi \le f, \ \varphi \text{ simple} \right\}$$

로 정의한다.

</div>

````markdown
<div class="def">

**Definition 1.7.** Measure space $(X, \mathcal{A}, \mu)$ 위의 ...

$$\int_X f \, d\mu = \sup \left\{ ... \right\}$$

로 정의한다.

</div>
````

---

## 7. 흔한 실수

### 빈 줄을 빠뜨린 경우

<div class="def">
**Definition 1.8.** 이 줄은 굵게 나오지 않고 별표가 그대로 보여야 합니다. $x^2$ 도 렌더링되지 않아야 하고요.
</div>

````markdown
<div class="def">
**Definition 1.8.** 이 줄은 굵게 나오지 않고 ...
</div>
````

위 박스 안에서 별표와 달러 기호가 날것으로 보인다면 정상입니다. 이게 빈 줄이 없을 때의 모습이에요.

### 표제 뒤 마침표

Wade 조판에서는 번호 뒤에 마침표가 붙고 **굵은 글씨 안에** 들어갑니다. `**Definition 1.1**.` 이 아니라 `**Definition 1.1.**` 입니다.

---

## 8. 진단

| 증상 | 원인 |
| --- | --- |
| 박스 자체가 안 나옴 | `custom.scss` 미로드 |
| 박스는 나오는데 안쪽에 `**` 나 `$` 가 보임 | `<div>` 다음 또는 `</div>` 앞 빈 줄 누락 |
| 박스가 두 개로 쪼개짐 | 박스 안에 `</div>` 가 한 번 더 있거나, 들여쓰기가 섞임 |
| 접는 Proof 에 ∎ 가 두 번 | 본문 끝에 직접 친 ∎ 가 있음 |
| 수식이 박스를 뚫고 나감 | 브라우저 캐시 — 강력 새로고침 |
