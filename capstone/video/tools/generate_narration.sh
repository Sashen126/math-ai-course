#!/usr/bin/env bash
set -euo pipefail

# Generate full narration track for the capstone lecture using edge-tts.
# Prerequisite: pip install edge-tts

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../remotion/public/audio"
mkdir -p "$OUT_DIR"

if [[ -x "$SCRIPT_DIR/../../../.venv/bin/edge-tts" ]]; then
  EDGE_TTS_BIN="$SCRIPT_DIR/../../../.venv/bin/edge-tts"
elif command -v edge-tts >/dev/null 2>&1; then
  EDGE_TTS_BIN="$(command -v edge-tts)"
else
  echo "edge-tts not found. Install it in the workspace .venv or on PATH." >&2
  exit 1
fi

TEXT="When a model fails to train, we often blame architecture or data first. But in many cases, the real issue is optimization settings, especially the learning rate. Too small, and training crawls. Too large, and the loss can oscillate or even explode. In this mini lecture, we build practical intuition for choosing learning rates and schedules that actually work. We start with the gradient descent update: w at time t plus one equals w at time t minus eta times the gradient of J at w t. Eta controls how far we move each step, and therefore controls stability and speed. For clean theory intuition, consider a one dimensional quadratic loss: J of w equals one half a w squared. The update becomes multiplication by one minus eta a. Convergence requires absolute value of one minus eta a less than one, so eta must lie between zero and two over a. Inside this interval, behavior still changes: monotone convergence for smaller eta, oscillatory convergence for larger eta, and divergence once eta is too large. This explains common deep learning failures. Constant learning rates force one compromise for all training phases. Early training often benefits from larger steps, while late training needs smaller steps to settle. Learning rate schedules solve this mismatch. Step decay is simple. Cosine decay is smooth. Warmup plus decay is often robust in deep networks. In practice, if training oscillates and validation does not improve, reduce peak learning rate and increase warmup length. If learning stalls too early, increase initial learning rate or slow the decay. The key message is that optimizer tuning can be systematic: use stability intuition, monitor curves, and adjust schedules deliberately rather than by random trial and error."

"$EDGE_TTS_BIN" \
  --voice en-US-JennyNeural \
  --rate +0% \
  --text "$TEXT" \
  --write-media "$OUT_DIR/capstone-lecture.mp3"

echo "Generated: $OUT_DIR/capstone-lecture.mp3"
