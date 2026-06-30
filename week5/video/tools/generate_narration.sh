#!/usr/bin/env bash
set -euo pipefail

# Generate a single narration track from the full Week 5 script using edge-tts.
# Prerequisite: pip install edge-tts

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../remotion/public/audio"
mkdir -p "$OUT_DIR"

TEXT="In machine learning, we do not always optimize freely. Sometimes we must satisfy strict limits, like a norm budget, fairness threshold, or probability constraints. We optimize parameters w by minimizing J of w, subject to equality and inequality constraints. This defines a feasible set where all valid solutions must lie. For equality constraints, we build a Lagrangian: objective plus lambda times the constraint. At optimum, the stationarity condition and feasibility condition hold together. At a constrained optimum, the objective and constraint gradients align. Intuitively, the best local descent direction is blocked by the feasible boundary. For inequalities, KKT adds dual feasibility and complementary slackness. If a constraint is inactive, its multiplier is zero. If active, the multiplier can be positive. In norm-constrained regression, if the unconstrained optimizer lies inside the norm ball, the constraint is inactive. Otherwise the optimum lands on the boundary. Constrained optimization links algebra, geometry, and practical machine learning design. Lagrange multipliers and KKT help us reason about where and why optima occur."

edge-tts \
  --voice en-US-JennyNeural \
  --rate +0% \
  --text "$TEXT" \
  --write-media "$OUT_DIR/week5-full.mp3"

echo "Generated: $OUT_DIR/week5-full.mp3"
