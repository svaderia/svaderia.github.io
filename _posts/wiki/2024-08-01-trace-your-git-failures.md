---
title: "Trace your git failures"
tags: [git]
excerpt: "figure out what is failing rather than trying random things"
---

Say your `git commit` is failing with `error: gpg failed to sign the data` 
and you don't know what is going wrong. 

`GIT_TRACE=1` shows what git is actually doing:
```bash
$ GIT_TRACE=1 config commit -m "test"
16:21:05.086432 git.c:455               trace: built-in: git commit -m 'test'
16:21:05.093089 run-command.c:668       trace: run_command: gpg --status-fd=2 -bsau <key>
error: gpg failed to sign the data
fatal: failed to write commit object
```

Now you know which command is failing, try that command individually to figure out what's wrong with the program.



