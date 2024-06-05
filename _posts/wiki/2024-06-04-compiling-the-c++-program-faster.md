---
title: "Compiling the C++ program faster"
tags: [dsa, cpp]
excerpt: "Precompiled headers do wonders"
---

I have been taking part in [Competitve Programming](https://github.com/svaderia/competitive-programming) for a while now. 

I use vim to write my code and have some helpers to compile and run the test cases. 

I have been facing slow compile times for a long time now, but I never invested time in thinking about how to optimise it.
But I have been getting increasingly irritated for a while now. 

My base template, [solution.cpp](https://github.com/svaderia/competitive-programming/blob/master/TEMPLATE/solution.cpp)
has `#include <bits/stdc++.h>`. While this makes our life easier by not worrying about importing each header separetly, 
it puts a huge load on the compile time. 

We can reduce the compile time by `pre-compiling` the `bits/stdc++.h`.


## Steps 

* Find the path of header file, On my Mac it was `/usr/local/Cellar/gcc/13.2.0/include/c++/13/x86_64-apple-darwin23/bits`.
    * One easy way to find this on your system is to compile a file that includes this header with `-H` flag of `gcc`. This will spit out the path of each header file getting included in your executable. 
* Compile the `stdc++.h` file with **Exactly** the same flag as you used for your file compilation. Please note that the precompiled binary will only be used if the compiler flags matches. 
    * I ran : `g++-13 -std=c++17 -Wall -Wextra -Wshadow -Wconversion -DDEBUG /usr/local/Cellar/gcc/13.2.0/include/c++/13/x86_64-apple-darwin23/bits/stdc++.h`
    * This will produce `stdc++.h.gch` file on the same path.
* Now you should see the speed up next time you compile the file.

## References
* [Compilation and debugging tutorial - Codeforces](https://codeforces.com/blog/entry/79024)
