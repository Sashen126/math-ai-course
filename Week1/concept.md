---
marp: true
theme: default
paginate: true
---
# Introduction to Linear Regression - tests

Linear regression is one of the most important concepts in mathematics, statistics, and machine learning. It is widely used for prediction, trend analysis, and understanding relationships between variables. In artificial intelligence and data science, linear regression often serves as the first predictive modeling technique students learn because it combines mathematical intuition with practical applications.

The main goal of linear regression is to model the relationship between an independent variable and a dependent variable. For example, we may want to predict a student's exam score based on the number of hours studied. If the relationship between these variables is approximately linear, we can represent it using a straight line.

An inline equation example is $y = mx + b$, where:

- $m$ represents the slope of the line,
- $b$ represents the intercept,
- $x$ is the input variable,
- and $y$ is the predicted output.

The slope determines how much the output changes when the input increases by one unit. If the slope is positive, the relationship increases; if negative, the relationship decreases.

A more formal representation of simple linear regression is:

$$
y_i = \beta_0 + \beta_1 x_i + \varepsilon_i
$$

In this equation:

- $\beta_0$ is the intercept,
- $\beta_1$ is the regression coefficient,
- $x_i$ is the predictor variable,
- and $\varepsilon_i$ represents random error.

The objective of regression is to estimate the coefficients that minimize prediction error. One common approach is the least squares method, which minimizes the sum of squared residuals.

The residual for an observation is:

$$
e_i = y_i - \hat{y}_i
$$

The least squares optimization criterion is:

$$
S(\beta_0, \beta_1) = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

This objective function penalizes large prediction errors more heavily because the residuals are squared.

Linear regression is important because it forms the foundation for many advanced machine learning algorithms. Concepts such as gradient descent, regularization, generalized linear models, and neural networks build upon similar mathematical principles.

In practical applications, linear regression can be used in finance for stock prediction, biology for modeling growth trends, healthcare for predicting disease risk, and engineering for process optimization. Despite its simplicity, it remains one of the most interpretable and powerful tools in data analysis.

Understanding linear regression also helps students develop intuition about correlation, prediction, uncertainty, and statistical inference. For this reason, it is often considered the gateway concept to machine learning and artificial intelligence.