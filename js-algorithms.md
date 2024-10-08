---
title: Algorithms in Javascript
description: Short and beautiful JS functions
date: 2024-01-27
---

# Algorithms in Javascript

_Short and beautiful JS functions_

### Factorial

```js
const fact = (n) => (n ? n * fact(n - 1) : 1);
```

### Euclid's algorithm

Euclid used minus, the modern variant uses modulo.

```js
const gcd = (n, m) => (m ? gcd(m, n % m) : n);
```

### Exp

The natural exponential function. `e` is its value at the real number `1`.

```js
const exp = (x) =>
  Array(99)
    .fill()
    .reduce((e, _, i) => e + x ** i / fact(i), 0);
```
