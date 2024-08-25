---
title: Vite
description: Notes about vite, the JS build tool
date: 2024-08-23
---

# Vite

## Replacement of Python's SimpleHTTPServer {#local-server}

vite can be used as a quick (and better!) replacement for
`python -m http.server 5173`.

```sh
npx vite dev
```

in any folder, and get a hot reloading http server that serves the HTML in that
directory.
