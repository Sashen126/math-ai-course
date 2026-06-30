---
name: lecture-generator
description: Generate a complete mini-lecture package (slides, narrated video, animation, and reflection) from one teaching topic with a coherent instructional arc.
argument-hint: 'Provide topic, audience, and duration, e.g., "topic=learning rate schedules, audience=advanced undergrad, duration=4 min"'
user-invocable: true
disable-model-invocation: false
---

# Refined Skill: lecture-generator

## Purpose
Create a teaching-ready package where slides, video, and animation reinforce the same learning objective rather than acting as separate artifacts.

## Inputs
- `topic`: narrow teachable concept
- `audience`: undergraduate or graduate level
- `duration`: target video runtime in minutes
- Optional: emphasis (theory, intuition, worked example, exam prep)

## Required Outputs
1. `capstone/slides.md`
2. `capstone/video/` Remotion project with narration pipeline
3. `capstone/animation.html`
4. `capstone/reflection.md`
5. `capstone/skill-notes.md`

## Workflow
1. **Lecture arc first**
   - Define: motivation -> formal setup -> worked examples -> practical guidance -> recap.
   - Align all outputs to this same arc.
2. **Slides (12+ slides)**
   - Include equations with KaTeX syntax and at least one worked example.
   - Ensure pacing supports a 3-5 minute narration.
3. **Narrated video**
   - Write full narration script that covers all major slide sections.
   - Build Remotion scenes matching narration timestamps.
   - Include a single complete composition and output path.
4. **Interactive animation**
   - Focus on one key mechanism from the lecture.
   - Include at least one genuine control (slider or button).
   - Show dynamics not obvious in static slides.
5. **Reflection and notes**
   - Record refinements that improved learner clarity.
   - Note what changed from generic templates.

## Quality Checks
- Coherence: all assets teach the same storyline and learning goal.
- Completeness: video covers full lecture content, not a short demo clip.
- Pedagogy: worked examples and recap present actionable understanding.
- Interactivity: animation demonstrates dynamic behavior beyond text.
- Reusability: skill instructions are specific enough for repeat runs.

## Example Invocation
/lecture-generator topic="Gradient descent and learning rate schedules" audience="advanced undergraduate" duration="4"
