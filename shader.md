---
title: Minimal WebGL Shaders
date: 2024-09-08
---

# Minimal WebGL Shaders

<style module>
canvas {
    /* border: 1px solid green; */
    width: 100%;
    margin-block: 3em;
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
    gl.clearColor(0, 0.5, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, `
    void main() {
        gl_Position = vec4(0., 0., 0., 1.);
        gl_PointSize = 100.;
    }`);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, `
    void main() {
        gl_FragColor = vec4(1., 1., 1., 1.);
    }`);
    gl.compileShader(fs);

    const gp = gl.createProgram();
    gl.attachShader(gp, vs);
    gl.attachShader(gp, fs);
    gl.linkProgram(gp);
    gl.detachShader(gp, vs);
    gl.detachShader(gp, fs);
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    const log = gl.getProgramInfoLog(gp);
    if (log) console.log(log);

    gl.useProgram(gp);
    gl.drawArrays(gl.POINTS, 0, 1);
});
</script>

<canvas id="c"></canvas>

Look Ma, no libraries.

Create a canvas.

```html
<canvas id="c"></canvas>
```

By default, a canvas has a width of 300px and a height of 150px. This is itsy
bitsy, you might want to increase it a bit. For example, this page asks the
canvas HTML element to fill its container.

```css
canvas {
    width: 100%;
}
```


Setup things so that the following JavaScript code runs after your document has
loaded. For example, this page is using VitePress, so I wrote it inside an
`onMounted` lifecycle hook.

```js
<script setup>

</script>
```

