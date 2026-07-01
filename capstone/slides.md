---
marp: true
math: katex
theme: default
paginate: true
---

# Gradient Descent That Actually Works

## Learning Rates and Schedules in Machine Learning

Mini-lecture for early graduate / advanced undergraduate students

---

# Motivation: Why Training Fails

- Same model, same data, different optimizer settings -> very different outcomes.
- A bad learning rate can cause:
  - Divergence (loss explodes)
  - Slow training (tiny progress)
  - Instability near minima (oscillation)
- We need principled choices, not trial-and-error guessing.

---

# Core Setup

We minimize an empirical loss:

$$
\min_{w \in \mathbb{R}^d} \; J(w)
$$

Basic gradient descent update:

$$
w_{t+1} = w_t - \eta_t \nabla J(w_t)
$$

- $\eta_t$: learning rate (step size)
- $\nabla J(w_t)$: local slope of objective

---

# Local Quadratic Intuition

Near a minimum $w^{\ast}$, many losses behave approximately like:

$$
J(w) \approx J(w^{\ast}) + \frac{1}{2}(w-w^{\ast})^\top H (w-w^{\ast})
$$

where $H$ is the Hessian.

Then dynamics are controlled by curvature (eigenvalues of $H$):

- High curvature directions need smaller steps
- Low curvature directions can tolerate larger steps

---

# Stability Condition (1D View)

For $J(w)=\frac{a}{2}w^2$ with $a>0$:

$$
w_{t+1} = (1-\eta a)w_t
$$

Convergence requires:

$$
|1-\eta a| < 1 \quad \Longleftrightarrow \quad 0 < \eta < \frac{2}{a}
$$

Takeaway: learning rate must match curvature scale.

---

# Worked Example 1: Safe vs Unsafe Steps

Objective:

$$
J(w)=\frac{1}{2}w^2, \quad a=1, \quad w_0=4
$$

- If $\eta=0.8$: $w_{t+1}=0.2w_t$ -> rapid convergence
- If $\eta=1.8$: $w_{t+1}=-0.8w_t$ -> oscillatory but convergent
- If $\eta=2.2$: $w_{t+1}=-1.2w_t$ -> divergence

Moral: “larger” is not always “faster.”

---

# Why Constant Learning Rate Is Not Enough

Constant $\eta$ gives a fixed trade-off:

- Large $\eta$: fast early progress, unstable near optimum
- Small $\eta$: stable late training, very slow start

Scheduling solves this by using:

1. Larger steps early
2. Smaller steps later

---

# Common Learning Rate Schedules

1. **Step decay**

$$
\eta_t = \eta_0 \gamma^{\lfloor t/T \rfloor}
$$

2. **Cosine decay**

$$
\eta_t = \eta_{\min} + \frac{1}{2}(\eta_0-\eta_{\min})\left(1+\cos\frac{\pi t}{T}\right)
$$

3. **Warmup + decay**
- Gradually increase $\eta$ first, then decay

---

# Worked Example 2: Mini Comparison

Suppose validation loss plateaus around epoch 12.

- Constant $\eta=10^{-3}$: stable but underfits by epoch 25
- Step decay at epochs 10 and 18: better final loss
- Cosine schedule: smoother convergence and fewer spikes

Interpretation: later smaller steps improve fine-tuning.

---

# Practical Rulebook

- Start from a baseline range test (small to large $\eta$).
- Use warmup for deep or transformer-like networks.
- Monitor both train and validation curves.
- If loss spikes repeatedly, reduce peak learning rate.
- If progress stalls too early, increase initial learning rate or slow decay.

---

# Case Study Lens: Quadratic Valley

In anisotropic valleys, one global learning rate must satisfy both:

$$
\eta < \frac{2}{\lambda_{\max}(H)}
$$

But speed along shallow directions depends on $\lambda_{\min}(H)$.

This mismatch motivates:

- Scheduling
- Momentum
- Adaptive methods (Adam, RMSProp)

---

# Connection to Generalization

Optimization choices also affect generalization:

- Large early steps may explore wider basins
- Late small steps stabilize final fit
- Schedules can act like implicit regularization

Open research question:
How should we co-design schedule + optimizer for robust OOD performance?

---

# Recap

- Gradient descent behavior is controlled by learning rate and curvature.
- Stability in simple models explains failures in deep training.
- Learning rate schedules improve the speed-stability trade-off.
- Practical tuning can be systematic, not random.

## Exit Prompt
If your training loss oscillates while validation barely improves, what two schedule changes would you try first, and why?
