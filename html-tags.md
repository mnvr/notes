---
title: HTML tags and trailing slashes
date: 2024-09-29
---

# HTML tags and trailing slashes

XML's foray into HTML, XHTML, has long ended but left a confusing detritus of
trailing slashes and their legality behind. The smog of JSX compounds
visibility. But behind the rubble and the haze, the situation is clear.

HTML has only two† kinds of elements††:

1. Normal elements. These must have a closing tag, even if they have no child
   content.

   ```html
   <div></div>
   <button></button>
   ```

2. Void elements. This do not have a closing tag.

   <!-- prettier-ignore-->
   ```html
   <img>
   <br>
   ```

> <small>
>
> † to first approximation. The
> [spec](https://html.spec.whatwg.org/multipage/syntax.html#void-elements)
> lists 6.<br> †† _elements_ are the things themselves, while _tags_ delimit
> their start and end.
>
> </small>

The self closing shortcut for elements without child content, e.g. `<div />` is
not valid even if it may work.

Void elements do not have any content, thus don't need to be closed.

_tldr_

**If you're writing HTML, close your tags, even if there is no content, unless
it is a void element.**

These are the void elements

```
area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr
```
