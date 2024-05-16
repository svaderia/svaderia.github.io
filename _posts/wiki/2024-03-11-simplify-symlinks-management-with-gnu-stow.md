---
title: "Simplify Symlinks management with GNU Stow"
tags: [cmd]
excerpt: "Use GNU Stow to link your project's scripts to `$HOME/bin` for easy terminal access."
toc: false
classes: wide
---

I came across this great video on [youtube][ref] which talks about managing your `dotfiles` with `GNU stow`.
Though I am very happy with how I manage my [dotfiles](github.com/svaderia/dotfiles), the introduction to `GNU Stow` is still something interesting.

I used `GNU stow` to manage some scripts for my distributed systems project. Below is the copy pasted version from the project README.

## Debug script Management with GNU Stow
The [scripts](https://blog.josejg.com/debugging-pretty/) that we are using to pretty print the output are pushed to the `path/to/project/scripts/bin` directory.
We are going to use GNU Stow to push these to `$HOME/bin` directory so that we can use them in terminal commands (This is assuming `$HOME/bin` directory is in your `PATH`)

1. **Install GNU Stow** (if not already installed): `brew install stow`

2. **Create Symlinks**:
Navigate to your project directory and run:
```bash
cd path/to/project
# This links scripts from scripts/bin to $HOME/bin.
stow --target=$HOME scripts

# Verify symlinks are created
ls -l $HOME/bin
```

[ref]: [https://youtu.be/y6XCebnB9gs?si=5_foGHOThNgDU_f4]
