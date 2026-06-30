import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';

const scenes = [
  {
    title: 'Why Constraints Matter',
    subtitle: 'Motivation',
    bullets: [
      'Real ML objectives often include feasibility limits.',
      'Examples: norm budgets, simplex constraints, fairness limits.',
      'Optimization must happen inside a feasible set.',
    ],
    equation: 'min J(w) subject to constraints',
    start: 0,
    end: 750,
  },
  {
    title: 'Problem Setup',
    subtitle: 'Formal notation',
    bullets: [
      'Parameters w are in R^d.',
      'Equality constraints: h_j(w) = 0.',
      'Inequality constraints: g_i(w) <= 0.',
    ],
    equation: 'min_w J(w), h_j(w)=0, g_i(w)<=0',
    start: 750,
    end: 1650,
  },
  {
    title: 'Lagrange Multipliers',
    subtitle: 'Equality constraints',
    bullets: [
      'Build L(w, lambda) = J(w) + lambda h(w).',
      'Solve stationarity with feasibility.',
      'Interpret lambda as constraint sensitivity.',
    ],
    equation: 'grad_w L = 0, h(w)=0',
    start: 1650,
    end: 3000,
  },
  {
    title: 'Geometric Intuition',
    subtitle: 'Gradient alignment',
    bullets: [
      'At optimum, descent is blocked by the boundary.',
      'Objective and constraint gradients align.',
      'This gives a tangency-style condition.',
    ],
    equation: 'grad J(w*) = -lambda grad h(w*)',
    start: 3000,
    end: 3900,
  },
  {
    title: 'KKT Conditions',
    subtitle: 'Inequality constraints',
    bullets: [
      'Stationarity combines objective and active constraints.',
      'Dual feasibility requires mu_i >= 0.',
      'Complementary slackness: mu_i g_i(w*) = 0.',
    ],
    equation: 'mu_i >= 0, g_i(w*)<=0, mu_i g_i(w*)=0',
    start: 3900,
    end: 5100,
  },
  {
    title: 'ML Example',
    subtitle: 'Norm-constrained fitting',
    bullets: [
      'If unconstrained optimum is feasible, constraint is inactive.',
      'Otherwise optimum lies on the norm boundary.',
      'Active multiplier quantifies constraint pressure.',
    ],
    equation: 'min ||Xw-y||^2 s.t. ||w||^2 - R^2 <= 0',
    start: 5100,
    end: 6450,
  },
  {
    title: 'Recap',
    subtitle: 'Takeaways',
    bullets: [
      'Lagrangian methods unify algebra and geometry.',
      'KKT conditions explain active vs inactive constraints.',
      'These tools transfer directly to ML design choices.',
    ],
    equation: 'Use feasibility + stationarity + slackness checks',
    start: 6450,
    end: 7200,
  },
] as const;

export const LectureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const scene = scenes.find((s) => frame >= s.start && frame < s.end) ?? scenes[scenes.length - 1];
  const localFrame = frame - scene.start;

  const opacity = interpolate(localFrame, [0, 15, 120], [0, 1, 1], {
    extrapolateRight: 'clamp',
  });

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
          width: '84%',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 24,
          padding: 42,
          background: 'rgba(9, 32, 63, 0.35)',
          opacity,
          transform: `translateY(${interpolate(localFrame, [0, 45], [30, 0], {
            extrapolateRight: 'clamp',
          })}px)`,
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{fontSize: 28, letterSpacing: 2, color: '#ffcc66'}}>WEEK 5</div>
          <div style={{fontSize: 26, color: '#bed0df'}}>{scene.subtitle}</div>
        </div>
        <h1 style={{fontSize: 64, margin: '10px 0 14px'}}>{scene.title}</h1>

        <div style={{display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 24, alignItems: 'start'}}>
          <ul style={{margin: 0, paddingLeft: 26, fontSize: 30, lineHeight: 1.35, color: '#d9e2ec'}}>
            {scene.bullets.map((bullet, idx) => {
              const bulletOpacity = interpolate(localFrame, [idx * 12, idx * 12 + 16], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <li
                  key={bullet}
                  style={{
                    marginBottom: 16,
                    opacity: bulletOpacity,
                    transform: `translateY(${interpolate(bulletOpacity, [0, 1], [10, 0])}px)`,
                  }}
                >
                  {bullet}
                </li>
              );
            })}
          </ul>

          <div
            style={{
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 14,
              padding: '16px 18px',
              background: 'rgba(9, 32, 63, 0.45)',
              color: '#e2e8f0',
              minHeight: 170,
            }}
          >
            <div style={{fontSize: 20, color: '#9fc0d8', marginBottom: 8}}>Equation Callout</div>
            <div style={{fontSize: 30, lineHeight: 1.3}}>{scene.equation}</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
