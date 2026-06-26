# Skill: video-generator

## Purpose
Produce a narrated lecture video pipeline using Remotion visuals and edge-tts narration from a lecture script.

## Inputs
- Topic and audience level
- Slide deck path
- Desired duration

## Workflow (Section 5.2 style, comment-driven)
1. Create a narration script aligned with slide order.
2. Scaffold a Remotion project with a scene composition.
3. Use comment blocks in source files to drive Copilot code generation for scene timing and captions.
4. Generate narration audio via `edge-tts` for each scene.
5. Render and mux final video.

## Comment-Driven Pattern
- Add explicit TODO comment prompts in code before generating:
  - scene timing map
  - caption transitions
  - audio cue alignment
- Ask Copilot to implement each TODO block in sequence.

## Output Contract
- `week5/video/narration-script.md`
- `week5/video/remotion/*` scaffold
- `week5/video/tools/generate_narration.sh`
- `week5/video/tools/build_video.sh`

## Notes
- If local Node/npm or `edge-tts` is unavailable, still generate the complete scaffold and executable commands.
