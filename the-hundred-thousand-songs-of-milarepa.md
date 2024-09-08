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

    if (!gl.getProgramParameter(p, gl.LINK_STATUS))
        console.error(gl.getProgramInfoLog(p));

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
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0., 1.);
    }`);

    const fs = makeShader(gl, gl.FRAGMENT_SHADER, `
    precision highp float;
    uniform vec2 size;
    uniform float t;
    void main() {
        gl_FragColor = vec4(gl_FragCoord.xy / size, sin(t * 7.), 1.);
    }`);

    const p = makeProgram(gl, vs, fs);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(p);

    // These are clip space coordinates. (-1, -1) is bottom left, (1, 1) is the
    // top right. We draw 2 triangles (top left half, then bottom right half) to
    // cover the entire square.

        // console.log(loc);
        let then = 0;
    const draw = (now) => {
            gl.clearColor(0, 0, 0, 1);
            gl.clearDepth(1);
             gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.clear(gl.COLOR_BUFFER_BIT);

        const verts = [-1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
        gl.uniform2f(gl.getUniformLocation(p, "size"), canvas.width, canvas.height);
        const loc = gl.getUniformLocation(p, "t");

// const z = Date.now() / 1e3;
        console.log(now);
    gl.uniform1f(loc, now * 0.001);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(draw);
    }
    draw();

    // gl.useProgram(null);
    // gl.deleteProgram(p);
});
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
