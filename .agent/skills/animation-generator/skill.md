# Skill: animation-generator

## Purpose
Generate a self-contained interactive HTML animation for a key lecture concept.

## Inputs
- Concept focus
- Audience level
- Output path

## Prompt Pattern (Section 5.3 style)
"Create a single-file `animation.html` that teaches [concept] with controls for user interaction, clear axis/labels, concise math text, and mobile-safe layout. Use vanilla HTML/CSS/JS only, no CDN dependencies."

## Workflow
1. Pick one concept from lecture with clear visual dynamics.
2. Generate one standalone HTML file.
3. Include play/pause/reset and one parameter slider.
4. Verify in browser and adjust text clarity.

## Output Contract
- `week5/animation.html` loads directly as a local file.
