---
title: Euclidean rhythms
description: Visualizing Euclidean rhythms, using math to make music
date: 2024-01-31
---

<script setup>
import { reactive, computed, watch, watchEffect, useCssModule, onMounted } from "vue";
import { beep } from "./js/javascript-audio.ts";
import { E } from "./js/euclid.ts";
import { initialCycleState, cycleTick } from "./js/euclidean-rhythms.ts";

const { demo, playing } = useCssModule();

const e38 = E(3, 8);
const e78 = E(7, 8);

// Demo 1 --- E(3, 8)

const ticker1 = reactive({  i: 0, intervalId: undefined });

const toggleTicker = () => {
  if (ticker1.intervalId) {
    ticker1.intervalId = (clearInterval(ticker1.intervalId), undefined);
  } else {
    ticker1.intervalId = setInterval(() => {
      ticker1.i = (ticker1.i + 1) % e38.length;
    }, 1000 / 7);
  }
}

const seq1 = computed(() =>
  e38.map((v, i) => ticker1.intervalId && v && ticker1.i == i)
);

watch(ticker1, ({intervalId, i}) => intervalId && e38[i] && beep(0.01))

const class1 = computed(() => [demo, ticker1.intervalId && playing]);

// Demo 2 --- Cycle

const ticker2 = reactive({  state: initialCycleState, intervalId: undefined });
const cycle = () => {
  if (ticker2.intervalId) {
    ticker2.intervalId = (clearInterval(ticker2.intervalId), undefined);
  } else {
    ticker2.intervalId = setInterval(() => {
      ticker2.state = cycleTick(ticker2.state);
    }, 1000 / 7);
  }
}

const seq2 = computed(() => {
  const { k, n, p } = ticker2.state;
  return E(k, n).map((v, i) => ticker2.intervalId && v && p == i)
});

watchEffect(() =>
  ticker2.intervalId && seq2.value[ticker2.state.p] && beep(0.01)
)

const class2 = computed(() => [demo, ticker2.intervalId && playing]);

// Demo 3 --- Modulate

const onset = E(9, 15);
const accent = E(4, 15);

const ticker3 = reactive({
  /* phase, indexes into both onset and accent rhythms */
  p: 0,
  intervalId: undefined
});

const modulate = () => {
  if (ticker3.intervalId) {
    ticker3.intervalId = (clearInterval(ticker3.intervalId), undefined);
  } else {
    ticker3.intervalId = setInterval(() => {
      ticker3.p = (ticker3.p + 1) % onset.length;
    }, 1000 / 7);
  }
}

const seq3 = computed(() =>
  onset.map((v, i) =>
    ticker3.intervalId && v && ticker3.p == i && (accent[i] ? "accent" : "true")
  )
);

watch(ticker3, ({intervalId, p}) => {
  if (intervalId && onset[p]) {
    if (accent[p]) {
      beep(0.02, 0.01, 0.1);
    } else {
      beep(0.08, 0.001, 0.1);
    }
  }
});

const class3 = computed(() => [demo, ticker3.intervalId && playing]);

// Demo 4 --- Everything

const ticker4 = reactive({  state: initialCycleState, intervalId: undefined });
const everything = () => {
  if (ticker4.intervalId) {
    ticker4.intervalId = (clearInterval(ticker4.intervalId), undefined);
  } else {
    ticker4.intervalId = setInterval(() => {
      ticker4.state = cycleTick(ticker4.state);
    }, 1000 / 7);
  }
}

const seq4 = computed(() => {
  const { k, n, p } = ticker4.state;
  const intervalId = ticker4.intervalId;
  const eKN = E(k, n);
  const seq38 = e38.map((v, i) => intervalId && v && p == i);
  const seqKN = eKN.map((v, i) => intervalId && v && p == i);
  const seq78 = e78.map((v, i) => intervalId && v && p == i);
  return {a: seq38, b: seqKN, c: seq78};
});

watchEffect(() => {
  const { k, n, p } = ticker4.state;
  if (ticker4.intervalId) {
    if (seq4.value.a[p % 8]) {
      beep(0.01, 0.001, 0.1, 660);
    }
    if (seq4.value.b[p]) {
      beep(0.01);
      beep(0.005, 0.001, 0.02, 660);
    }
    if (seq4.value.c[p % 8]) {
      beep(0.1, 0.001, 0.1, 110);
    }
  }
});

const class4 = computed(() => [demo, ticker4.intervalId && playing]);
</script>

<style module>
button.demo {
  padding-inline: 8px;
  padding-block: 2px;
  min-width: 5rem;
  border: 1px solid gray;
  border-radius: 3px;
}

button.playing {
  border-color: tomato;
}

.beats {
  height: 100px;
  margin-block-start: 2rem;
  margin-block-end: 1.5rem;

  display: flex;
  gap: 18px;

  @media (width < 400px) {
    gap: min((100% - 12 * 10px) / 11, 18px);
  }

  & > div {
    width: 10px;
    border: 1px solid tomato;
    box-sizing: border-box;
  }
}

.beats > div[data-on="true"] {
  background-color: tomato;
}

.beats > div[data-on="accent"] {
  background-color: lawngreen;
}

.beats.cycle {
  height: 40px;

  justify-content: space-between;

  & > div {
    width: 20px;
  }
}

.beats.modulate {
  height: 10px;

  justify-content: space-between;

  & > div {
    width: 10px;
    border-radius: 5px;
  }
}
</style>

# Euclid and music

<div :class="$style.beats">
  <div v-for="s in seq1" :data-on="s"></div>
</div>

<button @click="toggleTicker" :class="class1">Play / Pause</button>

This player is producing a beep at each `E(3, 8)` beat.

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
and then call `E(3, 8)`, you'll get

```
> E(3, 8)
[1, 0, 0, 1, 0, 0, 1, 0]
```

> [!TIP]
>
> See
> [the source code of this site](https://github.com/mnvr/notes/blob/main/js/er.js)
> for a version of this function with comments and more examples.

Surprisingly, this function is all we need to replicate many real world rhythms.

### Cycling with Euclid

Here is a player that cycles through various Euclidean rhythms.

I have listened to this for hours.

<div :class="[$style.beats, $style.cycle]">
  <div v-for="s in seq2" :data-on="s"></div>
</div>

<button @click="cycle" :class="class2">Cycle</button>

### Not just beats

It is customary to use Euclidean rhythms to trigger onsets of beats, but there
is nothing stopping us from using it for other purposes, as a generic organic
pattern.

Here we use it to accent certain notes by using a different attack and release.

<div :class="[$style.beats, $style.modulate]">
  <div v-for="s in seq3" :data-on="s"></div>
</div>

<button @click="modulate" :class="class3">Modulate</button>

### Everything at once

And we can do all these at once. The integral framework provided by Euclidean
rhythms ensures that the mismash doesn't sound as chaotic as mixing arbitrary
patterns would've. It might even sound nice to some.

<div>
  <div :class="$style.beats">
    <div v-for="s in seq4.a" :data-on="s"></div>
  </div>
  <div :class="$style.beats">
    <div v-for="s in seq4.b" :data-on="s"></div>
  </div>
  <div :class="$style.beats">
    <div v-for="s in seq4.c" :data-on="s"></div>
  </div>
</div>

<button @click="everything" :class="class4">Everthing at once</button>

<hr style="margin-block: 2rem">

<small>

There is also a [standalone single HTML file](https://mnvr.github.io/gm1k/e/)
version of this song with no dependencies.

I also wrote a small tutorial on how to make
[sounds using Javascript](/javascript-audio).

</small>
