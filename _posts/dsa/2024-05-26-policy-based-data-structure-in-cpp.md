---
title: "Policy Based Data Structure in CPP"
tags: [dsa, pbds, notes]
excerpt: "Very brief notes on PBDS"
---

> Check [References](#references) for more thorough understanding.

## Policy Tree
Following is the definition of the `class tree` in PBDS.
```cpp
template<
    typename Key,
    typename Mapped,
    typename Cmp_Fn = std::less<Key>,
    typename Tag = rb_tree_tag,
    template<
        typename Const_Node_Iterator,
        typename Node_Iterator,
        typename Cmp_Fn_,
        typename Allocator_>
    class Node_Update = null_tree_node_update,
    typename Allocator = std::allocator<char> >
class tree;
```

If you initialize the template with only the first two types, we obtain almost exact copy of the container `map`.  
This container can also serve as `set`, for which you just need to specify the second argument template type as `null_type` (in older versions it is `null_mapped_type`).

`Tag` — class denoting a tree structure to be used. 
There are three base-classes provided in STL for use, `rb_tree_tag` (red-black tree), `splay_tree_tag` (splay tree) and `ov_tree_tag` (ordered-vector tree).
Sadly, at competitions we can use only red-black trees because splay tree and OV-tree are using linear-timed split operation that prevents us to use them.

`Node_Update` — class denoting policy for updating node invariants. By default it is set to `null_node_update`, i.e., additional information is not stored in the vertices.
C++ implemented an update policy `tree_order_statistics_node_update`, which stores the information required to perform `order_of_key` and `find_by_order` efficiently among other things.

Best way to define the class for our use in contests is as follows:

```cpp
#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;

typedef tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update> ordered_set; 
// order_of_key find_by_order

typedef tree<int, int, less<int>, rb_tree_tag, tree_order_statistics_node_update> ordered_map; 
```

This container supports all the methods supported by `std::set` and we get two new methods as below.  
* `order_of_key(val)` : returns the number of items in a set that are strictly smaller than our item  
* `find_by_order()`: returns an iterator to the k-th largest element (counting from zero)

### Multimap and Multiset
This container can provide `multimap` and `multiset` in two different wayy.

#### Use `less_equal` as Cmp_Fn
```cpp
typedef tree<int, null_type, less_equal<int>, rb_tree_tag, tree_order_statistics_node_update> ordered_multiset; 

```
If you use it with `less_equal`, keep following things in mind:
* `_GLIBCXX_DEBUG` must not be defined, otherwise some internal check will fail.[^1]
* `find` will always return `end`.
* `lower_bound` works like `upper_bound` in normal set (to return the first element > it)
* `upper_bound` works like `lower_bound` in normal set (to return the first element >= it)
* `find_by_order` and `order_of_key` works properly (unlike the 2 functions above).

[^1]: I haven't faced this myself, so I don't know how reliable is this. Keeping this here for future reference

#### Use `pair<int, int>` to store
```cpp
// Main idea is to keep pairs like {elem, id}.

typedef tree< pair<int, int>, null_type, less<pair<int, int>>, rb_tree_tag, tree_order_statistics_node_update> ordered_set;

int t = 0;

ordered_set me;

me.insert({x, t++});

me.erase(me.lower_bound({x, 0}));

cout << me.order_of_key({x, 0}) << "\n";
```

## Hash Tables

The PBDS also contain some Hash tables which are faster than `unordered_set` for various reason.[^2] 

```cpp
#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;

struct chash {
    const int RANDOM = (long long)(make_unique<char>().get()) ^ chrono::high_resolution_clock::now().time_since_epoch().count();
    static unsigned long long hash_f(unsigned long long x) {
        x += 0x9e3779b97f4a7c15;
        x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
        x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
        return x ^ (x >> 31);
    }
    static unsigned hash_combine(unsigned a, unsigned b) { return a * 31 + b; }
    int operator()(int x) const { return hash_f(x)^RANDOM; }
};

gp_hash_table<int, int, chash> table; // Hash table, good alternative of unordered_map
```

You will need to use Custom Hash function to not getting hacked by anti-hash tests.[^3]
Read the Codeforces blog from the [References](#references) section for Comparision of performance.

## References 
* [Installing PBDS on MacOS](https://codeforces.com/blog/entry/11080?#comment-511291)
* [Implicit cartesian tree in GNU C++ STL.](https://codeforces.com/blog/entry/10355)
* [C++ STL: Policy based data structures](https://codeforces.com/blog/entry/11080)[^4]
* [GNU Library Manual Entry on Policy Based Data Structure](https://gcc.gnu.org/onlinedocs/libstdc++/manual/policy_data_structures.html) [GNU Library Docs for PBDS](https://gcc.gnu.org/onlinedocs/libstdc++/ext/pb_ds/)
* [C++ STL: Policy based data structures. Part 2](https://codeforces.com/blog/entry/13279)[^5]
* [C++ STL: Order of magnitude faster hash tables with Policy Based Data Structures](https://codeforces.com/blog/entry/60737)

[^2]: See [this](https://codeforces.com/blog/entry/60737?#comment-446357) and [this](https://www.youtube.com/watch?v=fHNmRkzxHWs&t=47m13s) to understand why it's faster.
[^3]: Read [Blowing up unordered_map, and how to stop getting hacked on it](https://codeforces.com/blog/entry/62393) for more details.
[^4]: Contains links to more resources if you want to read more.  
[^5]: Talks about custom `Node_Update` class for the trees. Might be useful when you want to not implement the entire tree on your own and just want change the metadata that is being captured on each node. Nice thing to keep on your back pocket, might not be directly useful for the Competitve Programming, but might be useful on more generic code.
