---
title: "Never run `mv` or `rm` without backup"
tags: [cmd]
excerpt: "I said NEVER"
---

NEVER USE `mv` OR `rm` WITHOUT BACKUP. I REPEAT, NEVER.
{: .notice--warning}

I was porting the old snippets that I wrote over the last few months to finally put them in this wiki today.  
The old snippets used to be in the format `snippet_$(date +%s).md`, so each snippet had a unique name even when created on the same day. 
I wanted to quickly `mv` all these snippets to a new folder with the format `YYYY-MM-DD-snippet.md` for each file.  
My little brain **forgot** that the only reason I had the `+%s` option in the first place was to remove the possibility of overrides when snippets are created on the same day.
The command overwrote four of my previous snippets, and now I think they are forever gone. :cry:  
I don't even remember what those snippets could have been. That feels like such a loss of data.

## Lessons Learned
* Don't use `mv` or `rm` without thinking about the consequences.
  * But I know my stupid brain will do this again.
* Set the following alias in your environment that shows a warning and asks for input before overriding a file.
  * `alias mv="mv -i"`
* Since I was already in a git repo, I could've just committed all the files first. GIT SOLELY EXISTS TO RECOVER FROM THE MISTAKES OF IDIOT DEVELOPERS LIKE ME; I SHOULD HAVE JUST COMMITTED WHAT I HAD BEFORE RUNNING THE COMMAND. :disappointed:
* I already printed the operation before executing to make sure my little bash script works. I should've just looked at the output before running the actual command.
* I could've just used `cp` to make new files in a directory instead of using `mv`. I could've then removed the old files after confirming everything was good.

Man, this just felt like the information loss of the century to me.  
I don't know what precious ideas those snippets contained. Maybe you can say they were useless; otherwise, I would've remembered. Maybe they were the next big thing that the universe required.
We will never know.  
Sigh, let's stop being emotional.

> PS: I used to call the wiki articles snippets before. So you will see me referring to them as snippets here.

> One of the post would have been talking about my `lvimrc` config for editing `C` files on the server.
Other post was talking about why I am grateful to my parents for raising me right.
