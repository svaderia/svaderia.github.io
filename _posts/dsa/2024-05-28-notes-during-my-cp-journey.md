---
title: "Notes during my CP journey"
tags: [dsa, notes]
excerpt: "This will always be WIP"
---

I want to maintain this page to write small notes, and accumulate my thoughts while I am participating in CP.
I will try to keep this short, but no gurantees. 
It would contain some tricks I found good while solving problems, 
or some good blogs I read, 
or some good C++ tips, basically anything which I would like to rememeber in future.
{: .notice--info}

We will have 2 categories vaguely,  
1. General: Any other general tips or notes.
2. Problems: Collection of good problems and what I learned from each.  

Since I am starting this very recently, it will definetly not contain a note for everything.

## General
* You should analyse the invariants of a tree before coming up with a solution. [Example Problem](https://codeforces.com/contest/1975/problem/E)
* [CSES](https://cses.fi/) related notes are on [CSES Notes](/dsa/cses) page.


### Bitmask DP
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

### How to iterate over all the subsets of given mask.
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

## Topics 
These come up often in my rating range and I need to be good at them before being able to move upwards. 
I have started gathering this topics just now, based on the topics of the problem I am unable to solve.  

Idea is to go back and learn about these topics. 

- [X] Dynamic Programming
- [X] BFS
- [X] DFS
- [X] Binary Search
- [ ] String Hashing
- [ ] Sparse Table
- [ ] Segment Tree
- [ ] And more...


## Other Notes
{% for post in site.posts %}
  {% if post.tags contains "dsa" and post.tags contains "notes" %}
      {% if post.id == page.id %}{% continue %}{% endif %}
      {% include custom-archive-single.html %}
  {% endif %}
{% endfor %}
