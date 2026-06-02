"""
Interactive module for undergraduate calculus: Riemann sums and numerical integration.
This file demonstrates how to define a function, compute an exact definite integral,
and approximate that integral using left-endpoint Riemann sums. It also visualizes
rectangle approximations and the convergence of the approximation error.
"""

# %%
# Define the integrand and compute its exact definite integral symbolically.
import numpy as np
import sympy as sp
import matplotlib.pyplot as plt

x = sp.symbols('x')


def f(x_value):
    """Return the value of the integrand at x."""
    return x_value ** 2


def exact_integral(a, b):
    """Compute the exact definite integral of f(x) from a to b using sympy."""
    integral = sp.integrate(x ** 2, (x, a, b))
    return float(integral)


# %%
# Implement the left-endpoint Riemann sum for n rectangles on [a, b].

def riemann_sum_left(a, b, n):
    """Compute the left-endpoint Riemann sum approximation for f on [a,b]."""
    x_values = np.linspace(a, b, n + 1)
    dx = (b - a) / n
    left_points = x_values[:-1]
    heights = f(left_points)
    return np.sum(heights * dx)


# %%
# Plot the function and draw the left-endpoint rectangles for n = 5.

def plot_left_rectangles(a=0, b=2, n=5):
    """Plot the curve f(x)=x^2 and the left-endpoint Riemann rectangles."""
    xs = np.linspace(a, b, 400)
    ys = f(xs)

    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(xs, ys, label='$f(x)=x^2$', color='blue')

    x_rect = np.linspace(a, b, n + 1)
    dx = (b - a) / n
    for i in range(n):
        x_left = x_rect[i]
        height = f(x_left)
        ax.add_patch(
            plt.Rectangle((x_left, 0), dx, height, edgecolor='black', facecolor='orange', alpha=0.4)
        )

    ax.set_title('Left-Endpoint Riemann Sum Approximation with n = 5')
    ax.set_xlabel('x')
    ax.set_ylabel('f(x)')
    ax.legend()
    ax.grid(True)
    plt.show()


# %%
# Plot the approximation error as n increases from 1 to 100.

def plot_error_vs_n(a=0, b=2, max_n=100):
    """Plot the absolute error in the left-endpoint Riemann sum as a function of n."""
    exact = exact_integral(a, b)
    ns = np.arange(1, max_n + 1)
    errors = [abs(riemann_sum_left(a, b, n) - exact) for n in ns]

    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(ns, errors, marker='o', markersize=3, linestyle='-', color='purple')
    ax.set_title('Left-Endpoint Riemann Sum Approximation Error')
    ax.set_xlabel('Number of rectangles n')
    ax.set_ylabel('Absolute error')
    ax.grid(True)
    plt.show()


if __name__ == '__main__':
    a, b = 0, 2
    print(f'Exact integral of f(x) from {a} to {b} = {exact_integral(a, b):.6f}')
    print(f'Riemann sum with n=5: {riemann_sum_left(a, b, 5):.6f}')
    plot_left_rectangles(a, b, n=5)
    plot_error_vs_n(a, b, max_n=100)
