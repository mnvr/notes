---
title: Write code for the web
description: Apple doesn't need developers
date: 2024-02-04
---

This is a yarn of three threads, and it got a bit long. The tldr is

1. Apple doesn’t care for me as a developer

2. I should write code for the web

3. Nothing is set in stone, really

The story is personal, but I hope readers find something they can relate to in
their own life stream (I guess that's the point of blogs)

## Apple doesn't care for you, Mr. Developer

Apple cares for me as a customer, but it doesn’t care for me as a developer.
This dynamic had been subconsciously griefing me for years, until I was able to
formulate it consciously recently.

The dependency goes _Developer -> Apple_ and _Apple -> Consumer_, there is no
reverse arrow from Apple to the developers.

If all developers stopped building for Apple's platforms tomorrow, Apple will
still survive, almost intact, since it doesn’t hurt their core value prop (I'll
expand on this below). Apple has no dependency on individual developers. They
care for and need to collaborate with corporate dev “partners”, but that's
different.

Since companies, especially ginormous multinationals, behave in purely game
theoretic cost/benefit terms, and since Apple has no reason to care about
developers: indeed it doesn’t.

> Just to restate the obvious - such a stance isn't necessarily the case. There
> are other multinationals who've figured that developers form a core part of
> their strategy.

This realisation has made me happier since I now know my place. I can like their
products without wanting to develop for them.

---

Google has a bug. I have dynamic light/dark mode, and if I search on Google at
night, the first page shows up in light mode. With the rest of my machine in a
subdued state, the glaring white of the background hurts my eyes.

In the morning, my laptop automatically switches back to light mode. Now when I
search on Google, the results first show up in an unreadable black background.

One would think that of all the leetcode certified staff, there must be someone
there who would know an O(n) algorithm for fixing this bug. But no, this bug has
persisted for years (I've counted), and it is unlikely to be fixed in the future
unless it gets accidentally fixed as part of some overhaul.

Apologies for the snide, I know some great people who work there. My point is
that Google isn't fixing this bug not because it doesn’t know how to, but
because it doesn’t care. This bug has zero impact on its bottom line.

The people like me who use alternate search engines like DDG have already moved
on years ago. The rest of the (overwhelming) majority is stuck with Google. No
matter how bad their search is - UX or results - they have a captive audience.

> I think DDG etc also have a marketing blind spot - they keep pitching
> themselves as a more privacy friendly alternative, they never go after the
> main course. I don’t use DDG because of its privacy benefits, I use it because
> it reminds me of early Google - simple low clutter UX, good quality verbatim
> search results, and unobtrusive ads.

Okay Manav, but I thought you were ranting about Apple, why bring in Google?

Google is an example where I never grieved much because I understood the
dynamics. I know that I, the customer, am not their game theoretic target. So
when I have to invariably use their products and face another user hostile
interaction, I try to shrug it off and move on. I know that Google has entered a
rent seeking phase, and while it is sad that the world is giving all its video
content up to it for even more of a hostage situation in the future, but that’s
for governments to deal with.

With Apple I didn’t understand the dynamics.

---

2009-ish. I struggled to find a computer for my mom. Windows (at that time, I
don't know about now) was just too insecure. Linux required constant tech
support. Eventually I prepared for her an OpenBSD machine running Firefox and a
basic game (Bubbles I think).

Obviously, this was not ideal. It fulfilled some goals - it worked without
requiring any tech support when I wasn't around, and I was ensuring her data
safety and privacy - and she was surprisingly happy with too, but I was not
happy about how this was such a shrivelled parody of what things could be, and
how it limited the ways she could use computers to enrich her life.

Around this time, I joined a new job as a developer for a company that was
making iOS apps. After a week or so of using the mac at work it hit me - _this
is the computer I wanted for my mom!_

That is Apple’s value prop.

As soon as I had saved enough I bought her a MacBook. And heartfeltly thanked
Steve Jobs for engendering it.

The earth has done many a revolutions since then, and Jobs has left earth, and
the form factor my mother uses has changed from a laptop to an iPad. But it
still satisfies that core value prop.

Let's consider a different context. Even if there were no apps in my phone, I
would still buy an iPhone. For myself likely, but most certainly for her.

The people running Apple know all this. In the deep dungeons of Menlo Park when
there are meetings of the core council, after all the sacrificial lambs have
been slain and the blood and gore washed away, out comes the elder spreadsheet
that encodes Apple’s business model, but nowhere in them is any cell, input or
output, which involves developers. Sure, Apple doesn't mind if developers are
also happy. But it knows it doesn’t need to care if they are.

This lack of caring is never expressed out loud. It isn’t some conspiracy, it
just is one of those things - you wouldn’t walk up to someone who you don’t care
about and tell them you don’t care.

Unfortunately all this results in sometimes schizophrenic behaviour on Apple’s
part, as there are many individuals working at Apple who _do care_ about
developers and are trying to make things better.

---

2016-ish. As part of my annual Apple simping I was watching WWDC when they
announced Apple Music APIs.

I was ecstatic. My coworkers were puzzled at my ecstasy, “All this, can’t we
already do with Spotify’s API?”. I didn’t know how to answer that, so I just
repeated how _this changes everything_.

Of course, and as is usual, I was wrong. It didn’t change everything. In fact,
it didn’t change _anything_.

Apple’s own music player was, and still is, unusably bad. Even talking about it
makes me angry. The people making it can’t be so incompetent, and it seems to be
working for the rest of the world, so I've never known what to make of this
situation.

With the APIs out, I'd thought maybe things will change. But nothing happened.
Apple’s own player continues to make my blood pressure high anytime I have to
use it. And whatever alternative players I have tried just all seem to go for
the same generic “Spotify” approach to music.

> I think it is because the people who're making these apps were never around in
> the Justin Frankel era of Winamp, and haven't seen how a music player can
> provide a fast, seamless, endless _yet_ still personal approach to music.
>
> That era is not coming back because it relied on piracy, but luckily we don't
> need to anymore - that's the great thing about Apple's music catalog! We can
> recreate that experience without needing to sail the high seas.

So that's the backstory. Now recently I had a bunch of free time, and thought
that I’ll write a music player. Mostly for myself, but I also wanted to write a
tutorial. This is what I wrote in the README in the first commit:

> Here I'll be writing down my notes as I build Flowers. The world needs not one
> music player, or two, but many: each of us has our own way of connecting with
> music, and so maybe these notes will help others build the flower they want,
> nay need.

Cute, dumb, and in vain.

As I went about it, I realized that 8 years down the line, not only is the API
still buggy, it is also still not public!

Firstly you need to pay Apple. No, not for bulk usage etc, but _just to try out
the API_. So there there goes my dream of writing a walkthrough – nobody’s going
to pay Apple 100 bucks just to try things out. And it also partially explains
why there has been no innovation.

But that's not even it - Even if you pay them, you get a restricted API.

The point where I disgustedly gave up was when I found out that while I was
jumping all these kafkaesque hoops, instead you could just go to Apple's own web
music player, type `MusicKit.getInstance().developerToken` in your browser
console, and you’ll get an unrestricted root token for free!
<a href="https://developer.apple.com/forums/thread/702228" target="_blank" rel="noopener">†</a>

---

<br>

All these anecdotes Manav, what does all this mean?

## Write code for the web

Write code that runs on the web. We’re lucky to have a shared platform that no
single entity owns. Even benevolence can be ruined by incompetence.

The web platform is in a precarious place – overreaching governments, browser
duopolies, a complex developer ecosystem – so it is not a given it’ll remain
thriving. But so far it has survived. And every year longer it survives, the
more the chances that it’ll continue to thrive in the future.

Ironically Google is the good guy here, they’re doing great work for the web. On
the other hand, literally every single workaround I’ve had to write in the
recent past in web related code has been due to Safari's princessness.

## Nothing is set in stone

Which brings me to the third thread of this story, how all this made me
reevalute my relationship with companies.

Someone I know, someone who has a better grip on living than me, told me once
that it's not useful to put people into the buckets of good and bad. People are
a mix. Bad folks can do good actions sometimes, and vice versa.

I don't know to what extent I've been able to internalize their message, but
that's for another day. What I realized is that the same applies to companies.

Companies are like people. I don't know if they're sentient, but otherwise they
share many attributes with us: they're intelligent (they were the AI before AI),
have personalities, they are born, thrive, live and die, they're even legal
persons.

Just like we can't live without other people, we can't live without companies.
They have many inhumane characteristics, but like them or not, such fractal
conceptions of human organizations will always be around.

By not permanently bucketing companies into good or bad, I can have a more fluid
interaction with them - I can reduce my dependence on them when they try to put
me in a zero sum game, or reengage more with them if they're willing to be more
symbiotic. Nothing is set in stone, really.

---

> I think most large companies and medium-size companies, and even small
> companies, are starting to look at the web as the ultimate direct-to-customer
> distribution chain, bypassing all middlemen, going directly from the supplier
> to the consumer.
>
> &nbsp;&nbsp;&nbsp;&nbsp;<small> ⸻ Steve Jobs, Make Something Wonderful</small>
