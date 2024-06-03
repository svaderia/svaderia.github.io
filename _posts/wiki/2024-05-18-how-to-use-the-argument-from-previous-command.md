---
title: "How to use the argument from previous command"
tags: [cmd]
excerpt: "Use `!*`"
---


Have you ever typed an command which required you to type the entire path to a location in an argument and now you wanted to use the same argument again in another command?

A very simple example is when you opened a file to edit, and now you want to move the file again to a location: 
```bash
vim path/to/my/complex/location
mv path/to/my/complex/location path/to/my/
```

Ideally all of our terminals are now capable of auto complete, but when you have deep directory structure, you would need to prese `<Tab>` for each level to autocomplete. 
Rather you could use some shell features to refer to the arguments of previous command. 

* `!$`    last argument from previous command.
* `!^`    first argument from the previous command. analogues to `!:1`
* `!*`    all the arguemnts from previous command
* `!:2`   second argument from previous command.
* `!!`    entire last command. useful if you forgot to use sudo and don't want to type the command again.

Less used : 
* `!:2-3`   second to third arguments
* `!:2-$`   second to last arguments
* `!:2*`    second to last arguments
* `!:2-`    second to next to last arguments
* `!:0`     the command
* `!!`      repeat the previous line


Run the following command to read more : 
```bash
$ man  -P 'less -p ^HISTORY\ EXPANSION' bash
```

[Reference](https://stackoverflow.com/questions/4009412/how-to-use-arguments-from-previous-command)
