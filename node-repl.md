---
title: Using node as a REPL
description: Without polluting history
date: 2024-08-30
---

# Node REPL

Using node as a REPL

```js
eval(require("fs").readFileSync("foo.js", "utf-8"))
```

Unlike `.load`, this doesn't add history entries.
