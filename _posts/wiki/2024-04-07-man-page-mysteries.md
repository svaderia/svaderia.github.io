---
title: "Man Page Mysteries"
tags: [cmd, man]
excerpt: "Did you know that different OS has different `man` pages for system calls?"
---


A New Day, Something New to Learn!!!

I am having a headache learning to use signal processing correctly with the Shell Lab, but it's a nice exercise.
Aside from what I learned there, the interesting stuff happened with `man` pages!

I was referring to my local `man` pages since, for some reason, the `man` command was taking longer to exit on the server I was working on.

I got so confused by the difference in the details that I found on my local macOS compared to the Linux box that threw me off for a while. I thought I was not searching the right commands anymore.

After resolving all the bugs (God knows how!), I opened the `man` page again on the server, and lo and behold, the `man` pages are different.
macOS has `System Call Manuals` for `man waitpid`, and it's `Linux's Programmers Manual` on the Linux box. I was writing the program on Linux and was dealing with system calls, so I needed the
`man` pages from Linux. Never had I imagined that `man` pages can be different. But, in retrospect, it makes sense that they would be different.

While on this voyage, I realized what the number argument in the `man` pages means. It refers to the section in which we need the `man` page for.
Look into the reference for more details:

## Reference:
* [How to write unix Man pages for macos command line apps](https://blog.smittytone.net/2022/05/26/how-to-write-unix-man-pages-for-macos-command-line-apps/)
* [How to Have Linux Man Pages on macOS](https://apple.stackexchange.com/questions/427412/install-linux-manpages-on-macos)
