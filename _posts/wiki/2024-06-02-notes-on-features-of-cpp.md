---
title: "Notes on features of CPP"
tags: [cpp, notes]
excerpt: "I know very little about these exotic features"
---

While I am doing the [CMU 15-445/645 :: Intro to Database Systems](https://15445.courses.cs.cmu.edu/) course, 
I need to learn C++.   
I am using the [cmu-db/15445-bootcamp](https://github.com/cmu-db/15445-bootcamp "A basic introduction to coding in modern C++") repository to familiarise myself.

This is a very nice resource, but I do want to dig a little deeper into some concepts and I would write down 
the notes for those as a learn more. 


## Value Categories
Before learning the move semantics, we need to learn about the Value Categories.
I don't understand is well enough to explain it better. So I would suggest you watch the talk.

```
             expression
             /       \
          glvalue   rvalue
          /     \  /     \
      lvalue   xvalue    prvalue
```

My vague understanding is :
* `lvalue` : refers to something that is stored in memory, often appers on the left side of the expresstion.
`x` in this expression `int x = 10` is `lvalue`.  
* `rvalue` : anything that is not `lvalue`, `10` is `ravlue` in `int x = 10`.  
* `xvalue` : refers to expiring `lvalue`, basically something which is stored on memory, but the program doesn't have a way
to refer to the memory location yet, so the reference will be garbage collected after the scope is destroyed.  

### References
* [Back to Basics: Understanding Value Categories - Ben Saks - CppCon 2019 - YouTube](https://www.youtube.com/watch?v=XS2JddPq7GQ)

## Move semantics
x

### Reference
