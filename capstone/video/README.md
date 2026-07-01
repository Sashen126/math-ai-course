# Capstone Video Pipeline

This folder contains a Remotion + edge-tts pipeline for a complete 3-5 minute narrated mini-lecture video.

## Structure
- `narration-script.md`: full lecture narration script
- `remotion/`: Remotion composition and project files
- `tools/generate_narration.sh`: generate full MP3 narration with edge-tts
- `tools/build_video.sh`: install dependencies and render final MP4

## Build Steps
Run one command for narration + render:

```bash
cd capstone/video/tools
./build_video.sh
```

Expected output:
- `capstone/video/remotion/out/capstone-lecture.mp4`

## Notes
- The rendered video is designed to cover the entire lecture sequence from motivation to conclusion.
- `build_video.sh` calls `generate_narration.sh` first, then renders with Remotion.
- If edge-tts is unavailable, install with: `pip install edge-tts`.
