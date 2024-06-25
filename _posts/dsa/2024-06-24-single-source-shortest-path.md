---
title: "Single Source Shortest Path"
tags: [dsa, graph]
excerpt: "SSSP :)"
---

Goal: Find shortest path from vertex $v$ to all the other vertexes

## Dijkstra's Algorithm
Limitations: Only works with positive weights.

Complexity: $O(N + M \log M)$
```cpp
const int INF = 1e9 + 9; // needs to be sufficiently large

vector<vector<pair<int, int>>> g(n); // adjecency list

priority_queue<pair<int, int>> q;
vector<int> dist(n, INF);
vector<bool> visited(n);

dist[v] = 0;
q.push(make_pair(0, v));

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

## Bellman-Ford Algorithm
Works with negative weights as well. If the graph contains a negative weight cycle reachable from vertex $v$, all such vertexes should receive $-\infty$ weight.

Using this algorithm it is possible to find such negative weight cycle as well. 

We store the `edges` of the graph as edgelist, each tuple of the format $(to, from, weight)$.

Complexity: $O(N M)$
```cpp
vector<int> distance(n, INF);
distance[v] = 0;
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
If the algorithm reduces the weight in the $n^{\text{th}}$ round then the graph contains a negative cycle.

You can retrieve such shortest path as metioned on this [article](https://cp-algorithms.com/graph/bellman_ford.html#retrieving-path).

## Reference
* [Dijkstra on sparse graphs - cp-algorithms](https://cp-algorithms.com/graph/dijkstra_sparse.html)
* [Bellman-Ford - finding shortest paths with negative weights - cp-algorithms](https://cp-algorithms.com/graph/bellman_ford.html)
* [Finding a Negative Cycle in the Graph - cp-algorithms](https://cp-algorithms.com/graph/finding-negative-cycle-in-graph.html)

