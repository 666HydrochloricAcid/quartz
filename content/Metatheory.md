---
title: Metatheory
tags:
  - meta
  - logic
  - foundations
draft: false
---
# 0.0 Introduction

---

In the pursuit of rigor, one can trace the prerequisites of any subject backwards, and the trail soon arrives at logic and set theory. Yet a look through introductory texts on either subject reveals that each almost always names the other as its prerequisite. Logic needs sets in order to speak of structures, interpretations, and models; set theory needs logic in order to state its axioms and to say what counts as a proof from them. This post grew out of an elementary curiosity about what lies beneath this circle: what the axioms each of them rests on actually are, and what it means for a statement to be _true_.

To state the conclusion first: neither logic nor set theory comes first. The two sit at different levels, and both rest on a more modest form of reasoning beneath them. This post first distinguishes these levels (§0.1–0.2), then makes explicit what is assumed at the lowest level (§0.3), and on that basis fixes what _definition_, _proof_, and _truth_ each mean (§0.4–0.5). Finally, it states the position **IVAN** takes (§0.6–0.7).

# 0.1 Metalanguage

---

Consider the sentence "$\neg\varphi$ is a formula." This sentence is not written in a formal language. It is written in English, and it talks about a string of symbols of a formal language. Half of what makes logic difficult is that, in order to speak about a language, we must use yet another language.

<div class="def">

**Definition 0.1.1 [Object Language and Metalanguage]** The formal language under study is called the **object language**, and the language used to speak about it is called the **metalanguage**. A theory that takes an object language as its subject and studies its properties is called a **metatheory**. ^def-0-1-1

</div>

<div class='rmk'>

**Remark 0.1.2** The metalanguage of this blog is English, or Korean in some series, supplemented with ordinary mathematical notation. Note that the same symbol can appear at both levels. In the [[Mathematics/Set Theory/index|Set Theory]] series, $\in$ is a symbol of the object language of ZFC, but when we write "$\varphi\in\Gamma$" in the [[Mathematics/Mathematical Logics/index|Mathematical Logic]] series, $\in$ belongs to the metalanguage. Context usually separates the two; where confusion is likely, the level is stated explicitly.

</div>

To keep the two levels apart in notation, we adopt the following conventions.

<div align='center'>

| Notation                                                     | Level  | Meaning                                          |
| ------------------------------------------------------------ | ------ | ------------------------------------------------ |
| $\neg, \wedge, \vee, \to, \leftrightarrow, \forall, \exists$ | object | logical symbols of the formal language           |
| $\Longrightarrow, \Longleftrightarrow$, "not", "and"         | meta   | inference in the metalanguage                    |
| $\varphi, \psi, \chi$                                        | meta   | variables ranging over formulas (metavariables)  |
| $\Gamma, \Delta$                                             | meta   | sets of formulas                                 |
| $\mathcal{M}, \mathcal{N}$                                   | meta   | structures                                       |
| $\vdash$                                                     | meta   | is provable                                      |
| $\models$                                                    | meta   | is true in; is a logical consequence of          |
| $:=$, $:\Longleftrightarrow$                                 | meta   | is defined as                                    |
| $\equiv$                                                     | meta   | identical as strings of symbols                  |
| $\ulcorner \varphi \urcorner$                                | meta   | the formula $\varphi$ itself, taken as an object |

</div>

<div class='rmk'>

**Remark 0.1.3** The last row expresses the distinction between **use** and **mention**. In "Busan is a port city," the word _Busan_ refers to a city; in "'Busan' has five letters," it refers to the word itself. A formula, likewise, can be _used_ to assert something or _mentioned_ as an object of study. Most notes leave this distinction to context, but where formulas are turned into numbers, as in Gödel numbering, we write $\ulcorner \varphi \urcorner$ explicitly.

</div>

# 0.2 The Ladder of Levels

---

The foundations treated on this blog fall into five levels.

<div align='center'>

| Level | Subject                                               | Relies on                     |
| ----- | ----------------------------------------------------- | ----------------------------- |
| 0     | Natural numbers, induction, finite strings of symbols | Nothing (the starting point)  |
| 1     | Syntax: formulas and proofs                           | Level 0                       |
| 2     | Formal theories: ZFC, PA                              | Level 1                       |
| 3     | Semantics: structures and truth                       | Level 0, and naive set theory |
| 4     | Internalization: logic reconstructed inside ZFC       | Level 2                       |

</div>

At level 1, formulas and proofs are defined as finite strings of symbols. A formula is a finite string and a proof is a finite sequence of formulas, so the modest reasoning of level 0 suffices.

At level 2, axioms are written down in the formal language built at level 1. At that moment, set theory becomes one first-order theory among others.

At level 3, we define what it means for a sentence to be true in a structure. Since the domain of a structure is in general infinite, sets are needed from this point on.

At level 4, formulas are coded as sets inside ZFC, and the whole of logic is recovered as theorems of ZFC.

<div class='rmk'>

**Remark 0.2.1** Levels 1 and 4 resemble each other, and this is why the situation looks circular: logic builds set theory, and set theory rebuilds logic. But the two are not the same. Level 1 handles symbols on paper; level 4 handles sets inside ZFC. The completeness theorem proved informally at level 3 and the result "ZFC $\vdash$ (the formalized completeness theorem)" obtained at level 4 are different statements. They are two levels that mirror each other, not a circle in which each holds the other up.

</div>

# 0.3 Specifying the Metatheory

---

We fix the official metatheory of this blog as follows.

<div class='rmk'>

**Remark 0.3.1 [Level 0]** The following are used freely, without justification.

1. The natural numbers and arithmetic on them
2. Mathematical induction, and definition by recursion
3. Finite strings over a finite alphabet, together with their concatenation and length
4. Case analysis over finitely many objects

</div>

Results about syntax, such as unique readability or deciding whether a given string is a formula, are proved using these alone. This level is known to be formalizable in a weak system such as primitive recursive arithmetic.

<div class='rmk'>

**Remark 0.3.2 [Naive Set Theory]** From level 3 on, we use the following informally: sets and subsets, ordered pairs and Cartesian products, relations and functions, power sets and unions, and $\mathbb{N}$ as an infinite set. These are used only in ways that could in principle be formalized in ZFC. In particular, we never form "the set of all things with property $P$" without restriction; we always carve a subset out of a set already given. This is exactly how Russell's paradox is blocked.

</div>

<div class='rmk'>

**Remark 0.3.3 [Classical Logic]** Reasoning in the metalanguage follows classical logic. The law of excluded middle and proof by contradiction are used freely.

</div>

<div class='rmk'>

**Remark 0.3.4 [Axiom of Choice]** Any theorem whose proof uses the axiom of choice, or an equivalent form such as Zorn's lemma or the well-ordering theorem, is marked **(AC)** after its number. Examples include the construction of the Vitali set in the [[Mathematics/Measure Theory/index|Measure Theory]] series and the completeness theorem for uncountable languages.

</div>

In short, proofs on this blog are rigorous **in the sense that they can be formalized in ZFC**. They are not actually formalized. Formalizability only guarantees that it could be done in principle; the notes themselves are written as proofs a person can read.

# 0.4 Definitions and Primitive Terms

---

The terms of a theory are of two kinds: those defined in terms of others, and those that are not defined at all.

<div class="def">

**Definition 0.4.1 [Explicit Definitions]** Introducing a new symbol as an abbreviation for an expression built from existing symbols is called an **explicit definition**. For example, $\subseteq$ is introduced by

$$ A \subseteq B \ :\Longleftrightarrow\ \forall x,(x \in A \to x \in B). $$

A symbol introduced by an explicit definition can always, in principle, be eliminated. ^def-0-4-1

</div> 

<div class="def">

**Definition 0.4.2 [Primitive Terms]** A symbol that is not defined within a theory and is constrained only by its axioms is called a **primitive term**. Examples are $\in$ in ZFC and $0, S, +, \cdot$ in PA. ^def-0-4-2

</div>

<div class='rmk'>

**Remark 0.4.3** Primitive terms do not receive an absolute definition even when we move up to the metatheory. All the axioms can do is write down the conditions the term must satisfy, and there may be many interpretations that satisfy them. Hilbert is reported to have said that one could call points, lines, and planes "tables, chairs, and beer mugs," and geometry would be unchanged as long as the axioms held. This is described by saying that the axioms define the primitive terms **implicitly**.

</div>

Frege objected to this view. Axioms, he held, must be true statements about terms whose meaning is already fixed; to say that axioms create the meaning of their terms gets the order backwards. While doing mathematics, this blog follows Hilbert's approach. We note, however, that this is not a verdict on the philosophical dispute.

What, then, does the metatheory do with primitive terms? Instead of defining them, it **interprets** them.

<div class="def">

**Definition 0.4.4 [Structures]** A **structure** $\mathcal{M}$ for a language $\mathcal{L}$ consists of a nonempty set $M$, called its domain, together with an interpretation of each symbol of $\mathcal{L}$: to each constant symbol $c$ it assigns an element $c^{\mathcal{M}} \in M$, to each $n$-ary relation symbol $R$ a subset $R^{\mathcal{M}} \subseteq M^n$, and to each $n$-ary function symbol $f$ a function $f^{\mathcal{M}} : M^n \to M$. ^def-0-4-4

</div>

<div class='rmk'>

**Remark 0.4.5** Structures are a level-3 notion. What gives meaning to primitive terms is a language one level up, and that language has primitive terms of its own. This regress stops at level 0. We return to this in [[#0.7 On Bedrock|§0.7]].

</div>

# 0.5 Proof and Truth

---

These are the two notions this blog keeps most strictly apart.

<div class="def">

**Definition 0.5.1 [Provability]** $\Gamma \vdash \varphi$ means that there exists a finite sequence of formulas ending in $\varphi$, obtained from members of $\Gamma$ and the logical axioms by finitely many applications of the rules of inference. In this case, $\varphi$ is said to be **provable** from $\Gamma$. ^def-0-5-1

</div>

Provability is a level-1 notion. It asks only whether symbols can be arranged according to the rules, not what the symbols mean.

Truth is different. For formal languages, the standard definition of truth is the one Tarski gave in 1933.

<div class="def">

**Definition 0.5.2 [Truth]** For a structure $\mathcal{M}$ and a sentence $\varphi$, "$\varphi$ is **true** in $\mathcal{M}$," written $\mathcal{M} \models \varphi$, is defined by recursion on the construction of $\varphi$ :

1. $\mathcal{M} \models t_1 = t_2 \ \Longleftrightarrow\ t_1^{\mathcal{M}} = t_2^{\mathcal{M}}$
2. $\mathcal{M} \models R(t_1, \ldots, t_n) \ \Longleftrightarrow\ (t_1^{\mathcal{M}}, \ldots, t_n^{\mathcal{M}}) \in R^{\mathcal{M}}$
3. $\mathcal{M} \models \neg\varphi \ \Longleftrightarrow\ $ it is not the case that $\mathcal{M} \models \varphi$
4. $\mathcal{M} \models \varphi \wedge \psi \ \Longleftrightarrow\ \mathcal{M} \models \varphi$ and $\mathcal{M} \models \psi$
5. $\mathcal{M} \models \exists x, \varphi(x) \ \Longleftrightarrow\ $ there exists $a \in M$ such that $\mathcal{M} \models \varphi(a)$

Here $t^{\mathcal{M}}$ is the element of $M$ denoted by the closed term $t$ in $\mathcal{M}$. The remaining connectives $\vee, \to, \leftrightarrow$ and the quantifier $\forall$ are treated as abbreviations. ^def-0-5-2

</div>

<div class='rmk'>

**Remark 0.5.3** Clause 5 can be read by imagining that a name for the element $a \in M$ is temporarily added to the language. Strictly speaking, because of free variables, one first defines satisfaction relative to a variable assignment and then obtains truth as a special case. This is carried out in the [[Mathematics/Mathematical Logics/index|Mathematical Logic]] series.

</div>

<div class='rmk'>

**Remark 0.5.4** Something about this definition looks odd. It uses "not" to define $\neg$, "there exists" to define $\exists$, and in clause 1 even the metalanguage's $=$ to define the object language's $=$. This looks circular, but the left-hand sides are symbols of the object language and the right-hand sides are statements of the metalanguage. **Unfolding the logical symbols of the object language into the logic of the metalanguage** is the whole of Tarski's definition. Tarski set as a criterion of adequacy that any definition of truth must imply every sentence of the form "'Snow is white' is true $\Longleftrightarrow$ snow is white," and this criterion is called **Convention T**.

</div>

<div class="def">

**Definition 0.5.5 [Models and Logical Consequence]** If every sentence of a theory $T$ is true in $\mathcal{M}$, then $\mathcal{M}$ is called a **model** of $T$. If $\varphi$ is true in every model of $\Gamma$, then $\varphi$ is said to be a **logical consequence** of $\Gamma$, written $\Gamma \models \varphi$. ^def-0-5-5

</div>

We stress that truth is relative to a structure. Within this definition, it is meaningless to ask whether a sentence of ZFC is "simply true." What can be asked is whether it is true in a particular model, or in every model.

Why, then, must truth be defined one level up? The following theorem is the reason.

<div class="thm">

**Theorem 0.5.6 [Tarski's Undefinability Theorem]** There is no formula $\mathrm{True}(x)$ in the language of arithmetic such that, for every sentence $\varphi$,

$$ \mathbb{N} \models \big(\mathrm{True}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi\big). $$

^thm-0-5-6

</div> <details class="proof"> <summary>Proof.</summary>

Deferred to the [[Mathematics/Mathematical Logics/index|Mathematical Logic]] series. The idea is that if such a formula existed, the liar paradox could be reproduced inside the formal language.

</details>

<div class='rmk'>

**Remark 0.5.7** A language rich enough to express arithmetic cannot define its own truth. Truth is, in principle, a notion of the metatheory. Of all the notions that fit the picture of handling from outside what cannot be defined inside, truth fits it most exactly.

</div>

<div class='rmk'>

**Remark 0.5.8** In first-order logic, soundness and completeness give

$$ \Gamma \vdash \varphi \ \Longleftrightarrow\ \Gamma \models \varphi. $$

On the other hand, the incompleteness theorem says that there is a sentence true in the standard model $\mathbb{N}$ but not provable in PA. The two theorems do not contradict each other. Completeness concerns truth in **every** model; incompleteness concerns truth in **one particular** model. Missing this difference makes the two theorems sound as if they clash.

</div>

# 0.6 The Position of IVAN

---

**Mathematical notes** are written on the metatheory of [[#0.3 Specifying the Metatheory|§0.3]]. They follow classical logic, and every use of the axiom of choice is marked.

A proof that establishes existence without constructing the object, for instance one that shows only that assuming nonexistence leads to a contradiction, is flagged with a **Remark (Nonconstructive)** where possible. Following classical logic and knowing what that choice costs are two different things. Brouwer refused to accept as existing what had not been exhibited. This blog does not take Brouwer's side, but it marks the places where he would have stopped.

**Machine learning notes** rest on the same foundations as the mathematical notes. Probability is treated on Kolmogorov's axioms, that is, on measure theory. Since implementation code is mixed in, empirical claims about how code behaves are kept separate from mathematical theorems.

**Philosophy notes** do not use this formal apparatus. They are written in plain prose, and arguments are not cut into numbered units. In particular, when the word "truth" appears in a philosophy note, it does not carry the sense of [[#^def-0-5-2|Definition 0.5.2]]. When Heidegger, in §44 of _Being and Time_, rereads truth as unconcealment (_Unverborgenheit_), he is questioning the very root of the correspondence that Tarski formalized. The two senses are never mixed, but they are linked where needed.

# 0.7 On Bedrock

---

The ladder of [[#0.2 The Ladder of Levels|§0.2]] stops at level 0: natural numbers, induction, finite strings of symbols. None of these has been justified anywhere in this note.

This is not because they cannot be justified, but because justifying them would require yet another level, and that level would in turn have to rest on something. If we must stop somewhere, it is honest to stop at the most modest form of reasoning that nearly everyone already shares. Wittgenstein compared the end of justification to a spade striking hard rock and bending back: at that point, all one can say is that this is how one proceeds.

The word **Validation** in this blog's name is meant in this sense. It is not a promise to justify everything. It is a promise that whenever something is justified, the note will say which level it stands on and what it relies on.

# References

---

- K. Kunen, _The Foundations of Mathematics_, College Publications, 2009. Builds logic and set theory together in a single volume while stating at each step which level of reasoning is in use. §0.2 of this note relies heavily on its perspective.
- H. B. Enderton, _A Mathematical Introduction to Logic_, 2nd ed., Academic Press, 2001. The standard development of Definitions 0.4.4 and 0.5.2.
- A. Tarski, "The Concept of Truth in Formalized Languages," 1933 (Polish); German edition 1935; English translation in _Logic, Semantics, Metamathematics_, Oxford University Press, 1956.
- D. Hilbert, _Grundlagen der Geometrie_, 1899; and the Frege–Hilbert correspondence, 1899–1900.
- M. Heidegger, _Being and Time_, 1927, §44.
- L. Wittgenstein, _Philosophical Investigations_, 1953, §217.