---
title: Minimal WebGL Shaders
date: 2024-09-08
---

# Minimal WebGL Shaders

<style module>
canvas {
    border: 1px solid green;
    width: 100%;
    aspect-ratio: 2/1;
    margin-block: 3em;
}
</style>

<script setup>
import { onMounted } from "vue";

const dpr = () => devicePixelRatio;

onMounted(() => {
    const canvas = document.getElementById("c");
    // console.log(devicePixelRatio);
    // canvas.width = 2 * canvas.clientWidth;
    // canvas.height = 2 * canvas.clientHeight;
    // console.log(canvas, canvas.clientWidth, canvas.clientHeight);

    const gl = canvas.getContext("webgl");
    // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    // gl.viewport(0, 0, 716, 150);
    // gl.viewport(0, 0, 360, 150);
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
canvas HTML element to fill its container, and automatically compute the
corresponding height to maintain a 2:1 aspect ratio (that is, be twice as wide
as it is high).

```css
canvas {
    width: 100%;
    aspect-ratio: 2/1;
}
```

Setup things so that the following JavaScript code runs after your document has
loaded. For example, this page is using VitePress, so I wrote it inside an
`onMounted` lifecycle hook.

<!-- prettier-ignore -->
```js
<script setup>
import { onMounted } from "vue";

onMounted(() => {
    // Rest of the code will go here...
})
</script>
```

Get hold of the canvas, and ask for it for its DOM width and height. The canvas
is still living in delusion that its width and height are at their default value
(300, 150), so we also need to tell the canvas, hey buddy, wake up, this is the
space you're occupying on the page (DOM).

But that's not all. If you're viewing the page on a high density display, your
screen will be showing multiple pixels for each CSS pixel. For example, I'm
currently on a device that has a `devicePixelRatio` of 2.

> [!TIP]
>
> Your current device has a devicePixelRatio of **<ClientOnly><span>{{ dpr()
> }}</span></ClientOnly>**.

If we were to just set the the canvas's dimensions to its corresponding CSS
dimensions, our sketch will look blurry. We instead need to set the canvas'
drawing surface size to the number of device pixels per dimension.

```js
const canvas = document.getElementById("c");
canvas.width = canvas.clientWidth * devicePixelRatio;
canvas.height = canvas.clientHeight * devicePixelRatio;
```
