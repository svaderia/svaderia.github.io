---
title: "Perf to the rescue"
tags: [cmd, linux, perf]
excerpt: "Oh boy! perf knows your internals"
snippet: true
---


Perf is way more better than guessing. 

install perf by googling, works on linux machines (linux is anyways better)

```bash
perf record -p <PID> --call-graph dwarf -- sleep 15

perf report -i perf_custom.data
```

Inside the report press ?

Have fun!

