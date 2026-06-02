# Integration by Parts

## Definition
Integration by parts is a technique derived from the product rule for derivatives. For two functions $u(x)$ and $v(x)$ that are continuously differentiable on an interval, the formula is

$$
\int u(x)\,v'(x)\,dx = u(x)v(x) - \int u'(x)v(x)\,dx.
$$

This identity transforms the integral of a product into a simpler expression when one factor is easy to differentiate and the other is easy to integrate.

## Example
Consider the integral

$$
\int x e^x \, dx.
 $$

Choose $u(x)=x$ and $v'(x)=e^x$. Then $u'(x)=1$ and $v(x)=e^x$, so integration by parts gives

$$
\int x e^x \, dx = x e^x - \int 1 \cdot e^x \, dx = x e^x - e^x + C.
 $$

This example shows how the method reduces the original product integral to a simpler exponential integral.

## Conclusion
Integration by parts is important because it gives a systematic way to evaluate integrals of products, especially when one function becomes simpler after differentiation.
