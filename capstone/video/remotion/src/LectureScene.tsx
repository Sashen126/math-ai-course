import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';

type Scene = {
  title: string;
  subtitle: string;
  bullets: string[];
  equation?: string;
  start: number;
  end: number;
};

const scenes: Scene[] = [
  {
    title: 'Why Optimization Settings Matter',
    subtitle: 'Motivation',
    bullets: [
      'Same model + data can train very differently.',
      'Learning rate often determines speed and stability.',
      'Goal: systematic tuning, not random guessing.',
    ],
    start: 0,
    end: 840,
  },
  {
    title: 'Gradient Descent Update Rule',
    subtitle: 'Core setup',
    bullets: [
      'We minimize J(w) over parameters w.',
      'Each update moves against the gradient.',
      'Step size eta controls progress per iteration.',
    ],
    equation: 'w_{t+1} = w_t - eta_t grad J(w_t)',
    start: 840,
    end: 1800,
  },
  {
    title: 'Stability in 1D Quadratic',
    subtitle: 'Theory anchor',
    bullets: [
      'Use J(w) = (a/2)w^2 with a > 0.',
      'Update becomes multiplication by (1 - eta a).',
      'Convergence window: 0 < eta < 2/a.',
    ],
    equation: '|1 - eta a| < 1',
    start: 1800,
    end: 2880,
  },
  {
    title: 'Behavior Regimes',
    subtitle: 'Interpretation',
    bullets: [
      '0 < eta < 1/a: monotone convergence.',
      '1/a < eta < 2/a: oscillatory convergence.',
      'eta > 2/a: divergence.',
    ],
    start: 2880,
    end: 3960,
  },
  {
    title: 'Why Schedules Improve Training',
    subtitle: 'From constant to adaptive over time',
    bullets: [
      'Large early steps speed up exploration.',
      'Small late steps improve fine-tuning.',
      'Warmup + decay balances both phases.',
    ],
    start: 3960,
    end: 4950,
  },
  {
    title: 'Practical Schedule Playbook',
    subtitle: 'Application',
    bullets: [
      'Try step decay, cosine decay, or warmup+decay.',
      'If unstable: reduce peak LR, increase warmup.',
      'If stalled: raise initial LR or slow decay.',
    ],
    start: 4950,
    end: 6210,
  },
  {
    title: 'Recap and Transfer',
    subtitle: 'Conclusion',
    bullets: [
      'Learning rate links theory to practical outcomes.',
      'Schedules improve speed-stability trade-offs.',
      'Treat optimizer tuning as a measurable design task.',
    ],
    start: 6210,
    end: 7500,
  },
];

const palette = {
  bgA: '#0b2942',
  bgB: '#155879',
  bgC: '#2a9d8f',
  card: 'rgba(8, 28, 44, 0.38)',
  line: 'rgba(255,255,255,0.28)',
  title: '#f4f9ff',
  body: '#d7e4ef',
  accent: '#f4a261',
};

export const LectureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const scene = scenes.find((s) => frame >= s.start && frame < s.end) ?? scenes[scenes.length - 1];
  const localFrame = frame - scene.start;

  const cardOpacity = interpolate(localFrame, [0, 18, 170], [0, 1, 1], {
    extrapolateRight: 'clamp',
  });

  const rise = interpolate(localFrame, [0, 45], [34, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(130deg, ${palette.bgA}, ${palette.bgB} 58%, ${palette.bgC})`,
        color: palette.title,
        fontFamily: 'Avenir Next, Segoe UI, sans-serif',
      }}
    >
      <Audio src={staticFile('audio/capstone-lecture.mp3')} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 15% 10%, rgba(255,255,255,0.08), transparent 38%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.07), transparent 42%)',
        }}
      />

      <div
        style={{
          margin: 'auto',
          width: '82%',
          borderRadius: 28,
          border: `1px solid ${palette.line}`,
          padding: 56,
          background: palette.card,
          boxShadow: '0 22px 50px rgba(0, 0, 0, 0.3)',
          opacity: cardOpacity,
          transform: `translateY(${rise}px)`,
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontSize: 25, letterSpacing: 1.6, color: palette.accent, fontWeight: 700}}>
            CAPSTONE MINI-LECTURE
          </div>
          <div style={{fontSize: 24, color: '#bed0df'}}>{scene.subtitle}</div>
        </div>

        <h1 style={{fontSize: 70, margin: '18px 0 14px', lineHeight: 1.03}}>{scene.title}</h1>

        <div style={{display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 26, alignItems: 'start'}}>
          <ul style={{margin: 0, paddingLeft: 24, fontSize: 35, lineHeight: 1.33, color: palette.body}}>
            {scene.bullets.map((bullet, idx) => {
              const fade = interpolate(localFrame, [idx * 14, idx * 14 + 16], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <li
                  key={bullet}
                  style={{
                    marginBottom: 18,
                    opacity: fade,
                    transform: `translateY(${interpolate(fade, [0, 1], [12, 0])}px)`,
                  }}
                >
                  {bullet}
                </li>
              );
            })}
          </ul>

          <div
            style={{
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: 16,
              padding: '20px 22px',
              minHeight: 180,
              background: 'rgba(11, 35, 53, 0.55)',
              color: '#e7eef5',
              fontSize: 33,
              lineHeight: 1.3,
            }}
          >
            <div style={{fontSize: 24, color: '#9fc0d8', marginBottom: 10}}>Equation anchor</div>
            {scene.equation ?? 'Use this scene to reinforce the core idea before moving on.'}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 70,
          bottom: 42,
          color: '#d7e4ef',
          fontSize: 24,
          letterSpacing: 0.5,
        }}
      >
        Topic: Gradient Descent and Learning Rate Schedules
      </div>
    </AbsoluteFill>
  );
};
