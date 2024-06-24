---
title: "Single Source Shortest Path"
tags: [dsa, graph]
excerpt: "SSSP :)"
---

Goal: Find shortest path from vertex $start$ to all the other vertexes

## Dijkstra's Algorithm
Limitations: Only works with positive weights.

Complexity: $O(N + M \log M)$
```cpp
const int INF = 1e9 + 9; // needs to be sufficiently large

vector<vector<pair<int, int>>> g(n); // adjecency list

priority_queue<pair<int, int>> q;
vector<int> dist(n, INF);
vector<bool> visited(n);

dist[start] = 0;
q.push(make_pair(0, start));

while(!q.empty()){
    int root = q.top().second;
    q.pop();
    if(visited[root]) continue;
    visited[root] = true;

    for(auto e : g[root]){
        int child = e.first, w = e.second;

        if(dist[child] > dist[root] + w){
              dist[child] = dist[root] + w;
              q.push(make_pair(-dist[child], child));
        }
    }
}
```

## Reference
* [Dijkstra on sparse graphs - cp-algorithms](https://cp-algorithms.com/graph/dijkstra_sparse.html)

