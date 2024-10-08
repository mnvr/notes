---
title: Cherry pick a pull request
description:
  How to create another pull request from an already merged one, but this time
  on a different branch
date: 2024-02-08
---

# Cherry pick a pull request

I don't know if this is the best way to do this, but here goes. Suppose we have
a pull request that has already been merged into `main`, and now we want to open
another pull request with the same set of commits, but this time we want to open
it against the `release` branch.

1. Find the sha of the merge commit.

2. Switch to `release`, and create a new branch.

   ```sh
   git checkout release
   git checkout -b backport-foo
   ```

3. Cherry pick using `-m 1`. Note that this'll create a single commit that
   references the merge, this'll not cherry pick the individual commits. This
   might not be what you want, but that was enough for my current purpose.

   ```sh
   git cherry-pick -m 1 <merge-commit-id>
   ```

4. Open a pull request against release. You can do it from the GitHub's web UI,
   or via their CLI.

   ```sh
   git push -u origin HEAD
   gh pr create --base release --fill --web
   ```
