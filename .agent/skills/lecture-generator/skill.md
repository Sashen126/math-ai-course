# Skill: lecture-generator

## Purpose
Coordinate end-to-end lecture artifact generation by composing three skills:
1. `slides-generator`
2. `video-generator`
3. `animation-generator`

## Invocation
/lecture-generator topic="<topic>" audience="<undergraduate|graduate>" duration="<minutes>"

## Orchestration Steps
1. Generate `week5/lecture-plan.md` from topic + audience.
2. Call `slides-generator` to produce and refine Marp slides.
3. Call `video-generator` to produce narration and Remotion pipeline.
4. Call `animation-generator` for a key concept animation.
5. Emit a verification checklist and file manifest.

## Required Artifacts
- `week5/lecture-plan.md`
- `week5/slides.md`
- `week5/slide-prompt-log.md`
- `week5/video/narration-script.md`
- `week5/video/remotion/*`
- `week5/animation.html`

## Validation
- Minimum 8 slides.
- At least 2 slide refinement rounds logged.
- Animation opens in browser without external assets.
