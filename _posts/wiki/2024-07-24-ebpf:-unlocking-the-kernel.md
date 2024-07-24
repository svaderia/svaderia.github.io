---
title: "eBPF: Unlocking the kernel"
tags: [os]
excerpt: "Something I got to know only today"
---

I attended a talk by PDL today, and man it was interesting. The talk was about a DBMS system
build directly in eBPF to optimise for in-memory DBMS system (like reddis).

They talked about how eBPF would improve performance for DBMS Proxy.[^1]
Then they shifted to how a DBMS implemented within eBPF would work.

[^1]: [Tigger: A Database Proxy That Bounces With User-Bypass](https://www.vldb.org/pvldb/vol16/p3335-butrovich.pdf) 


## Background
So a lot of application, like DBMS, spend majority of their time in User-Kernel boundary while
copying the data over from user space to kernel space to tranport it over network or write to disk.

There are two potential solution to these kind of workload.

First is Kernel-bypass, Idea is to push the ownership of some of the hardware level devices / kernel data structure 
to user space. In other word, bypass kernel to perform some tasks directly in the user space.
This gives the user a very fast access times.

I am not good enough to understand all the complexity and pros/cons of this approach, but I understand that 
this means that the application level code needs to act a lot like the kernel itself. So you are going to duplicate
kernel code/logic into application. This might create different issues related to management and upgrade of these code.

Second is User-bypass, Push the user logic into the kernel.
There are multiple ways of doing this. You can compile the kernel from scratch with your driver,
You can write a driver code for the kernel, but it might not be supported by every kernel. 

## eBPF
It's a standardise way to perform User-bypass and attach some user level logic to kernel.
From my limited understanding, each compiled binary code goes through an *eBPF Verifier* and then 
could be run as sort of like a *System call* from your user-space.

*eBPF Verifier* is required to protect the kernel against bad/malicious code and has some hard limit on
the size of code, loop termination conditions, etc.

You might want to checkout [eBPF: Unlocking the Kernel (OFFICIAL DOCUMENTARY) - YouTube](https://www.youtube.com/watch?v=Wb_vD3XZYOA).

You can read more about the work done by the group on BPF-DB in the thesis 
[On Embedding Database Management System Logic in Operating Systems via Restricted Programming Environments](http://reports-archive.adm.cs.cmu.edu/anon/2024/CMU-CS-24-107.pdf)
by [Matt Butrovich](https://mattbutrovi.ch/).

