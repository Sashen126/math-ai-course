#!/usr/bin/env bash
set -euo pipefail

# Generate a single narration track from the Week 5 script using edge-tts.
# Prerequisite: pip install edge-tts

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../remotion/public/audio"
mkdir -p "$OUT_DIR"

TEXT="Constrained optimization in machine learning combines objective minimization with feasibility constraints. Lagrange multipliers and KKT conditions explain active and inactive boundaries."

edge-tts \
  --voice en-US-JennyNeural \
  --rate +0% \
  --text "$TEXT" \
  --write-media "$OUT_DIR/week5-full.mp3"

echo "Generated: $OUT_DIR/week5-full.mp3"
