---
title: "Recursive lambda fn in CPP"
tags: [cpp]
excerpt: "recur(recur, on, this)"
---


For an annonymous lambda function in Cpp, when you want to self reference it using the following way,  always put the return type in the signature.
```cpp

    vvi e(n + 1); // edge list

    vi parent(n + 1, 0);
    vi depth(n + 1, 0);

    // always put return type when doing self referencing
    auto dfs = [&](auto self, int root, int d) -> void {
        depth[root] = d;
        for (int x : e[root]) {
            if (x != parent[root]) {
                parent[x] = root;
                self(self, x, d + 1);
            }
        }
    };

    dfs(dfs, 1, 1);
```
