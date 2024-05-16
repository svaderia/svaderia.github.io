---
title: "Preserving Terminal Colors in Piped Output"
tags: [cmd]
excerpt: "use unbuffer"
toc: false
classes: wide
---

## Why would you care?

Today, I encountered an issue while working with a Python script that uses the Rich library to output colored text in the terminal. The challenge was the output was too extensive, making it difficult to view the entire output without a lot of scrolling. My initial thought was to use a pager like `less` or `vim` for easy scrolling.

However, I faced a problem: when I piped the script output to a pager (`myscript | less`), the colors were lost, and the output was plain text. This was not ideal as the colored output is crucial for easier readability and understanding.

**Objective**: Find a way to view the script's colored output in a pager without losing the color formatting.

## Solutions

1. **`unbuffer`**
   - Makes commands behave as if they're outputting to an interactive terminal. Preserves color by emulating interactive terminal output.
   - Installation: `brew install expect`
   - Usage: `unbuffer some_command | less -r`
   - Requires `less -r`, `vim -R -` or similar for proper color display.
   - vim can be used as pager with `vim -R -`. The `-` tells vim to be a pager and `-R`  for colors

2. **Command-Specific Color Flags**
   - Flags like `--color=always` force color output in commands.
   - Usage: `ls --color=always | tee output.log`

3. **`script` Command**
   - Captures output with color codes, suitable for display and logging.
   - Usage: `script -efq output.log -c "ls --color=auto" | less -r`
   - Usage 2: `script -efq output.log -c "ls -l --color=auto"`
   - Above prints to stdout and a file with color codes. View output with `less -r output.log`.

These methods ensure color outputs are preserved in terminal operations, enhancing readability and command line efficiency.
