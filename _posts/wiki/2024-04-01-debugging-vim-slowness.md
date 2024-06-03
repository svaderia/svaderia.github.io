---
title: "Debugging Vim Slowness"
tags: [vim]
excerpt: "Remember, Vim's `runtimepath` is important"
---
 
A lot of new things to learn today!

Vim was behaving very slowly each time I saved a Python file on the server. To investigate, I set `verbosefile` and `verbose=9`, then saved the file again.
This just gave me vague hints about which commands are likely to cause slowness. [^1]
I hit a roadblock afterwards, unable to find any more information from the logs.

[^1]: First hint aquired :)

While comparing the different configurations between server and my home machine, I noticed extra variables in the `runtimepath` on the server. 
Examining further, I noticed that there are some plugins that are being imported into the vim which are not set by me.  

> Fun Fact: Vim loads the `vimrc` file from `/usr/share/vim` by default for all the users.  

The server runs Debian. The `/usr/share/vim/vimrc` sources `debian.vim`, which modifies the `runtimepath`. [^2]

[^2]: Second hit aquired! :yay:

I then had a thought that Vim fires an `BufWritePost` event everytime you write a file. Maybe that can reveal more information for debugging, and lo-and-behold `autocmd BufWritePost` revealed that 
the `syntastic` autogroup was executing commands that I saw earlier in the logs responsible for the delay. [^3]

[^3]: Bingo! Finall hint aquired.

The `syntastic` plugin was being loaded to vim because it's parent directory `/usr/share/vim/addons/plugin` was added to the `runtimepath` by `debian.vim`. 
This plugin is deprecated and was performing actions I didn't need. 

While I could have removed the path from my `runtimepath` using `runtimepath-=/usr/share/vim/addons`, but I didn't feel comfortable doing it (who knows what else I might loose)

Instead, I decided to remove the specific `autocmd` causing the issue. I created a `~/.vim/after/plugin` directory and added a `syntastic.vim` file with the following line:

```vim
autocmd! syntastic BufWritePost *
```

This line removes the `autocmd` for `syntastic` on the `BufWritePost` event. Problem partially solved!
