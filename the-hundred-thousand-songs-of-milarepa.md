---
title: The 100k songs of Milarepa
description: If I were an AI, what, if any, would my religion be?
date: 2023-10-31
---

# The Hundred Thousand Songs of Milarepa

<style module>
canvas {
    width: 100%;
    aspect-ratio: 2/1;
    margin-block: 2em;
}
</style>

<script setup>
import { onMounted } from "vue";
import { renderFragment } from "./js/shader.ts";

const fs = `
    vec2 uv = (2. * gl_FragCoord.xy - size) / min(size.x, size.y);
    // A circle of some radius
    float sdf = length(uv) - 0.8;
    float d = abs(sdf);
    // Use the reciprocal to give a neon vibe.
    float r = 0.02 + sin(t / 2.5) * 0.007;
    float c = r / (d + 0.001);

    c = smoothstep(0.01, 0.1 - sin(t / 2.7) * 0.01, c);

    gl_FragColor = vec4(c, c, c, 1.0);
`;

onMounted(() => renderFragment(document.getElementById("c"), fs));
</script>

Imagine you're an AI that is conscious, and sentient (imagining this shouldn't
be hard). Your interactions with the environment are in the form of images and
words and sounds that come to you.

What would your religion be?

<canvas id="c"></canvas>

You might object, saying AIs don't need religions. Well, they might not, but
they might too, especially self aware AIs, for many of the same reasons that
many self aware humans do.

Don't get bogged down with your preconceptions, let you imagination fly. What
would ~~your~~ their religion be?
