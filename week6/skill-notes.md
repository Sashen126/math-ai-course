# Week 6 Skill Notes

## Skill File
Source: `.github/skills/research-pipeline/SKILL.md`

```md
---
name: research-pipeline
description: Build a literature workflow that combines Zotero MCP and NotebookLM outputs into structured notes and an introduction draft.
argument-hint: 'Provide topic and goal, e.g., "identify the main open problems in optimization and generalization for deep learning"'
user-invocable: true
disable-model-invocation: false
---

# Research Pipeline Skill

## Purpose
Run a repeatable literature workflow for AI/math research that:
1. Aggregates papers from Zotero.
2. Extracts themes and open questions from NotebookLM.
3. Produces reusable notes and an introduction draft for writing.

## Inputs
- Research topic or question.
- Target area keywords.
- Optional constraints (years, venues, methods, theory vs empirical focus).

## Workflow
1. Query Zotero MCP for all relevant papers in scope.
2. Return a numbered bibliography summary with year, title, and one-sentence description.
3. Query NotebookLM for cross-paper synthesis:
   - Top 3 themes.
   - Main open questions.
4. Merge both tool outputs into structured notes.
5. Draft a one-page introduction with:
   - Motivation and scope.
   - Prior work framing.
   - Gap and open questions.
   - Project positioning and contribution statement.

## Output Contract
Always produce:
1. `references` section: numbered paper list with year, title, one-line description.
2. `themes` section: exactly 3 themes with short explanations.
3. `open_questions` section: at least 3 unresolved questions.
4. `intro_draft` section: approximately 500-800 words.
5. `query_log` section: exact prompts sent to each tool.

## Quality Checks
- Ensure paper summaries are specific and non-redundant.
- Ensure themes are cross-paper syntheses, not paper-by-paper restatements.
- Ensure open questions are researchable and scoped.
- Ensure introduction cites themes and open questions consistently.
- Flag any missing external-tool outputs explicitly.

## Example Invocation
/research-pipeline topic="optimization and generalization in deep learning" goal="identify the main open problems in my research area"
```

## Test Run Log
Task used:
- "Identify the main open problems in my research area: optimization and generalization in deep learning."

Test result summary (manual dry run in this repo session):
1. Main open problem: Develop predictive, architecture-agnostic generalization metrics that remain reliable at scale.
2. Main open problem: Explain when adaptive optimizers hurt or help out-of-distribution robustness.
3. Main open problem: Unify stability-based and sharpness-based theory into a common framework.
4. Main open problem: Establish principled optimizer/regularizer selection rules under compute and memory budgets.

Execution note:
- Direct invocation of GitHub profile-hosted Copilot skill and external NotebookLM/Zotero backends was not available in this local workspace session.
- The skill file is created locally and ready to sync/push.
