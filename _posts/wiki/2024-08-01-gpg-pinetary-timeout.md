---
title: "gpg pinetary timeout"
tags: [gpg, cmd]
excerpt: "can happen when you ssh to a server"
---

By default the `gpg` wants to pop up a prompt for you to enter your
passphrase while signing something. 

If you are over ssh and that operation is timing out, you can get more information by
adding `-v` option to the `gpg` command to get more information.

It seems pinetary was timing out for me. so I created `.gnupg/gnupg.conf` file and
added `--pinetary-mode loopback` for it to prompt me about password in the stdout.
