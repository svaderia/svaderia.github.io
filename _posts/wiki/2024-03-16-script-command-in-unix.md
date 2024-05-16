---
title: "`script` command in Unix"
tags: [cmd]
excerpt: "Use it to store the output of the terminal session"
toc: false
classes: wide
---


The `script` command in UNIX is used to record a terminal session, capturing all the commands executed and their output. It's especially useful for creating documentation, tutorials, or archiving terminal sessions.

**Usage**:
```bash
script [options] [file]
```
- `file`: The file name where the session transcript will be saved. Defaults to `typescript` if not specified.

**Key Features**:
- Records everything displayed on the terminal.
- Recording starts upon execution and stops with the `exit` command or CTRL-D.
- Can be helpful for troubleshooting, creating tutorials, or documenting terminal sessions.

**Example**:
```bash
script session.txt
```
This command starts recording the terminal session and saves it to `session.txt`.
