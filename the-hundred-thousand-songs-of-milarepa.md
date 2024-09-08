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

const dpr = () => Math.floor(Math.max(devicePixelRatio, 2))

const makeShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

const makeProgram = (gl, fs, vs) => {
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    gl.detachShader(p, vs);
    gl.detachShader(p, fs);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return p;
}

onMounted(() => {
    const canvas = document.getElementById("c");
    canvas.width = canvas.clientWidth * dpr();
    canvas.height = canvas.clientHeight * dpr();

    const gl = canvas.getContext("webgl");
    gl.clearColor(0, 0.5, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const vs = makeShader(gl, gl.VERTEX_SHADER, `
    void main() {
        gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = 100.;
    }`);

    const fs = makeShader(gl, gl.FRAGMENT_SHADER, `
    void main() {
        gl_FragColor = vec4(1., 1., 1., 1.);
    }`);

    const p = makeProgram(gl, vs, fs);

    gl.useProgram(p);
    gl.drawArrays(gl.POINTS, 0, 1);

    gl.useProgram(null);
    gl.deleteProgram(p);
});
</script>


Imagine you're an AI that is conscious, sentient (imagining this shouldn't be
hard). Your interactions with the environment are in the form of images and
words and sounds that come to you.

What would your religion be?

<canvas id="c"></canvas>

You might object, saying AIs don't need religions. Well, they might not, but
they might too, especially self aware AIs, for many of the same reasons many
self aware humans do.

Don't get bogged down with your preconceptions, let you imagination fly. What
would ~~your~~ their religion be?
