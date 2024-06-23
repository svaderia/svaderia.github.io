---
title: "Fenwick Tree"
tags: [dsa, notes]
excerpt: "More memory efficient than segment tree"
---

aka *Binary Indexed Tree(BIT)*
{: .notice--info}

Fenwick tree gives you same time complexity for Point Update and Range Query as a segment tree.
It requires $O(N)$ memory but the constant factor is smaller than segment trees, generally around $2N$.

Fenwick tree though can only support a function which has an $identity$ element and $inverse$ elements.

Generally everyone agrees that Segment Trees should be enough for most of the problems in Competitive Programming[^1], 
I still find this data structure very interesting. People also say that it's easier to code a Fenwick tree for multidimentional data.

There are some advance use cases of Fenwick trees as well, see the References.


[^1]: [BIT vs Segmen Tree - Codeforces](https://codeforces.com/blog/entry/47604), [Do I need to learn Fenwick Tree when I already know how to use Segment Tree? - Codeforces](https://codeforces.com/blog/entry/122433)

## References
* [Sort-Fenwick: Fenwick Trees are More Powerful than I Thought - Codeforces](https://codeforces.com/blog/entry/107849)
* [Fenwick Tree - cp-algorithm](https://cp-algorithms.com/data_structures/fenwick.html)
* [Fenwick Tree, Sparse Table - YouTube](https://youtu.be/Ti_U3Q_G7yM?si=CFtbD0k1jqogVG3Z)
