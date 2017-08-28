---
title: Data Structure and Algorithms in Python-2
tags: [Python, Recursion, Algorithm Analysis]
excerpt: Notes on Chapter 3 and 4 of Data Structures and Algorithms in Python by Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser.
header:
      image: /assets/images/dsa.png
      teaser: /assets/images/dsa.png
---

# Chapter 3 - Algorithm Analysis
### Big-Oh Notation:
Let `f(n)` and `g(n)` be functions mapping positive integers to positive real numbers.
We say that `f(n)` is `O(g(n))` if there is a real constant `c > 0` and an integer constant
n<sub>0</sub> ≥ 1 such that,
> f(n) ≤ cg(n), for n ≥ n<sub>0</sub>

### Big-Omega Notation
Just as the `big-Oh` notation provides an asymptotic way of saying that a function is
`less than or equal to` another function, the following notations provide an asymptotic way of saying that a function grows at a rate that is `greater than or equal to`
that of another.
Let `f(n)` and `g(n)` be functions mapping positive integers to positive real numbers. We say that `f(n)` is `Ω(g(n))`, pronounced 
`f(n) is big-Omega of g(n)` 
if `g(n)` is O(f(n)), that is, there is a real constant `c > 0` and an integer constant n<sub>0</sub> ≥ 1 such that,
> f(n) ≥ cg(n), for n ≥ n<sub>0</sub>.

### Big-Theta Notation
In addition, there is a notation that allows us to say that two functions grow at the
same rate, up to constant factors. We say that `f(n)` is `Θ(g(n))`, pronounced `f(n) is big-Theta of g(n)` if `f(n)` is `O(g(n))` and `f(n)` is `Ω(g(n))` , that is, there are real
constants c<sub>1</sub> > 0 and c<sub>2</sub> > 0, and an integer constant n<sub>0</sub> ≥ 1 such that,
> c<sub>1</sub> g(n) ≤ f(n) ≤ c<sub>2</sub> g(n), for n ≥ n<sub>0</sub>.

# Chapter 4 - Recursion
* Python interpreter can be dynamically reconfigured to change
the default recursive limit. This is done through use of a module named sys, which
supports a `getrecursionlimit` function and a `setrecursionlimit`. Sample usage of
those functions is demonstrated as follows:
```python
import sys
old = sys.getrecursionlimit( )  # perhaps 1000 is typical
sys.setrecursionlimit(1000000)  # change to allow 1 million nested calls
```