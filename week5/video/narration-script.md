# Week 5 Narration Script

## Scene 1 - Hook (0:00-0:25)
In machine learning, we do not always optimize freely. Sometimes we must satisfy strict limits, like a norm budget, fairness threshold, or probability constraints.

## Scene 2 - Formal Setup (0:25-0:55)
We optimize parameters w by minimizing J of w, subject to equality and inequality constraints. This defines a feasible set where all valid solutions must lie.

## Scene 3 - Lagrange Multipliers (0:55-1:40)
For equality constraints, we build a Lagrangian: objective plus lambda times the constraint. At optimum, the stationarity condition and feasibility condition hold together.

## Scene 4 - Geometric Meaning (1:40-2:10)
At a constrained optimum, the objective and constraint gradients align. Intuitively, the best local descent direction is blocked by the feasible boundary.

## Scene 5 - KKT Intuition (2:10-2:50)
For inequalities, KKT adds dual feasibility and complementary slackness. If a constraint is inactive, its multiplier is zero. If active, the multiplier can be positive.

## Scene 6 - ML Example (2:50-3:35)
In norm-constrained regression, if the unconstrained optimizer lies inside the norm ball, the constraint is inactive. Otherwise the optimum lands on the boundary.

## Scene 7 - Recap (3:35-4:00)
Constrained optimization links algebra, geometry, and practical machine learning design. Lagrange multipliers and KKT help us reason about where and why optima occur.
