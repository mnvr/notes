---
title: Updating your package.json
description: npx npm-check-updates --interactive
date: 2024-08-02
---

# npm-check-updates

```sh
npx npm-check-updates --interactive
```

`npx npm-check-updates` is the missing tool no one tells you about.

Updates your package.json, not just your lock files. Use `--target semver`
(conservative), `--target latest` (default) or `--target greatest` (daring today
are we).

Works with yarn/npm and everything else (it doesn't really care about the
package manager).

If you want to update just a specific package, just say!

```sh
npx npm-check-updates --interactive vitepress
```
