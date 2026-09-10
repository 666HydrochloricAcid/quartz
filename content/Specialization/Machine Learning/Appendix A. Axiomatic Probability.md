---
aliases:
  - ML.A
---
 우선, 공리적 확률, Axiomatic Probability에 대해 이야기해보는 이유를 설명해보고자 한다. 필자가 여지껏 다루었던 확률과 logistic regression의 target value인 확률과 상당한 차별점이 느껴졌었는데, 그 이유는 우리가 자주 사용해오던 확률의 정의는 라플라스의 고전적 정의나 통계적 확률에 기반한다. 즉, 

- \[Laplace의 정의] - 모든 사건이 동일하게 일어날 때, 전체 사건의 경우의 수에 대한 특정 근원 사건의 비
	- 주사위를 굴렸을 때, 눈의 수가 2 이하가 나올 확률  $: \frac{1+1}{6}=\frac{1}{3}$
	- 동전을 던졌을 때, 앞면이 나올 확률 $:\frac{1}{2}$

- \[통계적 정의] - 어떤 사건을 반복하였을 때(독립시행) 일어나는 상대 빈도수
	- 주사위를 10000번 굴렸을 때, 1이 170, 2가 162번 나옴 : $\frac{170+162}{10000}\approx\frac{1}{3}$
	- 동전을 50번 던졌을 때, 앞면이 27번 나옴 : $\frac{27}{50}\approx\frac{1}{2}$

 위 정의들은 확률에 대한 수학적 정의라기보단, 확률에 대한 철학을 수학으로 구현한 것에 가깝다. 허나, Laplace의 정의는 이상적인 이산적 상황에서만 성립하며, 통계적 확률 또한 물리적인 한계를 가진다. 그렇기에, 확률에 대한 철학은 배제한 채, 확률이 작동하는지에 대한 수학적 구조에 집중하여 일반화하는 시도가 다음 확률에 대한 세가지 공리이다.

- The sample space, $\Omega$, which is the set whose members comprise all possible outcomes or elementary events.
- The space of all events, each of which is some set of outcomes (i.e., some subset of $\Omega$). The event space, $F$, must be a $\sigma$-algebra on $\Omega$.
- The probability measure $P$ which assigns to each event $E\in F$ its probability, $P(E)$.

Taken together, these assumptions mean that $(\Omega,\ F,\ P)$ is a measure space. It is additionally assumed that $P(\Omega)=1$, making this triple a probability space.

- $(\text{P}1)\ \text{[Nonnegativity]}\ ^\forall E\in F \quad P(E)\ge0$
- $(\text{P}2)\ \text{[Unitary]}\ P(\Omega)=1$
- $(\text{P}3)\ \text{[}\sigma\text{-Additivity]}\ \text{For any sequence of disjoint events }E_1,\, E_2,\ \dots,$
$$
P\left(\bigcup^{\infty}_{i=1}E_i\right)=\sum^{\infty}_{i=1}P(E_i)
$$
 즉, 확률은 음이 아닌 실수이며 $(\text{P}1)$, sample space의 measure는 1이며$(\text{P}2)$, countable한 상호 배반인 사건들에 대하여 $\sigma\text{-Additivity}$ $(\text{P}3)$를 만족하는 $P$를 $(\Omega,\ F)$에서의 확률로 정의한다. 즉, measure theory 관점에서, 표본 공간 $\Omega$의 measure를 1로 주며, disjoint events 에 대해 $\sigma\text{-Additivity}$를 만족하는 positive measure를 probability function 그 자체로 정의하는 것이다.

 Logistic Regression으로 돌아와 보자. Binary Classification에서 일어날 수 있는 결과는 오직 1(True) 또는 0(False) 뿐이므로 표본 공간은 $\Omega = \{0, 1\}$ 이다. 이때, 주어진 입력 데이터 $x$에 대하여 각 사건의 확률 측도 $P$를 Sigmoid 함수 $\sigma(z)$를 활용하여 다음과 같이 정의해 보자.

$$P(\{1\}) = \sigma(z) = p, \quad P(\{0\}) = 1 - \sigma(z) = 1 - p$$

 여기서 $0 < p < 1$ 이므로 모든 사건에 대해 $P(E) \ge 0$ 이고 $(\text{P}1)$, $P(\Omega) = P(\{1\} \cup \{0\}) = p + (1-p) = 1$ $(\text{P}2), (\text{P}3)$이다.

결론적으로, logistic regression의 sigmoid 함수는 확률 공간 $(\Omega, \mathcal{F}, P)$ 위에서 정의된 확률 함수이다.