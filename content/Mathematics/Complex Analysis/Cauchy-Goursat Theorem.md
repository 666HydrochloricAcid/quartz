---
aliases:
---
# .0 Statement
---
We introduce the theorem that can work as the [[Mathematics/Real Analysis/index|Green's Theorem]] in $\mathbb{C}$.

**Theorem \*.\*.\*\[Cauchy-Goursat Theorem\]** Let $C$ be a simple closed contour in $\mathbb{C}$, $R$ be the region enclosed by $C$, and $f$ be a holomorphic function on $\bar{R}$. Then $\int_{C}f(z)\,dz=0$.
# .1 Cauchy's Proof
---
_Cauchy_'s original proof requires the additional assumption for $f$ to be continuously differentiable on $\bar{R}$. So state holds only for $f\in\mathcal{O}(\bar{R})\cap\mathcal{C}^1(\bar{R})$.

Proof.

Let $C$ denote a simple closed contour $z=z(t)$ $(a\le t\le b)$. By the definition of the contour integral,

$$
\int_{C}f(z)\,dz=\int^b_af[z(t)]z'(t)\,dt
$$

and if 

$$
f(z)=u(x,y)+iv(x,y)\qquad\text{and}\qquad z(t)=x(t)+iy(t),
$$
then

$$
\int_Cf(z)\,dz=\int^b_a(ux'-vy')\,dt+i\int^b_a(vx'+uy')\,dt.
$$

In terms of line integral of real-valued functions of two real variables,

$$
\int_Cf(z)\,dz=\int_Cu\,dx-v\,dy+i\int_Cv\,dx+u\,dy.
$$
Since $u$, $v$ are continuously differentiable by the assumption, by the  [[Mathematics/Real Analysis/index|Green's Theorem]], we obtain that

$$
\int_Cf(z)\,dz=\iint_{\bar{R}}(-v_x-u_y)\,dA+\iint_{\bar{R}}(v_y-u_x)\,dA.
$$

However, in view of the [[Mathematics/Complex Analysis/index|Cauchy-Riemann equations]], the integrands of these two double integrals are zero throughout $R$. Therefore, if $f$ is holomorphic in $\bar{R}$ and continuously differentiable on $\bar{R}$, then

$$
\int_Cf(z)\,dz=0.
$$

# .2 Goursat's Proof
---
_Goursat_ reduced the continuously differentiability condition and 









---
Previous Post ▸ [[Antiderivatives]]