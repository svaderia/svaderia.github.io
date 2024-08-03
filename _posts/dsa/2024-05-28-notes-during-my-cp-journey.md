---
title: "DSA General Notes"
tags: [dsa, notes]
excerpt: "This will always be WIP"
toc: true
toc_sticky: true
---

I want to maintain this page to write small notes, and accumulate my thoughts while I am participating in CP.
I will try to keep this short, but no gurantees. 
It would contain some tricks I found good while solving problems, 
or some good blogs I read, 
or some good C++ tips, basically anything which I would like to rememeber in future.
{: .notice--info}

## General
* You should analyse the invariants of a tree before coming up with a solution. [Example Problem](https://codeforces.com/contest/1975/problem/E)


## Bitmask DP
> [Bitmask Dynamic Programming - Algorithm Live](https://www.youtube.com/watch?v=rlTkd4yOQpE)  
> [Practice Problems](https://vjudge.net/article/5139)

Think about if you can represent a state in a bitmask. Think about exitence of something and try to represent that as a bit mask.  

**Rolling bitmask**: when you want to move from one mask to next, think if you can do some shift operation and addition/or to calculate it.  

If you are given a DAG (or some form that is requiered to be split into DAG), then you can perform DP in a *topological sort order*.  

When you want to do DP on each available *mask*, then the following code will ensure that each subset of each *mask* is calculated before the *mask* itself is calculated.
This is usefule when answer to current mask depends on some of it's *subsets*.
```cpp
for(int mask = 0; mask < (1 << N); mask++){

}
```

### *Bonus Questions*:  [^11]
1. Check if the given mask contains consecutive ones?
2. Check for the given mask, if there are any consecutive ones, there are even number of consecutive ones. (i.e. 1111 is true, 1110 is false)

[^11]: See solution of Counting Tilings in this [blog](https://codeforces.com/blog/entry/111675).
## How to iterate over all the subsets of given mask.
> Reference: [Enumerating submasks of a bitmask](https://cp-algorithms.com/algebra/all-submasks.html)

Imagine you have a `mask` which represent a set. You want to iterate over all the subsets of this `mask`
efficiently. If there are `k` bits set in this mask, we would be iterating `2^k` times. 

```cpp
// subset = 0, needs to be handled separetly after the loop.
for(int subset = mask; subset > 0; subset = (subset - 1) & mask){

}
```
When you iterate over all the mask of size `N`, and for each mask iterate over the subset of mask, 
The alogrithm will be ***O(3<sup>N</sup>)***.

## Problems

* [D. XORificator](https://codeforces.com/contest/1977/problem/D): Teaches you how to hash a state with the minimum collision probability.
* [G - Count Substring Query](https://atcoder.jp/contests/abc362/tasks/abc362_g) : Do this after you learn about suffix array/tree
https://www.geeksforgeeks.org/sum-of-xor-of-all-subarrays/

## Topics 
These come up often in my rating range and I need to be good at them before being able to move upwards. 
I have started gathering this topics just now, based on the topics of the problem I am unable to solve.  

Idea is to go back and learn about these topics. 

- [X] Brute Force
- [X] Dynamic Programming
- [X] Binary Search
- [X] nCr, nPr
- [X] BFS
- [X] DFS
- [ ] Dijkstra
- [ ] Binary Indexed Tree
- [ ] Mod Inverse
- [ ] Bit masks
- [ ] String Hashing
- [ ] Sparse Table
- [ ] Segment Tree
- [ ] And more...

## PYSKI
a.k.a Problems you should know intimately 


### Heap
* Implement `Heap` using an array, you tend to forget. Read online if you don't remember.
  - Support Operation : `insert`, `pop_min`, `build`[^1]
* Find *K<sup>th</sup>* Order statastic in ***O(N)*** [^2] 
* Solve the running median problem[^3]

[^1]: Should be linear.
[^2]: If you forgot, use the idea of Quicksort, choose a random element and divide the Array into two parts.
[^3]: Use two heaps. See the CSES [problem](https://cses.fi/problemset/task/1076) solution.

### Stack and Queue
* For each `i` find a **nearest** `j` such that `j < i` && `a[j] < a[i]`.[^4]
* Implement a **Queue** using two **Stacks**.

[^4]: You can use stack for this. 

### Disjoint Set Union
* Implement **Union-Find** (aka *Disjoint Set Union*) data structure with array.
* Explain *Rank-Heuristic* and/or *Size Heuristic* for DSU?[^5]
* Explain *Path Compression* in DSU and it's time complexity.[^5]
* Let all elements in sets have some weights.  Add the following operations to *Disjoint Sets*: 
  - increase all weights in the given set by `d`
  - find the current weight of the element `x`.[^6]
* There is an empty graph. There are two types of queries: 
  - add an edge 
  - find the number of connected components that are bipartite graphs.[^5]
* Given an array a, filled with zeros. There are two types of queries: 
  - `a[i] := 1` 
  - find the nearest zero to i.[^7]

[^5]: [Disjoint Set Union - Algorithms for Competitive Programming](https://cp-algorithms.com/data_structures/disjoint_set_union.html#union-by-size-rank). Look at the applications of DSU here, pretty neat stuff.
[^6]: [How to implement Add weight to component operation in DSU? - Codeforces](https://codeforces.com/blog/entry/130417)
[^7]: Combine the idea from [here](https://cp-algorithms.com/data_structures/disjoint_set_union.html#compress-jumps-along-a-segment-painting-subarrays-offline) to solve the problem. Basically maintain the nearest zero to left and nearest zero to right in two different DSU.

### Graph
* Check if graph is bipartite.[^8]

[^8]: 1) Means the graph doesn't contain any cycle of odd length. 2) Also means the graph is 2-colorable.

### Segment Tree
There is an array $a$ of $n$ integers. You need to support $a_k = k$ and one of the following in $O(\log N)$
* Find the value of the sum $a_l - a_{l+1} + a_{l+2} - a_{l+3} + \ldots \pm a_{r-1}$ [^81]
* Find the value of the sum $a_l + 2a_{l+1} + 3a_{l+2} + \ldots + (r - l)a_{r-1}$ [^82]
* Find on a given segment $[l, r]$ a subsegment $[l_1, r_1]$ $(l \leq l_1 \leq r_1 \leq r)$, the sum on which is maximum (it is enough to find this sum, but you can also find the segment) [^83]
* Given an array $a$ of integers, find the minimum $i$ on the segment $[l, r]$, for which $a_i \geq k$ [^84]
* There is a string of $n$ brackets. You need to process requests: 1) change the $i$-th bracket, 2):
    - Check if the substring from $[l, r]$ is a valid brackets sequence
    - Find the largest prefix of a substring from $[l, r]$ that is a valid sequence [^85]

[^81]: change the values at the odd locations to the opposite and then the final answer will have sign change if $l$ is an odd number.
[^82]: make two segment trees of sums, for the first one, multiply each element by their $index + 1$, second is left untouched. The find answer will be $Query1 - l * Query2$
[^83]: very standard, maintain prefix max, suffix max, max subarray, total sum on each segment.
[^84]: think like binary search, maintaian segment tree for max over segment, go to the left child, as long as the max over segment is greater than $k$.
[^85]: we need check two conditions for the valid bracket sequence, 1) $\sum_{i=l}^{r} a[i] = 0$,  2) there is no negative prefix sum.

### Lazy Segment Tree
There is an array $a$ of $n$ integers. You need to process requests in $O(\log n)$

* assign the value $x$ to all elements of the segment,  
   change the elements of the segment $a_i = -a_i$,  
   find the sum on the segment,  
   find the maximum on the segment  
* assign the value $x$ to all elements of the segment,  
   change the elements of the segment $a_i = -a_i$,  
   find the segment with the maximum sum  
* assign the value $x$ to all elements of the segment,  
   add $x$ to all elements of the segment,  
   find the sum on the segment  
* change the elements of the segment $a_i = \max(a_i, x)$,  
   find the maximum on the segment  
* change the elements of the segment $a_i = \max(a_i, x)$,  
   change the elements of the segment $a_i = \min(a_i, x)$,  
   find the value of $a_i$.    
* assign the value $x$ to all elements of the segment,  
   find the longest segment of equal numbers  
* change the elements of the segment $a_i = a_i + x \cdot i + y$,  
   find the sum on the segment  
* assign the values $a_i = x \cdot i + y$ to the elements of the segment,  
   find the maximum on the segment  
* assign the values $a_i = x \cdot i + y$ to the elements of the segment,  
   find the GCD of numbers on the segment  


### Sparse Table
* Implement $O(1)$ for $min$ over range.

