---
title: "Binary Search Notes"
tags: [dsa, notes]
excerpt: "Some simple notes for reference"
---

You need to be mainly careful with your termination condition, how you calculate the middle element and how you assign the boundary values.

Let's say the array outputs the following values for the condition `f`[^1]
```
F F F F F F T T T T T  
          ^ ^  
          A B  
```

A : Last element where the condition is false.  
B : First element where the condition is true.


```cpp
int l = 0, r = mx;
while(l < r){
    int m = l + (r - l) / 2;
    if( f(m) ){
        r = m;
    }else{
        l = m + 1;
    }
}

// l        == Point B
// l - 1    == Point A

```

[^1]: For the normal binary search to find the position of given value in the array, the `f(val)` can be `val >= search_term`.


# Ternary Search

> The cp-algorithm [article][ternary_search] or [wikipedia][wk] will do more justice on explaining this, but my quick notes is as follows.


Imagine You have a function which has a single `minima` or `maxima` (think about the `f(x) = x^2` function). 
Your task is to find the value at which it minimises or maximises.  

Let's say the function is initially strictly decreasing, and then after the minima it is scritly increasing. 
In this case you can find the minima with terminary search algorithm.  

You divide the range in 3 parts by creating to mid points at `1/3` and `2/3` range.
You compare the value of function at these points and update the boundaries.

When you don't want to worry about corner cases, do it with `eps` tolerance like below.

```cpp
int l = 0; r = mx;

int eps = 3;

while(r - l > eps){
    int m1 = l + (r - l) / 3;
    int m2 = r - (r - l) / 3;

    if (f(m1) < f(m2)){
        r = m2;
    }else{
        l = m1;
    }
}

repA(i, l, r){
    // calcualte for the answer
}

```

<details>
<summary>Other potential way to code </summary>

The reason I am hiding this is because I have not properly thought it through if this will work in all the scenarios. Something to do in future. 

I feel that the `eps` method above generally works well and we shouldn't need to case work each scenario so hiding this is better. 

{% highlight cpp %}
int l = 0; r = mx;
while(l < r){
    int m1 = l + (r - l) / 3;
    int m2 = r - (r - l) / 3;

    if (cost(m1) < cost(m2)){
        r = m2 - 1;
    }else{
        l = m1 + 1;
    }
}

cout << l << endl;
{% endhighlight %}

</details>


> Example problem for ternary search: [CSES 1074](https://cses.fi/problemset/task/1074)  

[ternary_search]: https://cp-algorithms.com/num_methods/ternary_search.html
[wk]: https://en.wikipedia.org/wiki/Ternary_search
