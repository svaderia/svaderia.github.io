---
title: "Codesign GDB on macOS Sonoma 14.6.1"
tags: [macos]
excerpt: "the documentation of this is so scattered"
---

Ultimately I followed the instruction from here : [PermissionsDarwin - GDB Wiki](https://sourceware.org/gdb/wiki/PermissionsDarwin#Sign_and_entitle_the_gdb_binary) 

You should also follow step 3 from here [BuildingOnDarwin - GDB Wiki](https://sourceware.org/gdb/wiki/BuildingOnDarwin) 

Do remember that GDB is not officially supported on apple anymore. 
Apple has changed it's focus to LLDB, and no individual has stepped up to support GDB for MacOS anymore.

Currently you can get it to *work*, but it might stop anytime. 
And as soon as you upgrade to Apple *M* series chips, I think things are going to get more sketchy.

Apple also loves *clang* more than *gcc*. I don't understand the difference between the two much, 
but just keep this mind when you want to upgrade your machine.

All of these becomes an issue when you want to use linux specific tools for any CTFs.

Explore installing UTM on MacOS and installing Kali in it.

