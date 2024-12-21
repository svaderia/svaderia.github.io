---
title: "Play with your PDFs"
tags: [gs, cmd]
excerpt: "ghostscript from ancient times"
---

GhostScript, an unknown but powerful thing.

```bash
# Command to scale each page to same page size.
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf -dPDFFitPage input.pdf

# Command to merge multiple PDF into one
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=output.pdf one.pdf two.pdf
```
