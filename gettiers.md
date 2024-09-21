---
title: Gettiers
description: Redder herrings
date: 2024-08-27
---

# Gettiers

Gettiers are things that are true but not for the reasons you think they are.

Today I added a workaround that uses an "npm rebuild" step. After this, the app
stopped running with an error about a transitive dependency (_The exact issue is
not important, just see if you can follow the plot_).

I spent a lot of time thinking it was a npm/yarn difference, but the problem was
something else entirely - as part of making these changes I had noticed a
deprecation warning for node 16 in our GitHub action, and had changed it to node
20, forgetting about it. Aha, so that was the real issue!

Or so I thought. I was wrong again, the real issue turned out to be a third
thing.

You see a cow in a field. Since you see it, you are justified in believing that
there is a cow there.

But what you're seeing is not a cow, but a cutout of a cow someone has placed in
the field. So your belief, while justified, is false.

However, behind the cutout, there is, by the sliverest of chance, indeed a real
cow munching on grass. So your **justified false belief is actually true**.

Holy oversimplification.
[Here's more justice](https://jsomers.net/blog/gettiers).
