# Week 4 Study Guide

> Display note: This version uses plain Unicode and code-block math so it renders consistently in GitHub's repository markdown view.

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
Let X ∈ R^(m × n) be a data matrix, often centered by columns.

The SVD is:

```text
X = UΣVᵀ
```

where:
- U ∈ R^(m × m) and V ∈ R^(n × n) are orthogonal.
- Σ ∈ R^(m × n) is diagonal (rectangular) with nonnegative entries satisfying σ₁ ≥ σ₂ ≥ ··· ≥ 0.

For rank-k approximation:

```text
X_k = U_k Σ_k V_kᵀ
```

By the **Eckart-Young-Mirsky theorem**,
```text
X_k = arg min rank(Y) ≤ k of ||X - Y||_F
```

and the minimum error is

```text
||X - X_k||_F² = Σ(i > k) σ_i²
```

For centered data, PCA directions are eigenvectors of the covariance matrix:

```text
S = (1 / (m - 1)) XᵀX = V(Σ² / (m - 1))Vᵀ
```

Thus principal component variances are:

```text
λ_i = σ_i² / (m - 1)
```

---

## Worked Example 1 (Exact SVD + Rank-1 Approximation)
Given

```text
X = [[3, 0],
	[0, 1]]
```

### Step 1: Compute singular values
Because

```text
XᵀX = [[9, 0],
	[0, 1]]
```

the eigenvalues are 9 and 1. So the singular values are σ₁ = 3 and σ₂ = 1.

### Step 2: Compute singular vectors
X is already diagonal with nonnegative entries, so one valid SVD is:

```text
U = I₂,   Σ = [[3, 0],
			   [0, 1]],   V = I₂
```

### Step 3: Best rank-1 approximation
Keep only largest singular triplet:

```text
X₁ = σ₁ u₁ v₁ᵀ
	= 3 [1, 0]ᵀ [1, 0]
	= [[3, 0],
		[0, 0]]
```

### Step 4: Error

```text
||X - X₁||_F² = σ₂² = 1,   ||X - X₁||_F = 1
```

Interpretation: second direction contributes little relative to first; rank-1 keeps dominant structure.

---

## Worked Example 2 (PCA from a 2D Dataset)
Data points: (2, 0), (0, 2), (3, 1), (1, 3).

### Step 1: Form data matrix and center
```text
μ = (1.5, 1.5)
```

Centered points:

```text
(0.5, -1.5), (-1.5, 0.5), (1.5, -0.5), (-0.5, 1.5)
```

So

```text
X_c = [[ 0.5, -1.5],
	[-1.5,  0.5],
	[ 1.5, -0.5],
	[-0.5,  1.5]]
```

### Step 2: Covariance
```text
S = (1 / (4 - 1)) X_cᵀX_c
	= (1 / 3) [[ 5, -3],
						 [-3,  5]]
	= [[ 5/3, -1 ],
		 [ -1,  5/3]]
```

### Step 3: Eigenpairs
For a matrix of the form [[a, b], [b, a]], the eigenvalues are a + b and a - b.
Here a = 5/3 and b = -1:

```text
λ₁ = 5/3 + (-1) = 2/3
λ₂ = 5/3 - (-1) = 8/3
```

The largest eigenvalue is 8/3 with eigenvector proportional to (1, -1).
Normalized principal direction:

```text
v₁ = (1 / √2) (1, -1)
```

Second direction:

```text
v₂ = (1 / √2) (1, 1)
```

### Step 4: Project one point
For centered point (0.5, -1.5):

```text
z₁ = (0.5, -1.5) · v₁ = (0.5 + 1.5) / √2 = 2 / √2 = √2
z₂ = (0.5, -1.5) · v₂ = (0.5 - 1.5) / √2 = -1 / √2
```

So in PCA coordinates, the first component dominates magnitude.

### Step 5: Explained variance ratio
Total variance: λ₁ + λ₂ = 10/3.
The first principal component, with largest eigenvalue 8/3, explains:

```text
(8/3) / (10/3) = 0.8 = 80%
```

Interpretation: one-dimensional representation preserves most variability.

---

## Practice Problems (with Solutions)

### Problem 1
Let the singular values of a centered data matrix be (10, 4, 2, 1). What fraction of Frobenius energy is captured by the rank-2 approximation?

#### Solution
Energy is the sum of squared singular values.

```text
E_total = 10² + 4² + 2² + 1² = 121
E_k=2   = 10² + 4² = 116
Fraction captured = 116 / 121 ≈ 0.9587 ≈ 95.9%
```

### Problem 2
Suppose

```text
XᵀX = [[13, 0],
	[ 0, 4]]
```

Find the singular values of X and the PCA variances if there are m = 6 samples and the data is centered.

#### Solution
Singular values are square roots of the eigenvalues of XᵀX:

```text
σ₁ = √13,   σ₂ = 2
```

PCA variances are:

```text
λ_i = σ_i² / (m - 1)
```

So:

```text
λ₁ = 13 / 5 = 2.6
λ₂ = 4 / 5 = 0.8
```

### Problem 3
Given

```text
X = [[4, 0, 0],
	[0, 3, 0],
	[0, 0, 1]]
```

write the best rank-2 approximation and its Frobenius error.

#### Solution
This is a diagonal nonnegative matrix, so the singular values are (4, 3, 1).
Best rank-2 keeps first two:

```text
X₂ = [[4, 0, 0],
	[0, 3, 0],
	[0, 0, 0]]
```

Error squared is discarded singular value squared:

```text
||X - X₂||_F² = 1² = 1, so ||X - X₂||_F = 1
```

---

## Connections

### Connection to Optimization
PCA can be formulated as:

```text
maximize wᵀSw subject to ||w|| = 1
```

where S is the covariance matrix. This is a constrained optimization problem solved by eigenvectors through the Rayleigh quotient. More generally, low-rank matrix recovery and matrix factorization connect to nonconvex optimization and convex relaxations such as the nuclear norm.

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
