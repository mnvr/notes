---
title: Minimal WebGL shaders
description: An example GLSL shader demonstrating the surrounding ceremony
date: 2024-09-08
---

# Minimal WebGL shaders

<style module>
canvas {
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
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;

    const gl = canvas.getContext("webgl");
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

    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    gl.detachShader(p, vs);
    gl.detachShader(p, fs);
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    const log = gl.getProgramInfoLog(p);
    if (log) console.error(log);

    gl.useProgram(p);
    gl.drawArrays(gl.POINTS, 0, 1);

    gl.useProgram(null);
    gl.deleteProgram(p);
});
</script>

<canvas id="c"></canvas>

Look Ma, no libraries.

Create a canvas.

```html
<canvas id="c"></canvas>
```

By default, a canvas has a width of 300px and a height of 150px. That is itsy
bitsy, you might want to increase it a bit.

For example, this page asks the canvas HTML element to fill its container, and
also automatically compute the corresponding height so as to maintain a 2:1
aspect ratio (that is, be twice as wide as it is high).

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

So far, we've not done anything WebGL specific.

Now let's get hands our on the WebGL context, and paint it blue-ish.

```js
const gl = canvas.getContext("webgl");
gl.clearColor(0, 0.5, 1, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
```

Now onto the shaders. We need two, a vertex shader, which defines the area we're
going to draw in, and a fragment shader, which defines the color each pixel in
this area will have.

For now, let's create shaders that draw a point, and color it white.

<!-- prettier-ignore -->
```js
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
```

And tell the WebGL context of our canvas to use them.

<!-- prettier-ignore -->
```js
const p = gl.createProgram();
gl.attachShader(p, vs);
gl.attachShader(p, fs);
gl.linkProgram(p);
gl.detachShader(p, vs);
gl.detachShader(p, fs);
gl.deleteShader(vs);
gl.deleteShader(fs);
```

Even though this is a minimal example, the compilation still might've failed
because of a typo, so to save ourselves head scratching, give WebGL a chance to
speak.

```js
const log = gl.getProgramInfoLog(p);
if (log) console.error(log);
```

> [!TIP]
>
> A common oopsie is to omit the dots when specifying numbers in GLSL. GLSL is
> not JavaScript, and those dots are mandatory – for GLSL `1` and `1.0` (or its
> shorthand, `1.`) mean different things.

Everything's in place, let us ask GLSL to draw.

```js
gl.useProgram(p);
gl.drawArrays(gl.POINTS, 0, 1);
```

Since we are not animating, we won't need our program subsequently, so we can
also clean it up.

```js
gl.useProgram(null);
gl.deleteProgram(p);
```

That's it. That's our lovely white dot on a blue ocean of nothingness.
