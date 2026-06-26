# Week 5 Slide Prompt Log

## Context Used
- Primary context file: week5/lecture-plan.md
- Audience target: undergraduate

## Round 1
- Prompt:
  "Using the attached lecture plan, create a Marp deck for undergraduates on constrained optimization, Lagrange multipliers, and KKT intuition. Keep notation consistent and include one worked ML example."
- Output quality:
  - Good topical coverage.
  - Weaknesses: notation switched between $f(x)$ and $J(w)$ without warning, and KKT came too early before geometric intuition.
- Changes requested:
  - Keep variable conventions consistent.
  - Move geometric slide before KKT.
  - Add one explicit active/inactive inequality example.

## Round 2
- Prompt:
  "Refine the deck to use $w \in \mathbb{R}^d$, objective $J(w)$, constraints $g_i(w) \le 0$ throughout. Reorder slides as motivation -> equality case -> geometry -> inequality/KKT -> ML example -> recap. Keep each slide concise."
- Output quality:
  - Improved structure and consistent notation.
  - Weaknesses: one slide too dense and no practice checkpoint.
- Changes requested:
  - Split KKT content into two lighter slides.
  - Add a short practice/exit ticket slide.

## Round 3 (Final)
- Prompt:
  "Finalize an 8+ slide Marp deck for undergraduates with concise bullets, one worked equality example, one inequality active-set intuition example, and a short exit ticket."
- Result:
  - Final deck saved as week5/slides.md.
  - Meets audience level, notation consistency, and lesson flow constraints.
