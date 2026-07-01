# Week 5 Video Pipeline

This folder contains a Remotion + edge-tts workflow scaffold for generating a narrated lecture video.

## Structure
- `narration-script.md`: narration text in scene order
- `remotion/`: project scaffold and composition source
- `tools/generate_narration.sh`: edge-tts audio generation command pattern
- `tools/build_video.sh`: install/build/render sequence

## Comment-Driven Copilot Workflow (Section 5.2 style)
1. Open `remotion/src/LectureScene.tsx`.
2. Find TODO blocks labeled `comment-driven`.
3. Prompt Copilot to implement each TODO one at a time.
4. Re-run preview and adjust timings.

## Local Run Commands
```bash
cd week5/video/remotion
npm install
npm run start
```

Then render:
```bash
cd week5/video/tools
bash build_video.sh
```
