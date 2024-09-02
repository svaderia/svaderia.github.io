---
title: "Converting the markdown file to pdf"
tags: [md, pandoc]
excerpt: "pandoc is crazy good"
---

```bash
pandoc README.md \
    -f gfm \
    -V linkcolor:blue \
    -V geometry:a4paper \
    -V geometry:margin=1in \
    -o README.pdf
```

## Reference
* [Customizing pandoc to generate beautiful pdf and epub from markdown](https://learnbyexample.github.io/customizing-pandoc/) 
* [Writing a Book with Pandoc, Make, and Vim — Vladimir Keleshev](https://keleshev.com/my-book-writing-setup/) 

