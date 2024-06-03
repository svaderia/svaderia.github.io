---
title: "Staticman : A static comment provider"
tags: [jamstack]
excerpt: "The project works, but it is unmaintained :("
snippet: true
---

Long time ago, when I first created this website I was researching how to add comments in the blogs. 
Though I don't think comments are required for what I write on this website, I am no professional writer.  

I came across [ staticman ](https://github.com/eduardoboucas/staticman). It's a very cool project which aims to 
maintain your dynamic contents, like comments, in a git repository. 

Basically you any new comments on the website becomes a new file in your git repository and gets committed. 
The build and deploy pipline for the GitHub pages will kick off. 
So now your site will be rebuilt and deployed with the comments. 


It's not instantaneous like other dynamic services, but what more can you hope to achieve on a static website. Pretty cool right?


### References if you ever want to dig this hole again
* [zanechua/comment-worker](https://github.com/zanechua/comment-worker)
* [Is Staticman actively maintained? · eduardoboucas/staticman · Discussion #464](https://github.com/eduardoboucas/staticman/discussions/464)
* [Heroku shutting down their free tier · Issue #451 · eduardoboucas/staticman](https://github.com/eduardoboucas/staticman/issues/451)
* [Rubonnek/staticman-gcloud: Staticman as a Google Cloud Function](https://github.com/Rubonnek/staticman-gcloud)
* [Staticman: Overview](https://staticman.net/docs/)
* [Static Comments with Serverless and Staticman - Part 1 : jpatters.com](https://www.jpatters.com/2020/12/static-comments-with-serverless-staticman-1/)
* [Staticman at Heroku - Spinning Numbers](https://spinningnumbers.org/a/staticman-heroku.html)
* [Improving Staticman comments on a Jekyll site - Made Mistakes](https://mademistakes.com/mastering-jekyll/static-comments-improved/)
* [Adding comments to a Jekyll site with Staticman - Made Mistakes](https://mademistakes.com/mastering-jekyll/static-comments/)
