---
title: "Hide an HTML tag in Jekyll layout"
tags: [jekyll]
excerpt: "Use custom css"
---


If I want to hide something in the Jekyll then I can use custom CSS to do that. 

> If you just want to hide some elements, consider using [custom classes][custom_class] on that page, and hide those elements with [custom CSS][custom_css].
E.g.

```
layout: home
classes:
  - hide-recent-posts
```

```
.hide-recent-posts .archive__subtitle {
  display: none;
}
```

Reference : [https://github.com/mmistakes/minimal-mistakes/discussions/4835]( https://github.com/mmistakes/minimal-mistakes/discussions/4835 )

[custom_class]: https://mmistakes.github.io/minimal-mistakes/docs/layouts/#layout-based-and-user-defined-classes
[custom_css]: https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/#customizing
