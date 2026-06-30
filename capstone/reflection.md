# Capstone Reflection (Track B: Teaching Math)

## Topic and Teaching Goal
I chose **Gradient Descent and Learning Rate Schedules** because it is both mathematically principled and practically central to machine learning. My teaching goal was to help a student move from equation-level understanding to actionable training decisions.

## Coherent Package Design
I intentionally designed slides, video, and animation as one instructional sequence:
1. **Slides** establish the narrative arc: motivation -> update rule -> stability math -> schedules -> practical rules.
2. **Video** follows the same arc with timed scenes and narration for continuity.
3. **Animation** isolates the key dynamic (stable vs oscillatory vs divergent updates) so learners can experiment with learning rate directly.

This avoided the common failure mode where each artifact is technically complete but pedagogically disconnected.

## What I Refined in the Skill
Compared with the earlier lecture-generator workflow, I refined the skill in four important ways:
1. I made **coherence** a first-class requirement, not an optional quality check.
2. I required a **full-content narration pipeline**, preventing short demo-only videos.
3. I required a **dynamic animation control** that teaches mechanism, not decoration.
4. I added a **reflection artifact** to capture what pedagogical choices worked and why.

## What Worked Well
- The 1D stability derivation provided a compact mathematical anchor.
- Using scene-based narration made the Remotion structure easy to align with content.
- The slider-based simulator gave immediate intuition for step-size regimes.

## Limitations and Next Iteration
- The current video scaffold assumes local availability of `edge-tts` and `npm`; if unavailable, render cannot be validated end-to-end in this environment.
- A stronger next version would add one more realistic deep-learning case curve (train/val logs) and a short formative quiz slide with answers.

## Takeaway
The strongest improvement was treating mini-lecture generation as **instructional systems design** rather than file generation. Once the skill encoded coherence and completeness constraints, each output became easier to refine and more useful to learners.
