# Week 4 Study Guide

## Topic
Singular Value Decomposition (SVD), Principal Component Analysis (PCA), and low-rank approximation.

## Why this topic
This topic sits at the center of modern applied mathematics: it combines linear algebra, optimization, geometry, and statistics, and it is directly useful for high-dimensional data analysis.

## Concept Explanation (Intuition First)
Imagine a cloud of points in a high-dimensional space. Most of the variation often lies near a much lower-dimensional subspace (for example, near a plane in 3D, or near a 5D subspace in 500D). PCA finds the directions where the data varies most. SVD gives a stable, canonical factorization that reveals those directions and their strengths.

Intuitively:
- Left singular vectors tell you dominant directions in the data space.
- Singular values tell you how much "energy" (variance/information) is in each direction.
- Right singular vectors tell you coordinates in the latent basis.

If the singular values drop quickly, then a low-rank model captures most of the structure. This gives compression, denoising, and interpretable latent factors.

## Concept Explanation (Formal)
Let $X \in \mathbb{R}^{m \times n}$ (data matrix, often centered by columns).

The SVD is
$$
X = U\Sigma V^T,
$$
where:
- $U \in \mathbb{R}^{m \times m}$ and $V \in \mathbb{R}^{n \times n}$ are orthogonal,
- $\Sigma \in \mathbb{R}^{m \times n}$ is diagonal (rectangular) with nonnegative entries
  $\sigma_1 \ge \sigma_2 \ge \cdots \ge 0$.

For rank-$k$ approximation:
$$
X_k = U_k\Sigma_k V_k^T.
$$
By Eckart-Young-Mirsky,
$$
X_k = \arg\min_{\mathrm{rank}(Y)\le k} \|X-Y\|_F,
$$
and the minimum error is
$$
\|X - X_k\|_F^2 = \sum_{i>k} \sigma_i^2.
$$

For centered data, PCA directions are eigenvectors of covariance
$$
S = \frac{1}{m-1}X^TX = V\frac{\Sigma^2}{m-1}V^T.
$$
Thus principal component variances are $\lambda_i = \sigma_i^2/(m-1)$.

---

## Worked Example 1 (Exact SVD + Rank-1 Approximation)
Given
$$
X = \begin{bmatrix}3 & 0\\0 & 1\end{bmatrix}.
$$

### Step 1: Compute singular values
Because $X^TX = \begin{bmatrix}9&0\\0&1\end{bmatrix}$, eigenvalues are $9,1$.
So singular values are $\sigma_1=3$, $\sigma_2=1$.

### Step 2: Compute singular vectors
$X$ is already diagonal with nonnegative entries, so one valid SVD is:
$$
U=I_2,\quad \Sigma=\begin{bmatrix}3&0\\0&1\end{bmatrix},\quad V=I_2.
$$

### Step 3: Best rank-1 approximation
Keep only largest singular triplet:
$$
X_1 = \sigma_1 u_1 v_1^T = 3\begin{bmatrix}1\\0\end{bmatrix}\begin{bmatrix}1&0\end{bmatrix}
= \begin{bmatrix}3&0\\0&0\end{bmatrix}.
$$

### Step 4: Error
$$
\|X-X_1\|_F^2 = \sigma_2^2=1,\quad \|X-X_1\|_F=1.
$$

Interpretation: second direction contributes little relative to first; rank-1 keeps dominant structure.

---

## Worked Example 2 (PCA from a 2D Dataset)
Data points: $(2,0),(0,2),(3,1),(1,3)$.

### Step 1: Form data matrix and center
$$
\mu = (1.5,1.5).
$$
Centered points:
$$
(0.5,-1.5),(-1.5,0.5),(1.5,-0.5),(-0.5,1.5).
$$
So
$$
X_c=
\begin{bmatrix}
0.5 & -1.5\\
-1.5 & 0.5\\
1.5 & -0.5\\
-0.5 & 1.5
\end{bmatrix}.
$$

### Step 2: Covariance
$$
S=\frac{1}{4-1}X_c^TX_c
=\frac{1}{3}
\begin{bmatrix}
5 & -3\\
-3 & 5
\end{bmatrix}
=
\begin{bmatrix}
5/3 & -1\\
-1 & 5/3
\end{bmatrix}.
$$

### Step 3: Eigenpairs
For matrix of form $\begin{bmatrix}a&b\\b&a\end{bmatrix}$, eigenvalues are $a+b, a-b$.
Here $a=5/3$, $b=-1$:
$$
\lambda_1 = 5/3+(-1)=2/3,\quad
\lambda_2 = 5/3-(-1)=8/3.
$$
Largest is $8/3$ with eigenvector proportional to $(1,-1)$.
Normalized principal direction:
$$
v_1=\frac{1}{\sqrt2}(1,-1).
$$
Second direction:
$$
v_2=\frac{1}{\sqrt2}(1,1).
$$

### Step 4: Project one point
For centered point $(0.5,-1.5)$,
$$
z_1 = (0.5,-1.5)\cdot v_1 = \frac{0.5+1.5}{\sqrt2}=\frac{2}{\sqrt2}=\sqrt2.
$$
$$
z_2 = (0.5,-1.5)\cdot v_2 = \frac{0.5-1.5}{\sqrt2}= -\frac{1}{\sqrt2}.
$$
So in PCA coordinates, the first component dominates magnitude.

### Step 5: Explained variance ratio
Total variance: $\lambda_1+\lambda_2 = 10/3$.
First PC (largest eigenvalue $8/3$) explains
$$
\frac{8/3}{10/3}=0.8=80\%.
$$

Interpretation: one-dimensional representation preserves most variability.

---

## Practice Problems (with Solutions)

### Problem 1
Let singular values of a centered data matrix be $(10,4,2,1)$. What fraction of Frobenius energy is captured by rank-2 approximation?

#### Solution
Energy is sum of squared singular values.
$$
E_{\text{total}}=10^2+4^2+2^2+1^2=121,
$$
$$
E_{k=2}=10^2+4^2=116.
$$
Fraction captured:
$$
116/121\approx 0.9587\approx 95.9\%.
$$

### Problem 2
Suppose
$$
X^TX = \begin{bmatrix}13&0\\0&4\end{bmatrix}.
$$
Find singular values of $X$ and PCA variances if there are $m=6$ samples and data is centered.

#### Solution
Singular values are square roots of eigenvalues of $X^TX$:
$$
\sigma_1=\sqrt{13},\;\sigma_2=2.
$$
PCA variances are
$$
\lambda_i = \frac{\sigma_i^2}{m-1}.
$$
So
$$
\lambda_1=\frac{13}{5}=2.6,\quad \lambda_2=\frac{4}{5}=0.8.
$$

### Problem 3
Given
$$
X=\begin{bmatrix}4&0&0\\0&3&0\\0&0&1\end{bmatrix},
$$
write the best rank-2 approximation and its Frobenius error.

#### Solution
Diagonal nonnegative matrix: singular values are $(4,3,1)$.
Best rank-2 keeps first two:
$$
X_2=\begin{bmatrix}4&0&0\\0&3&0\\0&0&0\end{bmatrix}.
$$
Error squared is discarded singular value squared:
$$
\|X-X_2\|_F^2=1^2=1\Rightarrow \|X-X_2\|_F=1.
$$

---

## Connections

### Connection to Optimization
PCA can be formulated as
$$
\max_{\|w\|=1} w^T S w,
$$
where $S$ is covariance. This is a constrained optimization problem solved by eigenvectors (Rayleigh quotient). More generally, low-rank matrix recovery and matrix factorization connect to nonconvex optimization and convex relaxations (nuclear norm).

### Connection to Probability and Statistics
Covariance structure and variance decomposition are statistical objects. Under Gaussian assumptions, PCA aligns with maximum-likelihood estimation of a latent linear subspace with isotropic noise (probabilistic PCA).

### Connection to Numerical Linear Algebra
SVD is numerically stable and foundational for conditioning, pseudoinverses, and regularization (e.g., truncated SVD for ill-posed inverse problems).

---

## Iteration History (3 Rounds)

### Round 1 (Initial Draft)
- Included basic intuition for PCA as "find directions of largest spread."
- Contained one short worked example only.
- Missing explicit theorem statement (Eckart-Young-Mirsky).
- Practice section had problems but no full solutions.

### Round 2 (Improved Draft)
- Added formal SVD notation and covariance link.
- Added second worked example with projection calculations.
- Added complete solutions for all practice problems.
- Added explained-variance computation.

### Round 3 (Final Refinement)
- Reorganized each section as intuition then formalism.
- Added theorem-level statement and error formula.
- Tightened worked examples with interpretation after each result.
- Added cross-area "Connections" to optimization, statistics, and numerical analysis.

This final guide is intentionally more rigorous, complete, and exam-ready than the Round 1 draft.
