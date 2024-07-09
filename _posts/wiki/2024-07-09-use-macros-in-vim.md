---
title: "Use macros in vim"
tags: [vim]
excerpt: "Let's you repeat a series of action again and again"
---


Did you ever need to perform a set of actions to tranform a text from one format to another.
And how you wished that there has to be a simple way to automate this without writing a script.

Well, Vim is what you would ever need to edit (almost) anything.

Let me show you the power of vim macros with an example.

## Excercise 1: Surround each column of CSV with quotes

Your Input:
```csv
Kaladin Stormblessed,Syl,Bridge Boy
Shallan Davar,Pattern,Veil
Adolin Kholin,Maya,
Kelsier,,Lord of Scars
```

The Output:
```
"Kaladin Stormblessed","Syl","Bridge Boy"
"Shallan Davar","Pattern","Veil"
"Adolin Kholin","Maya",""
"Kelsier","","Lord of Scars"

```

You can record a macro with following step:
* Go to the first line and type `q` followed by `a` to record a macro in register `a`.
* Hit `I"` to insert `"` at the start of the line. 
* Hit `esc`.
* Hit `f,` to find the next `,`
* Hit `i"` followed by `esc` to insert `"` before `,`
* Hit `a"` followed by `esc` to insert `"` after `,`
* Hit `;` to go to the next comma and repeat above 2 steps.
* Hit `;` to go to the next comma and `i"` to insert before the `,` followed by `esc`
* Hit `A"` to insert at the end of the line, followed by `esc`
* Hit `j` to go to the next line.
* Hit `q` to stop recording.
* Now you can repeat this macro with `@a` how many times you want.
* If you know the number of remaining lines before hand (3 in this case), you can directly hit `3@a` to repeat the macro 3 times.

Now reading this will take a lot time, believe me, once you get the hang of this it will be very fast.

You can also write recursive macros, edit the macros and save the macros across different session. Read reference for how to do this.

## Excercise 2: Convert the CSV to JSON.
You do this yourself. I know you can.

Input:
```csv
Kaladin Stormblessed,Syl,Bridge Boy
Shallan Davar,Pattern,Veil
Adolin Kholin,Maya,
Kelsier,,Lord of Scars
```

Output:
```csv
{name:"Kaladin Stormblessed", spren:"Syl", nickname:"Bridge Boy"}
{name:"Shallan Davar", spren:"Pattern", nickname:"Veil"}
{name:"Adolin Kholin", spren:"Maya", nickname:""}
{name:"Kelsier", spren:"", nickname:"Lord of Scars"}
```

Hint: It's same as previous one with some more inserts


## Reference
* [Macros - Vim Tips Wiki - Fandom](https://vim.fandom.com/wiki/Macros)
* [Record a recursive macro - Vim Tips Wiki - Fandom](https://vim.fandom.com/wiki/Record_a_recursive_macro)
