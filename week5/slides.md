---
marp: true
math: katex
theme: default
paginate: true
---

# Constrained Optimization in ML

Week 5: Lagrange Multipliers and KKT Intuition  
Audience: Undergraduate (upper-level)

---

# Why Constraints Matter

- Real ML problems are rarely unconstrained.
- Typical constraints:
  - Norm budgets: $\|w\|_2 \le R$
  - Probability simplex: $p_i \ge 0,\ \sum_i p_i = 1$
  - Resource/fairness constraints
- Constraints define a feasible set where solutions must live.

---

# Problem Setup and Notation

We optimize parameters $w \in \mathbb{R}^d$:

$$
\min_w J(w) \quad \text{s.t.} \quad h_j(w)=0,\ g_i(w) \le 0
$$

- $J(w)$: objective (loss)
- $h_j(w)$: equality constraints
- $g_i(w)$: inequality constraints

---

# Equality Constraints: Lagrangian

For one equality constraint $h(w)=0$:

$$
\mathcal{L}(w,\lambda)=J(w)+\lambda h(w)
$$

Candidate optimum satisfies:

$$
\nabla_w \mathcal{L}(w,\lambda)=0,\quad h(w)=0
$$

---

# Worked Equality Example

Minimize $J(x,y)=x^2+y^2$ subject to $x+y=1$.

$$
\mathcal{L}(x,y,\lambda)=x^2+y^2+\lambda(x+y-1)
$$

Stationarity:

$$
2x+\lambda=0,\quad 2y+\lambda=0 \Rightarrow x=y
$$

Constraint gives $x=y=\tfrac12$. Minimum value $J=\tfrac12$.

---

# Geometric Intuition

- At constrained optimum, the objective's steepest descent direction is blocked by the constraint boundary.
- Tangency condition:

$$
\nabla J(w^{*}) = -\lambda \nabla h(w^{*})
$$

- Interpretation: gradients become aligned (parallel or anti-parallel).

---

# Inequality Constraints and KKT (Part 1)

For $g_i(w)\le 0$, introduce multipliers $\mu_i$.

KKT conditions include:

$$
\nabla J(w^{*}) + \sum_i \mu_i \nabla g_i(w^{*}) + \sum_j \lambda_j \nabla h_j(w^{*}) = 0
$$

plus feasibility constraints.

---

# KKT (Part 2): Active vs Inactive

- Dual feasibility: $\mu_i \ge 0$
- Primal feasibility: $g_i(w^{*}) \le 0$
- Complementary slackness:

$$
\mu_i g_i(w^{*}) = 0
$$

If $g_i(w^{*})<0$, then $\mu_i=0$ (inactive).  
If $g_i(w^{*})=0$, constraint may be active ($\mu_i>0$).

---

# ML Example: Norm-Constrained Fit

$$
\min_w \|Xw-y\|_2^2 \quad \text{s.t.} \quad \|w\|_2^2 - R^2 \le 0
$$

- If unconstrained minimizer has $\|w\|_2 < R$, constraint is inactive.
- If it lies outside ball, optimum lands on boundary $\|w\|_2=R$.
- KKT multiplier $\mu$ reflects pressure from the norm budget.

---

# Exit Ticket

Given:

$$
\min_w (w-3)^2 \quad \text{s.t.} \quad w \le 2
$$

1. Is the inequality active at optimum?  
2. Write the KKT conditions for this one-dimensional problem.  
3. Predict the sign/value pattern of $\mu$.
