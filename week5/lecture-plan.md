# Week 5 Lecture Plan

## Topic
Constrained Optimization for Machine Learning: Lagrange Multipliers and KKT Intuition

## Target Audience
Undergraduate students (upper-level, with prior calculus and linear algebra)

## Learning Goal
By the end of the lecture, students should be able to formulate constrained optimization problems, apply Lagrange multipliers in simple settings, and interpret KKT conditions geometrically for common ML constraints.

## Key Points to Cover
1. Why constraints matter in ML
   - Examples: norm constraints for regularization, probability simplex constraints, fairness/resource constraints.
2. From unconstrained to constrained optimization
   - Contrast gradient descent in open space vs feasible region optimization.
3. Lagrange multipliers in one equality-constraint problem
   - Build the Lagrangian and solve first-order conditions step-by-step.
4. Geometric intuition
   - Tangency condition: gradients of objective and constraint become aligned at optimum.
5. KKT conditions for inequality constraints (conceptual level)
   - Stationarity, primal feasibility, dual feasibility, complementary slackness.
6. ML example walkthrough
   - Minimize quadratic loss with an $\ell_2$ norm budget and interpret active vs inactive constraints.
7. Common mistakes and checks
   - Forgetting feasibility checks, ignoring boundary points, and misreading multiplier signs.

## Timing (50 minutes)
- 0-8 min: Motivation and ML constraint examples.
- 8-20 min: Equality-constrained optimization and Lagrangian setup.
- 20-32 min: Worked example + geometric picture.
- 32-42 min: KKT intuition and inequality constraints.
- 42-50 min: Practice problem, recap, and exit ticket.

## Assessment Prompt
"Given a convex quadratic objective with one linear inequality constraint, identify whether the constraint is active at optimum and write the corresponding KKT conditions."
