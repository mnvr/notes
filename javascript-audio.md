---
title: Making music in Javascript
description: An elementary introduction to JavaScript audio
date: 2024-01-25
---

<script setup>
import { ref, computed, useCssModule, onMounted, onUnmounted } from "vue";
import { toggleFirstTone, beep } from "./js/javascript-audio.ts";

const { demo, playing } = useCssModule();

const toggleBeeps = (id) =>
  id ? (clearInterval(id), undefined) : setInterval(() => beep(0.01), 1000 / 7);

const osc1 = ref();
const on1 = () => (osc1.value = toggleFirstTone(osc1.value));
const classB1 = computed(() => [demo, osc1.value && playing]);

const osc2 = ref();
const on2 = () => {
  osc2.value = beep(0.2);
  osc2.value.onended = () => (osc2.value = undefined);
};
const classB2 = computed(() => [demo, osc2.value && playing]);

const intervalId = ref();
const on3 = () => (intervalId.value = toggleBeeps(intervalId.value));
const classB3 = computed(() => [demo, intervalId.value && playing]);

onUnmounted(() => {
  osc1.value && toggleFirstTone(osc1.value);
  intervalId.value && toggleBeeps(intervalId.value);
});
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
</style>

# Making music in Javascript

_An elementary introduction to JavaScript audio_

<button @click="on1" :class="classB1">Play / Pause</button>

### First sound

Let's make a sound in JavaScript. Browsers implement WebAudio. WebAudio provides
two ways of making sounds:

1. The simpler way is by connecting a collection of primitive nodes that
   WebAudio provides - these are things like oscillators, barebones IIR filters
   etc.

2. The more advanced way is to use a thing called "AudioWorklet", wherein we
   write code to compute the individual samples themselves.

Let's make a sound using the first method.

```js
const ctx = new AudioContext();
ctx.resume();

const osc = new OscillatorNode(ctx);
// Reduce volume, the default is too loud!
const mix = new GainNode(ctx, { gain: 0.1 });
osc.connect(mix).connect(ctx.destination);
osc.start();
```

That is what the button above does.

### Beep

When you toggle the button above, you'd notice a glitch when the sound starts
and stops.

Our ears are more sensitive than you might consciously imagine. When we start
the sound above, it immediately starts playing, and this sudden movement is
heard as a rather ugly pop. Ditto when the sound immediately stops.

Real life sounds don't behave like that. They have an _attack_ phase, when the
sound slowly rises from nothing (say if you hit a drum with a stick). And there
is a _release_ phase where the sound slowly dies away instead of suddenly
stopping.

Let's add them to our sound. And also move it to a function.

```js
const beep = (duration) => {
  const attack = 0.001; // Attack of 1 ms
  const release = 0.1; // Release of 100 ms
  const t = ctx.currentTime;

  const osc = new OscillatorNode(ctx);
  const env = new GainNode(ctx);
  env.gain.setValueCurveAtTime([0, 1], t, attack);
  env.gain.setTargetAtTime(0, t + attack + duration, release / 5);
  const mix = new GainNode(ctx, { gain: 0.1 });
  osc.connect(env).connect(mix).connect(ctx.destination);
  osc.start();
  osc.stop(t + attack + duration + release);
};
```

<button @click="on2" :class="classB2">Beep</button>

### Beeps

Instead of clicking the button ourselves, let us ask the computer to click it
for us, 7 times every second.

<blockquote>
<small>

Why 7?

In music, a second is like an eternity. Events in music happen at the time scale
of milliseconds, and there are a _thousand_ milliseconds in a second.

However, something interesting happens at around 20 - 50 milliseconds, give or
take. You might recall that movies have 24 frames per second (i.e. 40 ms for
each frame). So if we take a still picture, and move it 24 times per second, it
starts to look animated to us.

The same happens with sound! If there is some movement of air more than around
24 times per second, we start perceiving it as sound. Less than that, we hear
them as individual musical notes.

So the number of beeps have to be less than 24 for us to hear them as individual
beeps and not as a single sound. In practice, this threshold varies depending on
the exact sound being played and a lot of other factors. 7 per second is a
conservative value that we'll always hear as events and not as a single sound.

7 is also interesting for other reasons (e.g.
[musical scales usually max out at 7 notes](https://mrmr.io/raag) even though
there are 12 available to us). This might be related to <i>The Magical Number
Seven, Plus or Minus Two</i>, but this aside is already too long and I'm now
ranting.

</small>
</blockquote>

```js
setInterval(() => {
  beep(0.01);
}, 1000 / 7);
```

<button @click="on3" :class="classB3">Beeps</button>

### Rest of the owl

Those of you in the know might've winced at my using `setInterval` above to set
the time between individual notes.

Even though we can't hear individual notes smaller than say 40 milliseconds, we
are still surprisingly sensitive to other aspects of sound at smaller
timescales. We can perceive music as being "out of beat" even if notes are off
by say 10 ms. For some aspects like the attack time, we're sensitive to
millisecond level differences.

The `setInterval` function in Javascript has too much jitter for it to be useful
for triggering musical events.

Fortunately, there is an alternative. The time kept by WebAudio itself is
precise (we used it above as `ctx.currentTime`). We can tell WebAudio to do
something at a particular time, and it'll do it exactly then.

Unfortunately, Safari spoils the party here. Safari throttles both `setInterval`
(and its better alternative, `requestAnimationFrame`) when the user switches
tabs. While WebAudio time is precise, we still need to _generate_ and schedule
the next batch of events if we're trying to play a generative piece of music,
where it is expected that the user will keep our tab running in the background
instead of staring at it.

So WebAudio's standard APIs are not helpful for playing long generative pieces
of music. For that, we'll need to use the "advanced" AudioWorklets instead which
run unthrottled in the background.

That's for a future post. But keep in mind that if you're not looking for
background music, the standard APIs might be enough.
[Here is a small synth](https://github.com/mnvr/mrmr.io/blob/main/pages/raag/synth.ts)
with a lot of source code comments explaining the aspects we covered here in
more depth.

<small>

> [!TIP]
>
> I also wrote a tutorial on
> [making sounds using Euclidean rhythms](/euclidean-rhythms).

</small>
