#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTION_DIR="$ROOT_DIR/remotion"

"$ROOT_DIR/tools/generate_narration.sh"

cd "$REMOTION_DIR"
npm install
npm run render

echo "Rendered video expected at: $REMOTION_DIR/out/week5-lecture.mp4"
