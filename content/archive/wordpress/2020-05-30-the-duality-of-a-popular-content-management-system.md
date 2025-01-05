---
title: The Duality of a Popular Content Management System
date: 2020-05-30
---

* * *

I have been critical of Wordpress for as long as I can remember for being a bloated bucket of glue. Having never tried it, having heard nightmarish experiences through a _[friend](https://git.kayg.org/DarthVedaaa)_'s internship stories, having seen every other person in my workplace of the past two summers obsess over slow and ugly looking pages, and the general consensus; all of it had left a bad taste in my mouth.

I had already ruled it out when I thought of making my [_first landing page_](https://git.kayg.org/kayg/landing-page-old.git) a year ago. It didn't look remotely appealing until [_a pal of mine_](https://sasach.work/) starting using Wordpress to _[blog about his experiences](https://blog.sasach.work/)_ back in December. I thought to myself, "_Oh boy, that sure does look easy._"

* * *

## Hugo

I was not ready to let go yet. After all, the command line is the only true way of doing everything and why should blogging be any different? A few months of procrastination go by. I settled on _[Hugo's notepadium](https://themes.gohugo.io/hugo-notepadium/)_ but I never really made an effort to write anything on it. It loaded blazing fast, was astonshingly small at around 7 KiB after compression and was proxied through a CDN as the icing on the cake. It was everything I could wish for.

I had it up at this URL for a few months but it was a blank page. I tried to write but it just didn't _feel_ right. It didn't feel that my writing workflow would be portable. I would have had to open Emacs everytime I wanted to write something. While there was nothing wrong in that per-se, the idea of having to have a computer around everytime I wanted to write something did not sit well with me. I wanted something more accessible.

Other than accessibility, I imagined things like optimization (if I used something more featureful like _[Zzo](https://themes.gohugo.io//theme/hugo-theme-zzo/)_), SEO and CDN integration would have to be manual. If I had to do a set of chores after writing, my already unkeen writing spirit would be spent in anticipation and consequent reluctance.

## Ghost

An easier thing to do for my lazy self then was to touch up my _[film blog](https://film.kayg.org/)_ which already had content from 3 years ago when I began writing on Medium. At least my blog wouldn't look empty, right?

I deployed _[Ghost](https://ghost.org/)_ and the first thing I feel is the absence of native searching. I had to get an API key from Ghost's website to look up words on my own blog, within the content that I had written. That was ridiculous! Not only did it go against my idea of not having any third-party dependencies, I did not want my relatively-static blog to be phoning home for something so abundant and simple.

Sidenote: Upon checking, the ghost panel seems to still [_make a request_](https://www.kayg.org/wp-content/uploads/2020/05/ghost-telemetry.png) to _ghost.org_ though I'm not sure what for.

I eventually let it go as I'm often told that I obsess over the small things in life. It was not long before I started to feel an absence of something else... comments! Ghost's themes depended on Disqus for comments which was a proprietary service with a _[privacy](https://help.disqus.com/en/articles/1717103-disqus-privacy-policy) [policy](https://help.disqus.com/en/articles/1717103-disqus-privacy-policy)_ that did not instill a lot of faith.

Another sidenote: If you want an example of a solid and transparent privacy policy page, check out _[Nixnet](https://nixnet.services/privacy/)_. I do realize it's ironic that I do not have a privacy policy page myself. It's... in the drafts.

Comments, though, were something that could be done with ease. I checked out _[Hugo's](https://gohugo.io/content-management/comments/) [](https://gohugo.io/content-management/comments/)[page](https://gohugo.io/content-management/comments/)_ for alternative solutions and _[remark42](https://github.com/umputun/remark42)_ seemed like the easiest thing to get started with. I actually had it running for a few days. It was great for what it intended to do: a simple, no-bullshit way of handling comments. However, it did not _feel_ right. There was no portable way to moderate. There was no global panel to look at all the comments. What I wanted was a bit more centralized, something that was a bit more integrated to the blog itself. I had a few layout problems making it work with Ghost but it was mostly fine. I took it down before getting the first comment.

## Wordpress

I had given up. I had to take a peek on the other side. I had to know why Wordpress was so popular, why every other site I opened responded to the _/wp-admin_ URI. Even if I promised myself that I would never commit to such a terrible platform, I just had to know.

It was late March, 2020 when I deployed an instance for my film blog. The next few days were spent hunting for themes, and boy, does Wordpress have themes! Anything from minmal to premium to terrible to single-page to commerce to educational, they had it all. I stared at my computer for two days in search for a perfect theme, in search for the perfect layout that I had been constructing. Within those few days, though unaware I had already given in. I was looking for something like this all along but I did not want to accept it. The hype was, indeed, real.

Although I did not find anything suitable for my film blog (and I doubt if something like that even exists), I took a few pointers away from the experience. I learnt that there's no silver bullet. I learnt that a lot of customization one can have in Wordpress' themes was not without paying the premium or diving into code themselves. A reluctance of the latter pushed me to a further realization: _TwentyTwenty_ kicked ass. Over the month of April, I realized that the default theme was insanely customizable and all I had to do was look.

* * *

It's finally May. Almost a year from when I got my first landing page up, a lot of things have happened in my life and a lot has changed (including my [_landing page_](https://git.kayg.org/kayg/landing-page.git)). I no longer have the same set of friends. I don't take emotions as seriously as I used to. I don't impose my thoughts on other people anymore. And through all of this, there's something that I used to ignore, even discard; something that I have heard in passing several times:

> "_You can spend 100 hours setting something up or you can spend the same time being productive._"
> 
> Reddit Wisdom

And sometimes, being productive feels good.

* * *
