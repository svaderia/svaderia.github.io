---
title: "Segment Trees"
tags: [dsa, notes, segment tree]
excerpt: "Segment Trees are very versetile"
toc: true
toc_sticky: true
toc_label: "सामग्री सूची"
---

You can find the full template on my github repository: 
[segtree.h](https://github.com/svaderia/competitive-programming/blob/master/TEMPLATE/segtree.h),
[segtree_lazy.h](https://github.com/svaderia/competitive-programming/blob/master/TEMPLATE/segtree_lazy.h)
{: .notice--info}

# Basic Segment Tree

As you might remember this data structure is very nice at answering range query for an *associative* operation. 
The runtime of such query is $O(\log N)$.

It is called *Segment Tree* because each node in the tree stores the operation over a segment, covered by it's children.
The *leaf* nodes are of *length* $1$.  
So you can divide any $[l, r]$ query into $\log N$ segments, where we have precalculated the operation for each of those segments.

I feel comfortable with *recursive* implementation of segment trees, but the *iterative* versions are comparably faster.

## Structure
* The `segment` structure denotes the information you need to store on each `segment`.   
* The `join` method is used to merge two segments. You can use any $associative$ function.  
* The `default` constructor needs return an $identity$ element under the operation in the `join`.  

In more formal terms, `segment` needs to be a [monoid](https://github.com/atcoder/ac-library/blob/master/document_en/lazysegtree.md).

```cpp
struct segment {
    int minimum;
    int data;

    // TODO: Make sure the default constructor initialises identity element.
    segment(int m = INF) : minimum(m) {}

    // TODO: Update to any associative function.
    void join(const segment &other) {
        minimum = min(minimum, other.minimum);
    }

    void join(const segment &seg0, const segment &seg1) {
        *this = seg0;
        join(seg1);
    }
};

```

* `n` stores the number of values stored in the entire `tree`.
* `seg` stores the data for each segment node. 
* We use implicit pointers, i.e. for node `id` it's left child is `2 * id` and right child is `2 * id + 1`.
* `lo` and `hi` stores the interval range for each `id`. Basically for what indexes the segment holds the answer for the operations.
This will be used to answer queries later.

```cpp
struct seg_tree{
    int n;
    vector<int> lo, hi;
    vector<segment> seg;

    seg_tree(int nn) : n(nn), lo(4 * n), hi(4 * n), seg(4 * n) { build(0, n - 1, 1); }
    seg_tree(vector<segment> &arr) : n(sz(arr)), lo(4 * n), hi(4 * n), seg(4 * n) { build(0, n - 1, 1, arr); }
    ...
};
```

## Building the tree
Builds the entire tree. Initialises `lo`, `hi` and `seg`.

Complexity: $O(N)$
```cpp

// pulls the data from the child to the parent.
void pull(int id){
    seg[id].join(seg[2 * id], seg[2 * id + 1]);
}

void build(int l, int r, int id, vector<segment> &arr){
    lo[id] = l, hi[id] = r;
    if(l == r){
        seg[id] = arr[l];
        return;
    }
    int mid = (l + r) / 2;
    build(l, mid, 2 * id);
    build(mid + 1, r, 2 * id);
    pull(id);
}
```

## Range Query

Complexity: $O(\log N)$

```cpp
// assumes zero indexing.
// answers for [l, r]
segment query(int l, int r, int id = 1){
    if(l > hi[id] || r < lo[id]){ // node is outside the query.
        return segment(); // identity element
    }

    if(l <= lo[id] && hi[id] <= r) { // node entirely inside query
        return seg[id];
    }

    segment lquery = query(l, r, 2 * id);
    segment rquery = query(l, r, 2 * id + 1);

    lquery.join(rquery);
    return lquery;
}
```

## Point Update

Complexity: $O(\log N)$
```cpp
void set(int p, segment val, int id = 1){
    if(p < lo[id] || p > hi[id]){
        return;
    }
    if(lo[id] == hi[id]){
        seg[id] = val;
        return;
    }

    set(p, val, 2 * id);
    set(p, val, 2 * id + 1);

    pull(id);
}
```

<hr>

# Lazy Propagation
The segment tree we talked about above gives us ability to do $point$ update and $range$ query.

With *Lazy Propagation* we can achieve $range$ update and $range$ query for certain kinds of updates.

## Structure
To enable this, we will stores the updates on each segment and only propagate it to it's child lazily.

Following code add two functionalities, increase an entire range by `d` or set a value to entire range to `d`.

Again the default contructor of the change needs to return an $identity$ element for the mapping.

`combine` method return a new `segment_change` which applies the current change, followed by the new change.

```cpp
struct segment_change {
    int to_add, to_set;

    // TODO: Make sure the default constructor initialises identity element.
    segment_change(int _to_add = 0, int _to_set = -INF) : to_add(_to_add), to_set(_to_set) {}

    bool has_set() const {
        return to_set != -INF;
    }

    bool has_change() const {
        return has_set() || to_add != 0;
    }

    // Return the combined result of applying this segment_change followed by `other`.
    // TODO: check for boundary values.
    segment_change combine(const segment_change &other) {
        if (other.has_set()) {
            return other;
        }

        segment_change n = segment_change(to_add + other.to_add, to_set);
        return n;
    }
};
```

We also need to add a new method in `segment` struct that applies the change.

```cpp
struct segment{
    ...

    void apply(const segment_change &change) {
        if (change.has_set()) {
            sum = len * change.to_set;
        }
        sum += len * change.to_add;
    }

    ...
}
```

Add following helper methods in the `segment_tree` structure.

```cpp

...

vector<segment_change> seg_change; // initialised in the constructor

void pull(int id){
    seg[id].join(seg[2 * id], seg[2 * id + 1]);
}

// applies the following change to the segment and 
// merges the change with the existing change.
void apply_and_combine(seg id, const segment_change &change){
    seg[id].apply(change);
    seg_change[id] = seg_change[id].combine(change);
}

// pushes the change on the parent to it's two children
void push(id){
    // not a leaf and has change
    if(lo[id] != hi[id] && seg_change[id].has_change()){ 
        apply_and_combine(2 * id, seg_change[id]);
        apply_and_combine(2 * id + 1, seg_change[id]);
    }
    seg_change[id] = segment_change();
}

...

```

## Range Query

The only thing that is going to change is that each time we visit a node, 
we will push any of the outstanding changes to it's children. 

That way we ensure that each time we visit a node, any changes to it's parents are already pushed to it.

Complexity: $O(\log N)$
```cpp
segment query(int l, int r, int id = 1){
    if(l > hi[id] || r < lo[id]){
        return segment();
    }
    if(l <= lo[id] && hi[id] <= r) {
        return seg[id];
    }

    // Only line that changed. :)
    push(id);

    segment lquery = query(l, r, 2 * id);
    segment rquery = query(l, r, 2 * id + 1);
    lquery.join(rquery);
    return lquery;
}
```

## Range Update

This is the interesting part. 

When we reach a node that is entirely within the range, we apply the change to it and return;
otherwise we traverse all the child while pushing the previous changes. 
At the end, we recalculate our segment values by doing `pull` from the childrens.

Complexity: $O(\log N)$
```cpp
void range_update(int l, int r, segment_change &change, int id = 1){
    if(l > hi[id] || r < lo[id]){
        return;
    }
    if(l <= lo[id] && hi[id] <= r){
        apply_and_combine(id, change);
        return;
    }
    push(id);

    range_update(l, r, change, 2 * id);
    range_update(l, r, change, 2 * id + 1);

    pull(id);
}
```

# Persistence
> TODO

# References
* [Algorithm Gym :: Everything About Segment Trees](https://codeforces.com/blog/entry/15890)
* [Efficient and easy segment trees](https://codeforces.com/blog/entry/18051)
* [ac-library · GitHub](https://github.com/atcoder/ac-library/blob/master/document_en/lazysegtree.md)
* [neal's library for inspiration](https://github.com/nealwu/competitive-programming/tree/master/seg_tree)
* [Segment Tree - cp-algorithm](https://cp-algorithms.com/data_structures/segment_tree.html)


