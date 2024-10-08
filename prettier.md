---
title: Prettier
description: Why is Prettier rock solid?
date: 2024-01-18
---

### Why is Prettier rock solid?

I've always wondered why Prettier is so good.

The idea was mainstreamed by `gofmt`, but `gofmt` doesn't indent, which is the
hard part.

Not only does prettier solve this harder problem, but it is also **solid**. It
has never broken my JS / TS code. I always wondered how it was so high quality.

Today, I got the answer. This is Prettier's original author writing
[about it](https://archive.jlongster.com/How-I-Became-Better-Programmer):

> Prettier is a perfect example of this. I knew what I wanted but I had no idea
> how to implement it. After a little research I found _this paper_ and after a
> few days I knew exactly what I needed to do. I had something basic working in
> a week. If I ignored previous research it would have taken a lot longer.

You know which paper it links to?

[A prettier printer, by Philip Wadler](http://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf)!

_"Joyce Kilmer and most computer scientists agree: there is no poem as lovely as
a tree."_

Haskellers would recognize both the paper, and the author. Of course, this is
not to take away from the authors of Prettier and the years of work that has
subsequently gone into it, I'm just about how Haskell continues to enrich my
life even when I'm not using it.
