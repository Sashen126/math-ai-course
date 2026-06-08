---
marp: true
theme: default
paginate: true
---

# Modular Arithmetic & Congruences

A concise Marp slide deck introducing modular arithmetic, congruence notation, and solving simple modular equations.

---

# What Is Modular Arithmetic?

- Modular arithmetic compares integers by their remainder when divided by a modulus.
- We write:
  $$a \equiv b \pmod{n}$$
- This means: "a and b leave the same remainder after division by n."

Example:
- $$17 \equiv 5 \pmod{12}$$ because both 17 and 5 leave remainder 5 when divided by 12.

---

# Basic Rules

- Addition: if $$a \equiv b \pmod{n}$$ and $$c \equiv d \pmod{n}$$, then
  $$a+c \equiv b+d \pmod{n}$$
- Multiplication: then
  $$a c \equiv b d \pmod{n}$$
- Reduction: replace any number with its remainder modulo n.

Example:
- $$8+11 \equiv 19 \equiv 7 \pmod{12}$$
- $$4 \cdot 7 \equiv 28 \equiv 4 \pmod{12}$$

---

# Worked Example

Solve: $$7x \equiv 1 \pmod{26}$$

1. Rewrite with remainders: find x so that $$7x-1$$ is divisible by 26.
2. Try values or use inverses. Since 7 and 26 are coprime, an inverse exists.
3. Compute: $$7 \cdot 15 = 105$$ and $$105 \equiv 1 \pmod{26}$$.
4. So the solution is:
   $$x \equiv 15 \pmod{26}$$

This means every solution is: $$x = 15 + 26k$$ for integer k.

---

# Why It Matters

- Cryptography: many encryption systems use modular arithmetic for keys.
- Clock arithmetic: hours wrap around a fixed modulus (e.g. 12-hour clocks).
- Computer science: hashing, checksums, and cyclic patterns rely on congruences.

---

# Practice Problems

1. Decide whether the congruence is true or false:
   - $$23 \equiv 5 \pmod{9}$$
2. Solve the modular equation:
   - $$4x \equiv 5 \pmod{7}$$

**Answers:**
- 1. True, because both 23 and 5 leave remainder 5 when divided by 9.
- 2. Multiply by the inverse of 4 mod 7, which is 2, so $$x \equiv 2 \pmod{7}$$.
