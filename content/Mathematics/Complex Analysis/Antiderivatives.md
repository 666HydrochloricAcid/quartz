---
aliases:
---
Want to extend the [[Mathematics/Real Analysis/index|Fundamental Theorem of Calculus]] into the complex sense.

<div class='def'>

**Definition \*.\*.\* \[Antiderivatives\]** If $f:U\overset{\text{open}}{\subseteq}\mathbb{C}\rightarrow\mathbb{C}$ is a complex valued function, the **antiderivative** of $f$ is a function $F:U\rightarrow\mathbb{C}$ that satisfies 

$$
\cfrac{dF}{dz}=f.
$$

</div>

<div class='thm'>

**Theorem \*.\*.\*** If a function $f(z)$ is continuous in a domain $D$, the following are equivalent :

1. $f(z)$ has an antiderivative $F(z)$ throughout $D$.
2. For any contour $C$ from any fixed point $z_1$ to any fixed point $z_2$ in $D$, the line integral $\int_Cf(z)\,dz$ depends only on $z_1$ and $z_2$, but not on the choice of C, and

$$
\int^{z_2}_{z_1}f(z)\,dz=\left[F(z)\right]^{z_2}_{z_1}=F(z_2)-F(z_1),
$$

&nbsp; &nbsp; &nbsp; &nbsp; where $F(z)$ is the antiderivative in (i).

3. For any closed contour $C$ in $D$,

$$
\int_Cf(z)\,dz=0.
$$

</div>

<details class="proof">
<summary>Proof.</summary>

\[(i) $\implies$ (ii)\] Let $z_1, z_2 \in D$, and first let $C$ be a smooth contour in $D$ from $z_1$ to $z_2$, parametrized by $z = z(t)$ $(a \le t \le b)$. Then by the [[Mathematics/Real Analysis/index|chain rule]],

$$
\frac{d}{dt}F[z(t)] = F'[z(t)]\,z'(t) = f[z(t)]\,z'(t) \qquad (a \le t \le b).
$$

Hence,

$$
\int_C f(z)\,dz = \int_a^b f[z(t)]\,z'(t)\,dt = \left[F[z(t)]\right]_a^b = F[z(b)] - F[z(a)] = F(z_2) - F(z_1).
$$

If $C$ is a contour in $D$ from $z_1$ to $z_2$, then $C$ consists of finitely many smooth contours $C_k$ $(k = 1, \dots, n)$, where $C_k$ extends from $w_{k-1}$ to $w_k$ with $w_0 = z_1$ and $w_n = z_2$. Applying the above to each $C_k$,

$$
\int_C f(z)\,dz = \sum_{k=1}^n \int_{C_k} f(z)\,dz = \sum_{k=1}^n \left[F(w_k) - F(w_{k-1})\right] = F(z_2) - F(z_1).
$$

Since the right-hand side depends only on $z_1$ and $z_2$, the line integral of $f$ is independent of path in $D$.

\[(ii)$\iff$(iii)\] Let $z_1$ and $z_2$ be two points on any closed contour $C$ in $D$, and form two paths $C_1$ and $C_2$, each with initial point $z_1$ and final point $z_2$, such that $C=C_1-C_2$. Assuming that integration is independent of path in $D$, 

$$
\int_{C_1}f(z)\,dz=\int_{C_2}f(z)\,dz.
$$

Hence,

$$
\int_{C_1}f(z)\,dz+\int_{-C_2}f(z)\,dz=\int_{C_1-C_2}f(z)\,dz=\int_{C}f(z)\,dz=0.
$$

The converse can be proved in similar way, i.e., (ii)$\iff$(iii).  

\[(ii) and (iii)$\implies$(i)\] FIx $z_0\in D$ and define $F:D\rightarrow\mathbb{C}$ by 

$$
F(z)=\int_Cf(z)\,dz=\int^z_{z_0}f(z)\,dz,
$$

where $C$ is a contour from $z_0$ to $z$ in $D$. Note that this is well-defined by (ii). We claim that $F'(z)=f(z)$, i.e.,

$$
\lim_{h\to0}\left|\frac{F(z+h)-F(z)}{h}-f(z)\right|=0.
$$

Choose $h$ sufficiently small so that the straight line segment from $z$ to $h$ is inside $D$, and consider the following :

$$
F(z+h)-F(z)=\int_{C_1+C_2}f(s)\,ds-\int_{C_1}f(s)\,ds=\int_{C_2}f(s)\,ds=\int^{z+h}_{z}f(s)\,ds.
$$

Hence,

$$
\lim_{h\to0}\left|\frac{F(z+h)-F(z)}{h}-f(z)\right|=\left|\frac{1}{h}\int^{z+h}_{z}f(s)\,ds-f(z)\right|=\left|\frac{1}{h}\int^{z+h}_{z}f(s)-f(z)\,ds\right|.
$$

Let $\epsilon>0$ be given. Since $f$ is continuous at $z$, there exists $\delta>0$ such that

$$
0\lt|w-z|\lt\delta\implies|f(w)-f(z)|\lt\epsilon.
$$

Thus, if we set $|h|\lt\delta$, then by the [[Mathematics/Complex Analysis/index|upper bound estimation]],

$$
\left|\frac{1}{h}\int^{z+h}_{z}f(s)-f(z)\,ds\right|\lt\frac{1}{|h|}\epsilon|h|=\epsilon.
$$

</detail>

---
Next Post ▸ [[Cauchy-Goursat Theorem]]