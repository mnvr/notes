---
title: git diff branch
date: 2024-09-14
---

Suppose we want to see the diff of what has changed in a particular branch.
`git diff branch` will usually not do what we want - it will display us the diff
between the current code and the code in `branch`, while we often just are
interested in the "changes" that were made in that branch.

The correct invocation is

```sh
git diff $(git merge-base branch HEAD) branch
```

Which shows the diff between the point where the branch branched off, and the
branch.

Since this common, there is a shorthand, the triple dot.

```sh
git diff HEAD...branch
```

where the `HEAD` can be omitted as it is the default

```sh
git diff ...branch
```
