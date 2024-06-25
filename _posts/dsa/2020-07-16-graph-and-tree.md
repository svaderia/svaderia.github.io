---
title: Shortest Path and MST
tags: [dsa, graph]
excerpt: All Shortest Path and MST algorithms
---

> This page needs to be organised and partitioned down to multiple pages

* A graph is bipartite if it is possible to color it using two colors. It turns out that a graph is bipartite exactly when it does not contain a cycle with an *odd* number of edges.

## Floyd–Warshall algorithm
* All source shortest path
* `O(`n<sup>3</sup>`)`
```c
for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
           if (i == j) distance[i][j] = 0;
           else if (adj[i][j]) distance[i][j] = adj[i][j];
           else distance[i][j] = INF;
} }
for (int k = 1; k <= n; k++) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            distance[i][j] = min(distance[i][j], distance[i][k]+distance[k][j]);
        }
    }
}
```

## Krushkal's algorithm
* Minimum Spanning Tree
* Use dsu and priority queue

## Rerooting the Tree
```c
void change_root(int old_root, int new_root) {
    // Update data structures as if `new_root` was being removed as a child from `old_root`
    // Update data structures as if `old_root` was being added as a child to `new_root`
}

void walk(int vertex, int parent) {
    // Data structures now reflect the tree as if `vertex` were the root

    for (child in adjacency_list[vertex]) {
        if (child == parent) continue;

        change_root(vertex, child);
        walk(child, vertex);
        change_root(child, vertex);
    }
}

// Initialize data structures with respect to the initial root `root`

walk(root, -1);
```
* [Online Query Based Rerooting Technique](https://codeforces.com/blog/entry/76150)

## Resources
* [Shortest Path Modelling Tutorial](https://codeforces.com/blog/entry/45897)
    * How to use Dijkstra on state graph
* [Algorithm Live : Tree's Diameter, Center and Centroid](https://www.youtube.com/watch?v=2PFl93WM_ao)
    * Good approach towards theoratical proofs of tree's properties
* [Algorithm Thread : Tree Basics video and Gym Contest](https://codeforces.com/blog/entry/81527)
    * Covers Binary lifting for LCA, diameter and Euler tour to answer subtree queries using segment tree
    * [Gym](https://codeforces.com/gym/102694) has a good question to practice your basics

## Problems
* [Silly Sort](https://www.spoj.com/problems/SSORT/)
    * Sweet
* [Road Decoration](https://www.codechef.com/AMR14ROS/problems/AMR14B)
* [FCAR](https://www.codechef.com/problems/INSQ15_F)
* [Special Shortest Walk ](https://www.codechef.com/problems/SPSHORT)
* [Two Closest](https://www.codechef.com/problems/PAIRCLST)
    * Check out the random [solution](https://discuss.codechef.com/t/pairclst-editorial/12280/8)
* [Civilization](https://codeforces.com/contest/455/problem/C)
* [KOICOST](https://www.spoj.com/problems/KOICOST/)
    * Good MST like solution
