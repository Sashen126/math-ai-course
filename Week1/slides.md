---
marp: true
theme: default
paginate: true
---

# Eigenvalues & Eigenvectors

A concise Marp slide deck introducing eigenvalues and eigenvectors.

---

# What is an Eigenvector?

Given a square matrix $A$, an eigenvector $x$ satisfies the inline relation $Ax=\lambda x$, where $\lambda$ is the eigenvalue.

---

# Characteristic Equation

To find eigenvalues solve the characteristic equation:

$$
\det(A-\lambda I)=0
$$

This polynomial in $\lambda$ gives the eigenvalues $\lambda_1,\lambda_2,\dots$.

---

# Rayleigh Quotient & Power Method

The Rayleigh quotient:

$$
R_A(x)=\frac{x^T A x}{x^T x}
$$

Power method iteration (dominant eigenvector):

$$
 x^{(k+1)} = \frac{A x^{(k)}}{\|A x^{(k)}\|}
$$

---

# Applications

- Principal Component Analysis (PCA)
- Stability analysis of differential equations
- Vibrational modes in engineering

---

# Summary

Eigenvalues reveal how a linear transformation stretches or compresses space; eigenvectors give the invariant directions. For symmetric matrices eigenvectors are orthogonal and eigenvalues are real — a cornerstone of many algorithms in data science and engineering.
