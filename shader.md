---
title: Softmax
date: 2024-08-29
---

# Shader Test

-   This is a test
-   And another one

<style module>
canvas {
    border: 1px solid green;
    width: 100%;
}
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const canvas = document.getElementById("c");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log(canvas, canvas.clientWidth, canvas.clientHeight);

    const gl = canvas.getContext("webgl");
    // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);


})
</script>

<canvas id="c">
</canvas>
