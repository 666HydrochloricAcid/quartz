---
title: Metatheory
tags:
  - meta
  - logic
  - foundations
---

논리학 교재를 펴면 첫 장부터 formula들의 "집합"이 나온다. 집합론 교재를 펴면 첫 장부터 공리가 first-order logic의 언어로 적혀 있다. 둘 중 무엇이 먼저냐고 물으면 어느 책도 답하지 않는다.

이 글은 그 질문에 대한 이 블로그의 답이다. 동시에, 이 블로그의 모든 수학 글이 말없이 기대고 있는 것을 한 곳에 적어 두는 문서이기도 하다.

결론부터 말하면 논리학도 집합론도 먼저가 아니다. 둘은 서로 다른 층에 놓여 있고, 둘 다 그 아래의 더 소박한 추론에 기댄다. 이 글은 먼저 그 층들을 구분하고(§1–2), 가장 아래 층에서 무엇을 가정하는지 명시한 뒤(§3), 그 위에서 "정의", "증명", "참"이 각각 무엇을 뜻하는지 정한다(§4–5). 마지막으로 이 블로그가 취하는 입장을 적는다(§6–7).

## 1. Metalanguage

"$\neg\varphi$는 formula다"라는 문장을 생각해 보자. 이 문장은 형식 언어로 쓰여 있지 않다. 한국어로, 형식 언어의 기호열 하나에 대해 말하고 있다. 논리학이 어려운 이유의 절반은, 언어에 대해 말하기 위해 또 다른 언어를 써야 한다는 데 있다.

<div class="def">

**Definition 0.1.** 연구 대상이 되는 형식 언어를 **Object language**, 그 언어에 대해 말하는 데 쓰는 언어를 **Metalanguage**라 한다. Object language를 대상으로 삼아 그 성질을 연구하는 이론을 **Metatheory**라 한다. ^def-object-language

</div>

**Remark 0.2.** 이 블로그의 metalanguage는 한국어에 통상적인 수학 표기를 더한 것이다. 같은 기호가 두 층에 모두 나타날 수 있다는 점에 주의해야 한다. Set Theory 연재에서 $\in$은 ZFC라는 object language의 기호지만, Mathematical Logic 연재에서 "$\varphi \in \Gamma$"라고 쓸 때의 $\in$은 metalanguage의 것이다. 대개는 문맥이 구분해 주지만, 혼동될 만한 곳에서는 어느 층인지 명시한다.

두 층을 표기로 구분하기 위해 다음을 따른다.

| 표기 | 층 | 뜻 |
| --- | --- | --- |
| $\neg, \wedge, \vee, \to, \leftrightarrow, \forall, \exists$ | object | 형식 언어의 논리 기호 |
| $\Longrightarrow, \Longleftrightarrow$, "아니다", "그리고" | meta | metalanguage의 추론 |
| $\varphi, \psi, \chi$ | meta | formula를 가리키는 변수 (metavariable) |
| $\Gamma, \Delta$ | meta | formula들의 집합 |
| $\mathcal{M}, \mathcal{N}$ | meta | structure |
| $\vdash$ | meta | 증명 가능하다 |
| $\models$ | meta | 참이다, 논리적으로 귀결된다 |
| $:=$, $:\Longleftrightarrow$ | meta | 정의한다 |
| $\equiv$ | meta | 기호열로서 똑같다 |
| $\ulcorner \varphi \urcorner$ | meta | formula $\varphi$ 자체를 하나의 대상으로 가리킴 |

**Remark 0.3.** 마지막 줄은 **use**와 **mention**의 구분이다. "부산은 항구 도시다"에서 부산은 도시를 가리키지만, "'부산'은 두 글자다"에서는 단어 자체를 가리킨다. Formula도 마찬가지로, 무언가를 주장하는 데 *쓰일* 수도 있고 연구의 대상으로 *언급될* 수도 있다. 대부분의 글에서는 이 구분을 문맥에 맡기지만, Gödel numbering처럼 formula를 수로 바꾸는 대목에서는 $\ulcorner \varphi \urcorner$로 명시한다.

## 2. 층의 사다리

이 블로그가 다루는 기초는 다섯 층으로 나뉜다.

| 층 | 다루는 것 | 기대는 것 |
| --- | --- | --- |
| 0 | 자연수, induction, 유한 기호열 | 없음 (출발점) |
| 1 | Syntax: formula, proof | 층 0 |
| 2 | 형식 이론: ZFC, PA | 층 1 |
| 3 | Semantics: structure, 참 | 층 0, 그리고 naive set theory |
| 4 | 내부화: ZFC 안에서 논리학을 재구성 | 층 2 |

층 1에서는 formula와 proof를 유한한 기호열로 정의한다. Formula 하나는 유한한 문자열이고 proof는 유한한 formula의 나열이므로, 층 0의 소박한 추론만으로 충분하다.

층 2에서는 층 1에서 만든 형식 언어로 공리를 적는다. 이 순간 집합론은 하나의 first-order 이론이 된다.

층 3에서는 "이 문장이 이 structure에서 참이다"를 정의한다. Structure의 domain은 일반적으로 무한하므로, 여기서부터 집합이 필요하다.

층 4에서는 ZFC 안에서 formula를 집합으로 코딩해, 논리학 전체를 ZFC의 정리들로 다시 얻는다.

**Remark 0.4.** 층 1과 층 4가 닮았기 때문에 순환처럼 보인다. 논리학으로 집합론을 세우고, 집합론으로 다시 논리학을 세우는 것처럼. 그러나 둘은 같은 것이 아니다. 층 1은 종이 위의 기호를 다루고, 층 4는 ZFC 안의 집합을 다룬다. 층 3에서 비형식적으로 증명한 completeness theorem과, 층 4에서 "ZFC $\vdash$ (completeness theorem의 형식화)"로 얻는 결과는 서로 다른 진술이다. 둘은 서로를 비추는 두 층이지, 하나가 다른 하나를 떠받치는 원이 아니다.

## 3. Metatheory의 명세

이 블로그의 공식적인 metatheory를 다음과 같이 정한다.

**Remark 0.5 (층 0).** 다음은 정당화 없이 자유롭게 쓴다.

1. 자연수와 그 위의 산술
2. Mathematical induction, 그리고 recursion에 의한 정의
3. 유한한 알파벳 위의 유한 기호열, 그 concatenation과 길이
4. 유한한 대상에 대한 경우 나누기

Syntax에 관한 결과, 예를 들어 unique readability나 "이 기호열은 formula인가"의 판정은 이것만으로 증명된다. 이 층은 primitive recursive arithmetic 정도의 약한 체계로 형식화될 수 있다고 알려져 있다.

**Remark 0.6 (naive set theory).** 층 3 이후로는 다음을 비형식적으로 쓴다. 집합과 부분집합, 순서쌍과 곱집합, relation과 function, 멱집합과 합집합, 그리고 무한집합으로서의 $\mathbb{N}$. 단, 원리적으로 ZFC 안에서 형식화될 수 있는 방식으로만 쓴다. 특히 "성질 $P$를 만족하는 모든 것의 집합"을 무제한으로 만들지 않고, 항상 이미 주어진 집합에서 부분집합을 떼어낸다. Russell 역설이 막히는 방식이 이것이다.

**Remark 0.7 (classical logic).** Metalanguage의 추론은 고전 논리를 따른다. 배중률과 귀류법을 자유롭게 쓴다.

**Remark 0.8 (선택공리).** 선택공리 또는 그 동치 명제(Zorn's lemma, well-ordering theorem)를 쓰는 정리에는 번호 뒤에 **(AC)**를 붙인다. 예를 들어 Measure Theory 연재의 Vitali set 구성, uncountable language에 대한 completeness theorem이 그렇다.

정리하면 이 블로그의 증명은 **ZFC 안에서 형식화될 수 있다는 의미에서** 엄밀하다. 실제로 형식화하지는 않는다. 형식화는 원리적으로 가능하다는 것을 보장할 뿐이고, 글은 사람이 읽을 수 있는 수준의 증명으로 쓴다.

## 4. 정의와 primitive term

이론 안의 용어는 두 종류다. 다른 용어로 정의되는 것과, 정의되지 않는 것.

<div class="def">

**Definition 0.9.** 새 기호를, 이미 있는 기호들로 이루어진 식의 약칭으로 도입하는 것을 **explicit definition**이라 한다. 예를 들어

$$A \subseteq B \ :\Longleftrightarrow\ \forall x\,(x \in A \to x \in B)$$

로 $\subseteq$를 도입한다. Explicit definition으로 도입된 기호는 원리적으로 언제나 제거할 수 있다. ^def-explicit-definition

</div>

<div class="def">

**Definition 0.10.** 이론 안에서 정의되지 않고 공리에 의해서만 규정되는 기호를 **primitive term**이라 한다. ZFC의 $\in$, PA의 $0, S, +, \cdot$이 그 예다. ^def-primitive-term

</div>

**Remark 0.11.** Primitive term은 metatheory로 올라가도 절대적인 의미로 정의되지 않는다. 공리가 할 수 있는 일은 그 용어가 만족해야 할 조건을 적는 것뿐이고, 그 조건을 만족하는 해석은 여럿일 수 있다. Hilbert는 기하학의 점, 직선, 평면을 탁자, 의자, 맥주잔이라고 불러도 공리만 성립하면 기하학은 그대로라고 말했다고 전해진다. 이를 공리가 primitive term을 **implicit하게 정의한다**고 한다.

Frege는 이 견해에 반대했다. 공리는 이미 의미가 정해진 용어에 대한 참인 진술이어야 하며, 공리가 용어의 의미를 만들어낸다는 것은 순서가 거꾸로라는 것이다. 이 블로그는 수학을 하는 동안에는 Hilbert의 방식을 따른다. 다만 그것이 철학적 논쟁의 결론은 아니라는 점을 적어 둔다.

그렇다면 metatheory는 primitive term에 대해 무엇을 하는가. 정의하는 대신 **해석**한다.

<div class="def">

**Definition 0.12.** Language $\mathcal{L}$의 **structure** $\mathcal{M}$은 공집합이 아닌 집합 $M$(domain)과, $\mathcal{L}$의 각 기호에 대한 해석으로 이루어진다. 각 constant symbol $c$에는 원소 $c^{\mathcal{M}} \in M$을, 각 $n$항 relation symbol $R$에는 $R^{\mathcal{M}} \subseteq M^n$을, 각 $n$항 function symbol $f$에는 $f^{\mathcal{M}} : M^n \to M$을 대응시킨다. ^def-structure

</div>

**Remark 0.13.** Structure는 층 3의 개념이다. Primitive term에 의미를 부여하는 것은 한 층 위의 언어이며, 그 언어 역시 자기만의 primitive term을 가진다. 이 되물음은 층 0에서 멈춘다. 이것에 대해서는 §7에서 다시 이야기한다.

## 5. 증명과 참

이 블로그에서 가장 엄격하게 구분하는 두 개념이다.

<div class="def">

**Definition 0.14.** $\Gamma \vdash \varphi$란, $\Gamma$의 원소들과 논리 공리들로부터 추론 규칙을 유한 번 적용해 $\varphi$에 이르는 formula의 유한열이 존재한다는 뜻이다. 이때 $\varphi$는 $\Gamma$에서 **증명 가능하다**고 한다. ^def-provability

</div>

증명 가능성은 층 1의 개념이다. 기호열을 규칙에 따라 늘어놓을 수 있는지만 묻고, 그 기호들이 무엇을 뜻하는지는 묻지 않는다.

참은 다르다. 형식 언어에서 "참"은 1933년 Tarski가 준 정의가 표준이다.

<div class="def">

**Definition 0.15.** Structure $\mathcal{M}$과 sentence $\varphi$에 대해, "$\varphi$가 $\mathcal{M}$에서 **참**이다"($\mathcal{M} \models \varphi$)를 $\varphi$의 구성에 대한 recursion으로 정의한다.

1. $\mathcal{M} \models t_1 = t_2 \ \Longleftrightarrow\ t_1^{\mathcal{M}} = t_2^{\mathcal{M}}$
2. $\mathcal{M} \models R(t_1, \ldots, t_n) \ \Longleftrightarrow\ (t_1^{\mathcal{M}}, \ldots, t_n^{\mathcal{M}}) \in R^{\mathcal{M}}$
3. $\mathcal{M} \models \neg\varphi \ \Longleftrightarrow\ \mathcal{M} \models \varphi$가 아니다
4. $\mathcal{M} \models \varphi \wedge \psi \ \Longleftrightarrow\ \mathcal{M} \models \varphi$이고 $\mathcal{M} \models \psi$
5. $\mathcal{M} \models \exists x\, \varphi(x) \ \Longleftrightarrow\ \mathcal{M} \models \varphi(a)$인 $a \in M$이 존재한다

여기서 $t^{\mathcal{M}}$은 closed term $t$가 $\mathcal{M}$에서 가리키는 원소다. ^def-truth

</div>

**Remark 0.16.** 5번은 $M$의 원소 $a$에 대한 이름을 언어에 잠시 추가한다고 생각하고 읽으면 된다. 엄밀하게는 free variable 때문에 variable assignment를 끼운 satisfaction을 먼저 정의하고, 참은 그 특수한 경우로 얻는다. 이 작업은 Mathematical Logic 연재에서 한다.

**Remark 0.17.** 위 정의에는 이상한 점이 있다. $\neg$를 정의하는 데 "아니다"를, $\exists$를 정의하는 데 "존재한다"를, 심지어 1번에서는 object language의 $=$를 정의하는 데 metalanguage의 $=$를 쓰고 있다. 순환처럼 보이지만, 좌변은 object language의 기호이고 우변은 metalanguage의 말이다. **대상 언어의 논리 기호를 메타 언어의 논리로 풀어내는 것**, 그것이 Tarski 정의의 전부다. Tarski는 참의 정의가 적절하려면 "'눈은 희다'는 참이다 $\Longleftrightarrow$ 눈은 희다" 꼴의 문장을 모두 함축해야 한다는 기준을 세웠고, 이를 Convention T라 부른다.

<div class="def">

**Definition 0.18.** Theory $T$의 모든 문장이 $\mathcal{M}$에서 참이면 $\mathcal{M}$을 $T$의 **model**이라 한다. $\Gamma$의 모든 model에서 $\varphi$가 참이면 $\varphi$가 $\Gamma$로부터 **논리적으로 귀결된다**고 하고 $\Gamma \models \varphi$로 쓴다. ^def-model

</div>

참이 structure에 상대적이라는 점을 강조해 둔다. ZFC의 문장이 "그냥 참"인지 묻는 것은 이 정의 안에서는 의미가 없다. 물을 수 있는 것은 특정 model에서 참인지, 또는 모든 model에서 참인지다.

그렇다면 참은 왜 굳이 한 층 위에서 정의되어야 하는가. 다음 정리가 그 이유다.

**Theorem 0.19 (Tarski).** 산술의 언어에는 다음을 만족하는 formula $\mathrm{True}(x)$가 존재하지 않는다. 모든 sentence $\varphi$에 대해

$$\mathbb{N} \models \mathrm{True}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi.$$

*Proof.* Mathematical Logic 연재에서 다룬다. 요지는, 그런 formula가 있다면 거짓말쟁이 역설을 형식 언어 안에서 재현할 수 있다는 것이다. ∎

**Remark 0.20.** 산술을 표현할 만큼 풍부한 언어는 자기 자신의 참을 정의할 수 없다. 참은 원리적으로 metatheory의 개념이다. "이론 안에서 정의되지 않는 것을 바깥에서 다룬다"는 metatheory의 그림에 가장 정확히 들어맞는 용어가 바로 참이다.

**Remark 0.21.** First-order logic에서는 soundness와 completeness에 의해

$$\Gamma \vdash \varphi \ \Longleftrightarrow\ \Gamma \models \varphi$$

가 성립한다. 반면 incompleteness theorem은, 자연수의 standard model $\mathbb{N}$에서 참이지만 PA에서 증명할 수 없는 문장이 있다고 말한다. 두 정리는 모순이 아니다. Completeness가 말하는 것은 **모든** model에서의 참이고, incompleteness가 말하는 것은 **특정한** model 하나에서의 참이다. 이 차이를 놓치면 두 정리가 서로 충돌하는 것처럼 들린다.

## 6. 이 블로그의 입장

**수학 글**은 §3의 metatheory 위에서 쓴다. 고전 논리를 따르고, 선택공리를 쓰면 표시한다.

존재를 증명하되 그 대상을 구성하지는 않는 증명, 예를 들어 귀류법만으로 "존재하지 않는다고 하면 모순"을 보이는 증명은, 가능하면 **Remark (비구성적)**으로 그 사실을 적어 둔다. 고전 논리를 따르는 것과, 그 선택이 무엇을 대가로 치르는지 아는 것은 별개의 일이다. Brouwer는 보여주지 않은 것을 존재한다고 인정하지 않았다. 이 블로그는 Brouwer의 편에 서지는 않지만, 그가 어디서 멈춰 섰는지는 표시해 둔다.

**기계학습 글**은 수학 글과 같은 기초 위에 있다. 확률은 Kolmogorov의 공리, 즉 measure theory 위에서 다룬다. 다만 구현 코드가 섞이므로, 코드가 어떻게 동작한다는 경험적 주장과 수학적 정리를 구분해서 쓴다.

**철학 글**은 이 형식 장치를 쓰지 않는다. 평문으로 쓰고, 논증을 번호 붙은 단위로 자르지 않는다. 특히 철학 글에서 "참"이라는 말이 나오면 그것은 Definition 0.15의 의미가 아니다. 하이데거가 『존재와 시간』 §44에서 참을 비은폐성(Unverborgenheit)으로 다시 읽을 때, 그는 바로 Tarski가 형식화한 대응 관계의 뿌리를 문제 삼고 있다. 두 의미를 섞지 않되, 필요한 곳에서는 서로 링크한다.

## 7. 바닥에 관하여

§2의 사다리는 층 0에서 멈춘다. 자연수, induction, 유한 기호열. 이것들은 이 글 어디에서도 정당화되지 않았다.

정당화할 수 없어서가 아니라, 정당화하려면 또 다른 층이 필요하고, 그 층도 무언가에 기대야 하기 때문이다. 어딘가에서 멈춰야 한다면, 거의 모든 사람이 이미 공유하고 있는 가장 소박한 추론에서 멈추는 것이 정직하다. Wittgenstein은 정당화가 바닥에 닿으면 삽날이 휜다고, 그때는 "나는 그냥 이렇게 한다"고 말할 수밖에 없다고 썼다.

이 블로그의 이름에 들어 있는 **Validation**은 그런 의미다. 모든 것을 정당화하겠다는 것이 아니다. 무언가를 정당화할 때마다, 지금 어느 층에 서서 무엇에 기대고 있는지를 밝혀 두겠다는 것이다.

---

## 참고

- Kenneth Kunen, *The Foundations of Mathematics* (2009). 논리학과 집합론을 한 권에서 함께 세우면서, 각 단계에서 어느 층의 추론을 쓰는지 계속 명시한다. 이 글의 §2는 이 책의 관점에 크게 기대고 있다.
- Herbert B. Enderton, *A Mathematical Introduction to Logic*, 2nd ed. (2001). Definition 0.12, 0.15의 표준적인 전개.
- Alfred Tarski, 「형식화된 언어에서의 참 개념」 (1933; 독일어판 1935).
- David Hilbert, *Grundlagen der Geometrie* (1899). 그리고 이를 둘러싼 Frege와 Hilbert의 서신 (1899–1900).
- Martin Heidegger, 『존재와 시간』 (1927), §44.
- Ludwig Wittgenstein, 『철학적 탐구』 (1953), §217.
