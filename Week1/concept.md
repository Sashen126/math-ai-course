---
marp: true
theme: default
paginate: true
---

# Eigenvalues and Eigenvectors — A Concise Introduction

Eigenvalues and eigenvectors are fundamental concepts in linear algebra with broad applications across mathematics, physics, data science, and engineering. At their core, they describe directions in which a linear transformation acts by simply stretching or compressing, without changing direction.

Given a square matrix $A \in \mathbb{R}^{n\times n}$, a nonzero vector $x$ is an eigenvector of $A$ if multiplying $A$ by $x$ yields a scalar multiple of $x$. This relationship is expressed inline as $Ax = \lambda x$, where $\lambda$ is the corresponding eigenvalue.

To find eigenvalues we solve the characteristic equation. The standard display form is:

$$
\det(A - \lambda I) = 0
$$

This determinant expands to a polynomial in $\lambda$ (the characteristic polynomial). Its roots are the eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ (counted with algebraic multiplicity). For each eigenvalue $\lambda$, the set of eigenvectors corresponding to $\lambda$ together with the zero vector forms the eigenspace, which is the nullspace of $A - \lambda I$.

An important quantity related to eigenvectors is the Rayleigh quotient, which for a nonzero vector $x$ is defined as

$$
R_A(x) = \frac{x^T A x}{x^T x}.
$$

For symmetric matrices $A$ (i.e., $A^T = A$), eigenvalues are real and eigenvectors corresponding to distinct eigenvalues are orthogonal. This property underpins many applications: principal component analysis (PCA) for dimensionality reduction finds directions of maximal variance by computing eigenvectors of the covariance matrix; stability analysis of differential equations uses eigenvalues to determine growth or decay modes; and vibration modes in mechanical systems correspond to eigenvectors of stiffness or mass matrices.

Computationally, direct computation of eigenvalues via the characteristic polynomial is feasible for small matrices, but for large matrices iterative methods such as the power method, Lanczos, or QR algorithm are used. The power method, for example, seeks the dominant eigenvector by repeated multiplication:

$$
x^{(k+1)} = \frac{A x^{(k)}}{\|A x^{(k)}\|}.
$$

Understanding eigenvalues and eigenvectors gives deep insight into linear transformations: they reveal invariant directions, rates of stretching, and rotation components. Because of their ubiquity across scientific computing and data analysis, mastering these concepts is essential for advanced study in applied mathematics, machine learning, and engineering.

---
