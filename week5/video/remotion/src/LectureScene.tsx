import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';

const scenes = [
  {title: 'Why Constraints Matter', start: 0, end: 750},
  {title: 'Problem Setup', start: 750, end: 1650},
  {title: 'Lagrange Multipliers', start: 1650, end: 3000},
  {title: 'Geometric Intuition', start: 3000, end: 3900},
  {title: 'KKT Conditions', start: 3900, end: 5100},
  {title: 'ML Example', start: 5100, end: 6450},
  {title: 'Recap', start: 6450, end: 7200},
] as const;

export const LectureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const scene = scenes.find((s) => frame >= s.start && frame < s.end) ?? scenes[scenes.length - 1];
  const localFrame = frame - scene.start;

  const opacity = interpolate(localFrame, [0, 15, 120], [0, 1, 1], {
    extrapolateRight: 'clamp',
  });

  // TODO(comment-driven): Ask Copilot to generate per-scene bullet overlays with timing based on narration-script.md.
  // TODO(comment-driven): Ask Copilot to align equation callouts with the active scene and add transitions.
  // TODO(comment-driven): Ask Copilot to improve visual pacing by staggering text entrance every 12 frames.

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #09203f, #1f3f59)',
        color: '#f0f4f8',
        fontFamily: 'Avenir Next, Segoe UI, sans-serif',
      }}
    >
      <Audio src={staticFile('audio/week5-full.mp3')} />

      <div
        style={{
          margin: 'auto',
          width: '80%',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 24,
          padding: 48,
          background: 'rgba(9, 32, 63, 0.35)',
          opacity,
          transform: `translateY(${interpolate(localFrame, [0, 45], [30, 0], {
            extrapolateRight: 'clamp',
          })}px)`,
        }}
      >
        <div style={{fontSize: 28, letterSpacing: 2, color: '#ffcc66'}}>WEEK 5</div>
        <h1 style={{fontSize: 68, margin: '12px 0 8px'}}>{scene.title}</h1>
        <p style={{fontSize: 32, lineHeight: 1.35, color: '#d9e2ec'}}>Constrained optimization for machine learning with Lagrange multipliers and KKT intuition.</p>
      </div>
    </AbsoluteFill>
  );
};
