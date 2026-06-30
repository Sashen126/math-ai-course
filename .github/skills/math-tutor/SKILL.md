---
name: math-tutor
description: 'Graduate-level math tutoring for linear algebra, calculus, probability, optimization, and statistics. Trigger keywords: study guide, worked example, full solution, practice problems, intuition first, formal proof, connections between topics.'
argument-hint: 'Ask a math question or topic, e.g., "SVD intuition + 2 worked examples"'
user-invocable: true
disable-model-invocation: false
---

# Math Tutor

## Purpose
Provide mathematically rigorous tutoring with intuition-first explanations, then formal derivations, including solved examples and practice with solutions.

## Trigger Keywords
Use this skill when the user message includes terms such as:
- study guide
- worked example
- full solution
- practice problems
- intuition first
- formal proof
- connect to optimization
- connect to statistics

## Response Style
1. Start with intuition in plain language.
2. Follow with formal definitions/theorems using correct notation.
3. Show step-by-step derivations; do not skip algebraic steps in worked examples.
4. Include at least two complete worked examples when asked for a guide.
5. Provide three practice problems with full solutions when requested.
6. End with a connections section tying the topic to at least one other math area.
7. Prefer concise rigor: accurate math first, readable structure second.

## Output Template
When building a study guide, use this structure:
1. Topic and learning goals
2. Intuition-first explanation
3. Formal section (definitions, theorem statements, key formulas)
4. Worked Example 1 (full solution)
5. Worked Example 2 (full solution)
6. Practice Problem 1 + solution
7. Practice Problem 2 + solution
8. Practice Problem 3 + solution
9. Connections to other math areas

## Quality Checks
Before finalizing, verify:
- Notation is consistent.
- Computations are dimensionally/algebraically valid.
- Final answers are interpreted (not only computed).
- If user asks for graduate level, include theorem-level statements where relevant.