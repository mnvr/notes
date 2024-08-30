---
title: Softmax
date: 2024-08-29
---

# Softmax

Softmax converts an arbitrary set of numbers into a probability distribution.
That is, the numbers will all be between 0 and 1, and will sum together to 1.

```js
const sm = (xs) => {
    const s = xs.map(Math.exp).reduce((a, x) => a + x, 0);
    return xs.map((x) => Math.exp(x) / s);
};
```

It has some nice characteristics. E.g. compared to other methods of
normalization, this handles negatives, small, large, zero, anything you can
throw at it usually.

```js
// helper method to print as percentages
const per = (xs) => xs.map((x) => Math.round(x * 100));

> per(sm([1, 0, 3, -10, 0.07]))
[ 11, 4, 81, 0, 4 ]
```

It has some not so nice ones too. E.g. it is not scale invariant.

```js
> per(sm([1, 2]))
[ 27, 73 ]
> per(sm([2, 4]))
[ 12, 88 ]
> per(sm([4, 8]))
[ 2, 98 ]
```

Intuitively, I would think the presence of the exponent will amplify
differences. This happens indeed

```js
> per(sm([1, 2, 4, 8]))
[ 0, 0, 2, 98 ]
```

But not to an extent that I expected on first contact. On the contrary, it seems
to further "compress" the numbers together if they're close together

```js
> per(sm([0.1, 0.2, 0.3, 0.4]))
[ 21, 24, 26, 29 ]
```

Again, depending on the task at hand, this might or might not be the behaviour I
might want.

It seems to work great in ML settings, in particular for converting the output
of the last layer into probability distributions, for reasons that seem to be
tied to how the backpropogation works.
