---
title: Solving RMQ Problems
tags: [dsa, rmq, other]
excerpt: Ways of solving RMQ problems and reducing LCA to RMQ
---

Range Minimum Queries (RMQ) and similar type of problems could be solved by many data structures. 

[Sparse Table](https://cp-algorithms.com/data_structures/sparse-table.html) is one such data structure. Generally at my level Sparse Table or Segment Tree is all I will need for these problems. 
So the advance structures could be saved for later when I am better. 

Sparse Table can only answer idempotent function over range in $O(1)$ and not all associative functions. 

## Advance Articles
* [Topcoder: Range minimum query and lowest common ancestor](https://www.topcoder.com/community/competitive-programming/tutorials/range-minimum-query-and-lowest-common-ancestor/)
    - Basics of solving RMQ with different data structures and the comparisons between them
    - Sparse Table intro
    - Converting LCA to RMQ with tree traversal
    - From RMQ to LCA with [Cartesian tree](https://cp-algorithms.com/graph/rmq_linear.html) and applying [Farach-Colton and Bender Algorithm](https://cp-algorithms.com/graph/lca_farachcoltonbender.html)
        - It may lead to `< O(N), O(1) >` complexity in theory, but practical performance is bad due to constant factor - [reference](https://codeforces.com/blog/entry/78931?#comment-644118)
* [YouTube : Algorithms Dead 2: RMQ Tricks](https://www.youtube.com/watch?v=GWXf3vVtf-c)
    - Nice introductory and advance tricks
    - Explains how to achieve `< O(N), O(1) >` for Sparse Table
* [Codeforces: Range minimum query in O(1) with linear time construction](https://codeforces.com/blog/entry/78931)
    - Explains how to achieve `< O(N), O(1) >` for Sparse Table with implementation
    - Benchmarking this implementation against other DS

* [Codeforces : Sqrt-tree: answering queries in O(1) with O(NloglogN) preprocessing](https://codeforces.com/blog/entry/57046)
    - Different data structure for solving RMQ problem
    - Good read

* [Codeforces : Range Minimum Query(O(N),O(1))](https://codeforces.com/blog/entry/15149)
* [YouTube : Episode 28 - Sparse Tables and LCA by Algorithms Live](https://www.youtube.com/watch?v=EKcQt-74bNw)
* [Arpa's Trick](https://codeforces.com/blog/entry/48994)
    - Solving RMQ problem using DSU

## Problems
* [SPOJ - DISQUERY](https://www.spoj.com/problems/DISQUERY/)
    - Calculate something in the path from `u` to `v`

* [CodeChef - TALCA](https://www.codechef.com/problems/TALCA)
    - Change the root of the tree and find new LCA

## Practice
* [cp-algorithms](https://cp-algorithms.com/graph/lca.html)
* [LCA Problems](https://codeforces.com/blog/entry/43917)
