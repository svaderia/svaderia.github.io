---
title: "How 32-bit system can address more than 4GB of RAM"
tags: [os]
excerpt: "it feels like magic"
snippet: true
---

The answer is Physical Address Extension ([PAE](https://en.wikipedia.org/wiki/Physical_Address_Extension)) 
Read more on the Section 3.8 of [intel-sys.pdf](https://www.cs.cmu.edu/~410/doc/intel-sys.pdf). 

Basically the page tables are now 64 bits addresses and there is 3 levels of
hierarchy. Initial extension supported 36-bit extension, so the processor can
address upto 64GiB of memory. Note that the addressing for the user is still
32-bit, so the user cannot use more than 4GiB of virtual address space.

