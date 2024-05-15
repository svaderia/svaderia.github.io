---
title: "Never run `mv` or `rm` without backup"
date: 2024-05-15 13:48:01 -0400
tags: [cmd, wiki]
excerpt: "I said NEVER"
toc: false
classes: wide
---

NEVER USE `mv` OR `rm` WITHOUT BACKUP. I REPEAT, NEVER.
{: .notice--warning}

I was porting the old snippets that I wrote over last few months to finally put in this wiki today.  
The old snippets used to be of the format `snippet_$(date +%s).md`, so each snippet has unique name even when created on the same day.  
I wanted to quickly `mv` all these snippets to a new folder with the format `YYYY-MM-DD-snippet.md` for each file. 
My little brain **forgot** that the only reason I had `+%s` option in the first place is to remove the possibilities of overrides when snippets are created on the same day.  
The command overwrote 4 of my previous snippets and now I think they are forever gone. :cry:
I don't even remember what could those snippets be. That feels like such a loss of data.  

## Lessons learnt
* Don't use `mv` or `rm` without thinking about the concequences.
  * But I know my stupid brain will do this again.
* Set the following alias in your environment that shows a warning and ask for an input before overridding a file. 
  * `alias mv="mv -i"`
* Since I was already in a git repo, I could've just committed all the files first. GIT SOLELY EXISTS TO RECOVER FROM THE MISTAKES OF IDIOT DEVELOPERS LIKE ME, I SHOULD HAVE JUST COMMITED WHAT I HAD BEFORE RUNNING THE COMMAND. :angry:
* I already printed the operation before executing to make sure my little bash script works. I should've just looked at the output before running the actual command. 
* I could've just use `cp` to make new files in a directory than using `mv`. I could've then removed the old files after confirming everything is good.

Man, this just felt like information loss of the century to me.  
I don't know what precious ideas those snippets contained. Maybe you can say they were useless otherwise I would've remembered, maybe they were the next big thing that the universe required. 
We will never know.  
Sigh, let's stop being emotional.


> PS: I used to call the wiki articles snippets before. So you will see me refering to them as snippets here. 
