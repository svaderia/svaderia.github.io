---
title: "All Pair Shortest Path"
tags: [dsa, graph]
excerpt: "Find shortest path beween each pair of vertices"
---

## Floyd-Warshall Algorithm
We assume the graph $G$ is stored as adjacency matrix.

The graph may have negative weight edges, but no negative weight cycles.

Complexity: $O(n^3)$
```cpp
for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
           if (i == j) distance[i][j] = 0;
           else if (adj[i][j]) distance[i][j] = adj[i][j];
           else distance[i][j] = INF;
} }
for (int k = 1; k <= n; k++) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if(distance[i][k] < INF && distance[k][j] < INF)
                distance[i][j] = min(distance[i][j], distance[i][k]+distance[k][j]);
        }
    }
}
```
We have that `if` condition so that when the graph contains a negative weight edge, we don't keep on reducing the $\infty$ weight to smaller numbers when no path exist between the vertices.

## Reference
[Floyd-Warshall - finding all shortest paths - cp-algorithms](https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html)

