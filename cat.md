---
title: Useful use of cat
description:
    Against the thoughtless perpetration of the "useless use of cat" meme
date: 2024-02-18
---

# Useful use of cat

There is a meme that has unfortunately spread amongst folks online. That one
should not begin shell pipelines with a `cat`.

This is at best subjective, and at worst actively harmful.

Shell pipelines are not things of static beauty, they are interactive renditions
of a conversation with the unix shell to ask it to glue together small tools to
the get the at the bespoke outcomes we want.

Beginning a shell pipe with a `cat` provides us maximal flexibility during the
exploratory phase. Here is a common pattern I follow:

```sh
cat some-huge-file | head | ...
```

I can fill in the `...` part through trial and error, without running it on the
entire input. Almost like test driven development, if one squints at it that
way. When the rest of the command feels complete, I can <kbd>Ctrl - P</kbd>
(prev command), <kbd>Ctrl - A</kbd> (beginning of line), <kbd>Alt/Opt - F</kbd>
twice (to skip over the cat) and <kbd>Alt/Opt - D</kbd> twice (to splice out the
head from the pipeline).

The exact key combinations are not important, and it is perhaps confusing to
bring them into the discussion. But I wanted to show how I think of the shell
pipe concretely - as a series of steps, with the first step being an input and
the last step being an output - and in such a formulation, placing the `head`
after the `cat` comes totally naturally.

This would not be the case if someone was discouraged from using `cat` for the
input, instead linking it to the first processing step in the pipeline. The
outcome will be the same, the difference would be conceptual.

Even in the example I gave, the `cat | head` is redundant, and is edging towards
being a matter of personal preference. A better formulation, which both retains
the conceptual pipeline metaphor and avoids the `cat` would then be

```sh
head some-huge-file | ...
```

which later on, once the pipe has been constructed, can be modified to

```sh
cat some-huge-file | ...
```

leaving the rest unchanged. If someone were to do it this way, it seems better
on all fronts, and indeed I think it is fine really.

Why don't I do it that way (head instead of cat)? Because it would be the best
as a local maxima.

For some commands, it would indeed be the best. But I don't always construct
commands using `cat | head`. Sometimes I subconsciously know how things are
going to go, by virtue of having done similar things previously, and while I
might not necessarily construct the correct shell pipe incantation in the first
go, I might too, and usually if there is any mistake it'll take me one or two
minor tweaks to get it right.

In such cases, my hands don't bother with the `head`. So always beginning the
pipeline with a `cat` is a global maxima. I don't need to put conscious thought
into shell pipeline is going to be complicated, which not, and if I can easily
transition between the two modes.

---

Taking a step back, it doesn't necessarily matter one way or the other. **I
don't have a problem with people choosing not to use `cat`**. I can see how
people can conceptualize differently from me, and that is fine, diversity is
good. For trivial commands, I myself omit cat. What **I have a problem with is
people insisting that one should not use `cat`**.

I think both ways are fine, and if you're trying to gang up on people to give
them the "useless use of cat award", you're misguided at best. There are some
nasty people who won't be budged by an inch by all that I wrote above, instead
will use this as troll fodder. But this note wasn't for such people. This note
is for the misguided newcomers. Don't blindly follow, use your own mind.
