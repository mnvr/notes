---
title: Euclidean rhythms
description: Visualizing Euclidean rhythms, using math to make music
date: 2024-01-31
---

<script setup>
import { reactive, computed, useCssModule, onMounted } from "vue";

const e38 = [1, 0, 0, 1, 0, 0, 1, 0];

const ticker = reactive({  i: 0, intervalId: undefined });
const toggleTicker = () => {
  if (ticker.intervalId) {
    clearInterval(ticker.intervalId);
    ticker.intervalId = undefined;
  } else {
    ticker.intervalId = setInterval(() => {
      ticker.i = (ticker.i + 1) % e38.length;
    }, 1000 / 7);
  }
}

const seqE38 = computed(() =>
  e38.map((v, i) => ticker.intervalId && v && ticker.i == i ? 1 : 0)
);

const { demo, playing } = useCssModule();
const classB1 = computed(() => [demo, ticker.intervalId && playing]);

</script>

<style module>
.E38 {
  height: 100px;
  margin-block-start: 1em;
  margin-block-end: 1.5em;

  display: flex;
  gap: 18px;
}

@media (width < 400px) {
  .E38 {
    gap: min((100% - 12 * 10px) / 11, 18px);
  }
}

.E38 > div {
  width: 10px;
  border: 1px solid tomato;
  box-sizing: border-box;
}

.E38 > div[data-on="1"] {
  background-color: tomato;
}

.demo {
  padding-inline: 12px;
  padding-block: 4px;
  min-width: 5rem;
  border: 1px solid gray;
  border-radius: 3px;
}

.playing {
  border-color: tomato;
}
</style>

# Euclid and music

<div :class="$style.E38">
<template v-for="s in seqE38">
<div :data-on="s"></div>
</template>
</div>

<button @click="toggleTicker" :class="classB1">Play / Pause</button>

### Euclid's algorithm

Sometimes proclaimed as the oldest algorithm put down on paper, Euclid's
algorithm is enthralling in its recursive simplicity.

Euclid's version used a minus instead of a modulo (`%`), but otherwise here it
is in its full glory.

<!-- prettier-ignore -->
```js
gcd = (n, m) => m ? gcd(m, n % m) : n
```

### Euclidean rhythms

At the surface level it is calculating the GCD, the largest number that divides
both `n` and `m`. But really it is unravelling a number pair.

In 2005, Godfried Toussaint realized that Euclid's algorithm encodes many drum
beats. For example, here is `E(3, 8)`.

### Code

Here is an implementation of the algorithm described by Toussaint.

<!-- prettier-ignore -->
```js
const E = (k, n) => {
  let s = Array(n).fill()
            .map((_, i) => (i < k ? [1] : [0]))

  let d = n - k
  n = Math.max(k, d)
  k = Math.min(k, d)
  let z = d

  while (z > 0 || k > 1) {
    for (let i = 0; i < k; i++)
      s[i].push(...s[s.length - 1 - i])
    s.splice(-k)
    z = z - k
    d = n - k
    n = Math.max(k, d)
    k = Math.min(k, d)
  }

  return s.flat()
};
```

At each step, we "fold" the end of the sequence into the beginning. How much to
fold is given by the value of `gcd(n, m)` at that step.

When we call this function with two numbers (_the number of 1's_, and _the
length of the sequence_), it returns a sequence where the 1's are maximally
displaced. e.g. if you copy paste this code to your browser's developer tools,
and then call `E(3,8)`, you'll get

```
> E(3,8)
[1, 0, 0, 1, 0, 0, 1, 0]
```

Surprisingly, this function is all we need to replicate many real world rhythms.

> [!TIP]
>
> See
> [the source code of this site](https://github.com/mnvr/mrmr.io/blob/main/pages/mj/euclid/er.js)
> for a version of this function with comments and more examples.

### Cycling with Euclid

Here is a player that cycles through various Euclidean rhythms.

I have listened to this for hours.

<!-- <D.Cycle /> -->

### Not just beats

It is customary to use Euclidean rhythms to trigger onsets of beats, but there
is nothing stopping us from using it for other purposes, as a generic organic
pattern.

Here we use it to accent certain notes by using a different attack and release.

<!-- <D.Modulate /> -->

### Everything at once

And we can do all these at once. The integral framework provided by Euclidean
rhythms ensures that the mismash doesn't sound as chaotic as mixing arbitrary
patterns would've. It might even sound nice to some.

<!-- <D.Everything /> -->

<small>

There is also a [standalone single HTML file](https://mnvr.github.io/gm1k/e/)
version of this song with no dependencies.

I also wrote a small tutorial on how to make
[sounds using Javascript](/javascript-audio).

</small>
