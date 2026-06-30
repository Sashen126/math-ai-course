# Capstone Narration Script

## Scene 1 - Motivation (0:00-0:28)
When a model fails to train, we often blame architecture or data first. But in many cases, the real issue is optimization settings, especially the learning rate. Too small, and training crawls. Too large, and the loss can oscillate or even explode. In this mini-lecture, we will build practical intuition for choosing learning rates and schedules that actually work.

## Scene 2 - Core Update Rule (0:28-1:00)
We start with the gradient descent update: w at time t plus one equals w at time t minus eta times the gradient of J at w t. Eta, the learning rate, controls how far we move along the negative gradient direction. This single scalar strongly influences speed, stability, and final model quality.

## Scene 3 - Stability in a Simple Model (1:00-1:36)
To get clean intuition, consider a one-dimensional quadratic loss: J of w equals one half a w squared, with a positive. The update becomes w t plus one equals one minus eta times a, all times w t. Convergence requires the absolute value of one minus eta a to be less than one, so eta must be between zero and two over a. This gives a precise stability window.

## Scene 4 - Interpreting the Regimes (1:36-2:07)
Inside the stability window, behavior still changes. If eta is between zero and one over a, convergence is monotone. If eta is between one over a and two over a, convergence oscillates but still contracts. Once eta exceeds two over a, the magnitude grows and the method diverges. This explains why "bigger steps" can look fast initially but fail overall.

## Scene 5 - Why Schedules Matter (2:07-2:45)
A constant learning rate forces one compromise across the entire run. Early training often benefits from larger steps for rapid progress, while later training needs smaller steps to settle near good minima. Learning rate schedules solve this mismatch: warmup avoids unstable early updates, and decay improves late-stage refinement.

## Scene 6 - Practical Schedule Choices (2:45-3:27)
Three common choices are step decay, cosine decay, and warmup plus decay. Step decay is simple and predictable. Cosine decay is smooth and often reduces abrupt shocks in validation loss. Warmup plus decay is especially helpful in deep networks where large initial updates can destabilize optimization.

## Scene 7 - Mini Case Study and Close (3:27-4:10)
In practice, if your training curve oscillates and validation does not improve, reduce peak learning rate and increase warmup length. If progress stalls too early, increase the initial learning rate or slow the decay. The key message is that optimization tuning can be systematic: use stability intuition, monitor curves, and adjust schedules deliberately rather than by random trial and error.
