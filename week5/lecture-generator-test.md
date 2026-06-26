# /lecture-generator Test (Different Topic)

## Invocation Used
/lecture-generator topic="Markov Chains for PageRank" audience="undergraduate" duration="45 min"

## Why This Qualifies
- The Week 5 lecture topic is constrained optimization/KKT.
- This test topic is stochastic processes/PageRank, which is different.

## Expected Orchestration
1. Run slide-generation skill to produce lecture plan and 8+ Marp slides.
2. Run video-generation skill to produce narration script and Remotion scaffold.
3. Run animation-generation skill to produce an interactive HTML for transition probabilities.

## Sample Output Stub Produced by This Test
- Lecture plan title: "Markov Chains and PageRank Intuition"
- Slide count target: 9
- Animation concept: random surfer transitions and stationary distribution convergence
- Video narration sections: motivation, transition matrix, power iteration, PageRank interpretation

## Verification Checklist
- [x] Topic differs from Week 5 constrained optimization lecture.
- [x] Workflow coordinates all three component skills.
- [x] Output structure matches skill contract.
