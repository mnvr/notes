---
title: The v3 curse
description: Breaking changes in software – Too much, too late, too soon
date: 2024-09-13
---

# The v3 curse

_Too much, too late, too soon_

I once discovered that v3 is where projects go to die. Winamp (for me) died in
the v2 to v3 transition, so did Python.

I didn't find a 3rd example, but I thought maybe that was a good omen,
cautiously eyeing the number 3.

That discovery was both incorrect and correct. Python did not die. It caused
pain and suffering to all involved over a totally avoidable breaking change, but
it survived. Vue did the jump from v2 to v3 successfully. And I never found a
third example.

But it is also correct. It is not number 3 that has any significance. But there
is a curse indeed, the curse of too much, too late, too soon.

---

Like all coins, there are two sides to this one too.

1. Most mutations kill an organism. Revolutions rarely succeed, and are painful
   to all involved.

2. Sometimes the pain is necessary. And evolution doesn't work without death.

So there is no one right or wrong answer. Depending on the circumstance,
sometimes breaking changes are necessary, sometimes they are not.

But it is not just the judgement call (or the lack of it) which is important.

Of equal effectiveness in quelling the curse is the pathway from the old town to
the new. Is the new town too far away (_too much_)? Is the old town already too
big (_too late_)? Is the migration gradual or involved (_too soon_)?

---

I came across an interesting stat today (that is indeed what precipitated
writing this rant). These are the package managers seen by npm, the JavaScript
package registry
([source](https://github.com/nodejs/node/issues/50963#issuecomment-1885881236)):

- 64% npm (all versions)
- 25% yarn v1
- 9% pnpm (all versions)

Yarn 1 (aka yarn classic), accounting for 25% of all traffic, is unmaintained.
The team has been working on a newer, backwards incompatible, yarn for years. Go
to their website, and you'll have to poke around to even find instructions how
to install yarn classic. Yet it still accounts for almost _all_ the traffic that
comes via yarn!

Gazing at those numbers, it seems yarn is another victim of the v3 curse.

Someone trying to transition their existing codebase from yarn classic to yarn
not-classic is bound to wonder - if I'm spending the effort to migrate, do I
even need yarn anymore? In the years that the yarn migration has dragged on, npm
has caught up, and there are new players in town.

I like yarn. I remember the breath of fresh air it felt back them, and I still
use it. But I've realized that it is infrequent to have projects where the
choice of the package manager is a functional issue, and using anything that is
not npm comes with a tradeoff of asking each person using the project to install
another dependency.

This is going to be even more onerous now given that, ironically, a
[PR](https://socket.dev/blog/node-js-takes-steps-towards-removing-corepack) to
enable corepack by default is going to lead to the removal of corepack
altogether.

I don't have a conclusion here. These are just thoughts that occurred to me
seeing the corepack saga unfold. I don't think npm is going to be the end all.
There will be new runtimes, new package managers. But I do I wonder if yarn has
done the puts-stick-in-bicycle meme to themselves.
