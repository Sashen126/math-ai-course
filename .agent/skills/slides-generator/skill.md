# Skill: slides-generator

## Purpose
Generate an undergraduate-friendly Marp lecture deck from a short lecture plan, then refine it through at least two prompt rounds.

## Inputs
- Topic
- Audience level (must be explicit)
- Lecture plan path
- Minimum slide count (default: 8)

## Workflow (Section 5.1 style)
1. Read the lecture plan and extract notation conventions.
2. Draft Marp slides with a clear teaching arc.
3. Run refinement round 1 for structure and audience calibration.
4. Run refinement round 2 for notation consistency and concision.
5. Save:
   - `week5/slides.md`
   - `week5/slide-prompt-log.md` with prompts and critiques.

## Guardrails
- Keep notation stable across all slides.
- Include at least one worked example.
- Include one checkpoint/exit-ticket slide.
- Do not exceed moderate bullet density.

## Output Contract
- Final Marp deck with `marp: true`, `paginate: true`, minimum 8 slides.
- Prompt log documenting at least 2 refinement rounds.
