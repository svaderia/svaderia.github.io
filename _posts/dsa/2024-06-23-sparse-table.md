---
title: "Sparse Table"
tags: [dsa, notes]
excerpt: "$O(1)$ Range Query for immutable arrays"
---

Sparse Table can be only used for $immutable$ arrays, since it cannot handle the updates efficiently. 

Though the standard Sparse Table can answer any $ideompotent$ operation over a range with $O(1)$ time complexity, 
and any $associative$ operation with $O(\log N)$ time complexity. 

## Template

This is the template I use. 

Note: You might want to keep the LOG as the second dimention of you array to minimise the cache miss and have even faster code.
```cpp
template<typename T>
struct sparse_table{

    const int LOG = 20; // should be okay until 10^6 arrays

    T n;
    vector<vector<T> > dp;

    // TODO: Something you might need to change
    T merge(T a, T b){
        return min(a, b);
    }

    sprase_table(vector<T> &a){
        n = sz(a);
        dp.resize(LOG);
        dp[0] = a;

        repA(id, 1, LOG - 1){
            dp[id].resize(n);
            rep(j, n){
                dp[id][j] = dp[id - 1][j];
                int next_id = j + (1L << (id - 1));
                if(next_id < n){
                    dp[id][j] = merge(dp[id][j], dp[id - 1][next_id]);
                }
            }
        }
    }

    // query of the form [l, r]
    T query(int l, int r){
        int d = r - l + 1;
        int id = __builtin_clzll(1) - __builtin_clzll(d); 
        int shift = (1LL << id);
        return merge(dp[id][l], dp[id][r - shift + 1]);
    }
};
```

## Disjoint Sparse Table
With some more $O(N\log N)$ preprocessing you can achieve $O(1)$ query processing time for any associative function $\circ$.  
It is called [Disjoint Sparse Table](https://discuss.codechef.com/t/tutorial-disjoint-sparse-table/17404). 
The blog post felt very dense initially so this [lecture](https://youtu.be/Ti_U3Q_G7yM?t=3861) might be more friendly.


Idea is something like following:
* First extend the array such that it's size become power of 2. Let's say the size of the array is now $2^z$.
* You perform divide and conquer type technique and precalculate prefix and suffix sum from the middle for each $j \in [1, \ldots, z - 1]$.
* To be more detailed, for each $j$,
    * For each index $i < 2^z$, and $i \equiv 0 \pmod{2^j}$
    * Pre calculate prefix and suffix sums for the segment of size $2^j$ from the index $i$.
* Now for each query of form $[l, r]$, 
    * Find the largest $j$ such that there exist an index $i$ satisfying $i \equiv 0 \pmod{2^j}$ and $i \in [l, r]$.
    * The answer to the query would be $prefix[j][l] \circ suffix[j][r]$.

There is some bit magic involved to find the largest $j$ for each query. Or you can reduce that to Range Maximum Query in $O(1)$ using another sparse table.
See the blog post above or the lecture for more details.

I have yet to require a need to implement this, so I am going to leave it to my future self :)
