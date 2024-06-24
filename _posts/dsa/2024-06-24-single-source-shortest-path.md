---
title: "Single Source Shortest Path"
tags: [dsa, graph]
excerpt: "SSSP :)"
---


## Dijkstra's Algorithm
Goal: Find shortest path from vertex $s$ to all the other vertexes

Limitations: Only works with positive weights.

Complexity: $O(N + M \log M)$
```cpp
#define pii pair<int, int>
#define vii vector<pii>
#define vi vector<int>

vector<vii> g(n); // adjecency list

priority_queue<pii> q;
vi dist(n, INF);
vb visited(n);

dist[s] = 0;
q.push(mp(0, s));

while(!q.empty()){
    int root = q.top().second;
    q.pop();
    if(visited[root]) continue;
    visited[root] = true;

    for(auto e : g[root]){
        int child = e.first, w = e.second;

        if(dist[child] > dist[root] + w){
              dist[child] = dist[root] + w;
              q.push(mp(-dist[child], child));
        }
    }
}

```

## Reference
* [Dijkstra on sparse graphs - cp-algorithms](https://cp-algorithms.com/graph/dijkstra_sparse.html)

