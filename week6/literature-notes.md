# Week 6 Literature Notes

## Topic
Optimization and Generalization in Deep Learning

## Step 1 Status
- Zotero import: Pending manual completion
- NotebookLM PDF upload: Pending manual completion
- BibTeX export: Seeded in `week6/references.bib` and ready to replace with your exact Zotero export

## Query Log and Responses

### A) VS Code Copilot Chat via Zotero MCP

Exact query sent:

"List all papers in my Zotero library related to optimization and generalization in deep learning. Return a numbered list with year, title, and a one-sentence description for each paper."

Response captured (draft from current `week6/references.bib`; replace with direct MCP output after running):

1. 2014 - Adam: A Method for Stochastic Optimization. Introduces Adam, an adaptive first-order optimizer that combines momentum and per-parameter learning-rate scaling.
2. 2016 - Train Faster, Generalize Better: Stability of Stochastic Gradient Descent. Shows that SGD stability helps explain why optimization choices affect generalization.
3. 2017 - The Marginal Value of Adaptive Gradient Methods in Machine Learning. Demonstrates that adaptive methods can converge quickly but often underperform SGD on test generalization.
4. 2018 - Optimization Methods for Large-Scale Machine Learning. Surveys large-scale optimization theory and algorithms, linking practical heuristics to convergence behavior.
5. 2019 - Decoupled Weight Decay Regularization. Proposes AdamW and clarifies why decoupling weight decay improves optimizer behavior.
6. 2021 - Sharpness-Aware Minimization for Efficiently Improving Generalization. Introduces SAM, which favors flatter minima and improves out-of-sample performance.

### B) NotebookLM

Exact query sent:

"Across the papers in this notebook, what are the 3 main research themes, and what are the main open questions in this area?"

Response captured (draft; replace with direct NotebookLM output after running):

Main research themes:
1. Optimizer design and inductive bias: How update rules such as SGD, Adam, and AdamW influence both optimization speed and the solutions reached.
2. Generalization geometry: Why flatness, sharpness, and stability are predictive (or not) of test-time performance.
3. Regularization through optimization: How techniques like weight decay and SAM act as implicit or explicit regularizers.

Main open questions:
1. Theory-practice gap: Which theoretical metrics best predict generalization in modern over-parameterized models?
2. Scale robustness: How do optimizer conclusions transfer from medium-scale benchmarks to frontier-scale foundation models?
3. Data and objective interactions: How do optimizer effects change under distribution shift, noisy labels, and multi-objective training?
4. Unified selection rules: Can we derive principled guidelines for choosing optimizer + regularization stacks by task and architecture?

## Notes for Capstone Reuse
- Keep exact query strings and tool outputs in this file.
- For final capstone logs, preserve timestamps and model/tool names for each query.
