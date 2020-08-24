---
title: Graph and Trees
tags: [DSA, graph, tree]
excerpt: Notes of Graph and Tree section of Competitive Programmer's Handbook by Antti Laaksonen
classes: wide
---

* A graph is bipartite if it is possible to color it using two colors. It turns out that a graph is bipartite exactly when it does not contain a cycle with an *odd* number of edges.

## Bellman–Ford algorithm
* The following implementation of the Bellman–Ford algorithm determines the shortest distances from a node `x` to `all` nodes of the graph. The code assumes that the graph is stored as an edge list edges that consists of tuples of the form (a, b, w), meaning that there is an edge from node a to node b with weight w.
The algorithm consists of `n − 1` rounds, and on each round the algorithm goes through all edges of the graph and tries to reduce the distances. The algorithm constructs an array distance that will contain the distances from x to all nodes of the graph. The constant INF denotes an infinite distance.

* `O(n m)`
```c
for (int i = 1; i <= n; i++) distance[i] = INF;
distance[x] = 0;
for (int i = 1; i <= n-1; i++) {
    bool changed = false;
    for (auto e : edges) {
        int a, b, w;
        tie(a, b, w) = e;
        if(distance[b] < (distance[a] + w)){
            distance[b] = distance[a] + w;
            changed = true;
        }
    }
    if(!changed) break;
}
```
* If distance reduces at n<sup>th</sup> rounds, the graph contains a negative cycle.

## Dijkstra’s algorithm
* One source shortest path
* `O(n + m log m)`
```c
for (int i = 1; i <= n; i++) distance[i] = INF; distance[x] = 0;
q.push({0,x});
while (!q.empty()) {
    int a = q.top().second; q.pop(); if (processed[a]) continue; processed[a] = true;
    for (auto u : adj[a]) {
        int b = u.first, w = u.second;
        if (distance[a] + w < distance[b]) {
            distance[b] = distance[a] + w;
            q.push({-distance[b],b});
        }
    }
}
```

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

## Resources
* [Shortest Path Modelling Tutorial](https://codeforces.com/blog/entry/45897)
* [Algorithm Live : Tree's Diameter, Center and Centroid](https://www.youtube.com/watch?v=2PFl93WM_ao)

## Problems
* [Silly Sort](https://www.spoj.com/problems/SSORT/)
    * Sweet
* [Road Decoration](https://www.codechef.com/AMR14ROS/problems/AMR14B)
* [FCAR](https://www.codechef.com/problems/INSQ15_F)
* [Special Shortest Walk ](https://www.codechef.com/problems/SPSHORT)
* [Two Closest](https://www.codechef.com/problems/PAIRCLST)
    * Check out the random [solution](https://discuss.codechef.com/t/pairclst-editorial/12280/8)
* [Civilization](https://codeforces.com/contest/455/problem/C)
