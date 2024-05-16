---
title: "How to fold all C comments in Vim"
tags: [vim]
excerpt: "Map a hacky global command to `<leader>z`"
toc: false
classes: wide
---

In vim, you can use global command to apply actions across lines matching the given pattern.

There are two types of patterns to apply the global command:  
*  `g/found/v/notfound/cmd`
* `g/found/cmd`

For our use case, you can use following global command to apply `foldc` action to all the lines which match the given pattern.  
The pattern here is matching for all the multiline `C` comments (`\* comments *\` type) which are not ending on the same line.
```
g/^\s*\/\*.*/v/^\s*\/\*.*\*\//foldc
```

You can also do this with `foldmethod=expr` and setting expressions. Which I found a bit more work to set up.
Some of the plugin uses this methods becuase it is easier to extend. 

Reference :
* [Stackoverflow: Fold only commnets when file is opened in vim](https://stackoverflow.com/questions/11973281/fold-only-comments-when-file-is-opened-in-vim)
* [Stackexchange: How to fold comments](https://vi.stackexchange.com/questions/3512/how-to-fold-comments)
* [vim-foldcomments](https://github.com/lkdjiin/vim-foldcomments)
* [travisjeffery: Automatically fold comments in vim](https://travisjeffery.com/b/2012-01-30-automatically-fold-comments-in-vim/2012-01-30-automatically-fold-comments-in-vim/)
