---
title: Data Structure and Algorithms in Python-4
tags: [DSA]
excerpt: Notes on Chapter 7 and 8 of Data Structures and Algorithms in Python by Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser.
header:
      image: /assets/images/dsa2.png
      teaser: /assets/images/dsa.png
---

# Chapter 7 - Linked List
## Link-Based vs. Array-Based Sequences
1. **`Advantages of Array-Based Sequences`**
* Arrays provide `O(1)`-time access to an element based on an integer index.
The ability to access the k th element for any k in `O(1)` time is a hallmark
advantage of arrays. In contrast, locating the k th element
in a linked list requires `O(k)` time to traverse the list from the beginning,
or possibly `O(n − k)` time, if traversing backward from the end of a doubly
linked list.
* Array-based representations typically use proportionally **less memory** than
linked structures. This advantage may seem counterintuitive, especially given
that the length of a dynamic array may be longer than the number of elements
that it stores. Both array-based lists and linked lists are referential structures,
so the primary memory for storing the actual objects that are elements is the
same for either structure. What differs is the auxiliary amounts of memory
that are used by the two structures. For an array-based container of n elements, 
a typical worst case may be that a recently resized dynamic array has
allocated memory for `2n` object references. With linked lists, memory must
be devoted not only to store a reference to each contained object, but also
explicit references that link the nodes. So a singly linked list of length `n`
already requires `2n` references (an element reference and next reference for
each node). With a doubly linked list, there are `3n` references.

2. **`Advantages of Link-Based Sequences`**
* Link-based structures provide worst-case time bounds for their operations.
This is in contrast to the amortized bounds associated with the expansion or
contraction of a dynamic array.
When many individual operations are part of a larger computation, and we
only care about the total time of that computation, an amortized bound is as
good as a worst-case bound precisely because it gives a guarantee on the sum
of the time spent on the individual operations.
However, if data structure operations are used in a real-time system that is 
designed to provide more immediate responses (e.g., an operating system, Web
server, air traffic control system), a long delay caused by a single (amortized)
operation may have an adverse effect.
* Link-based structures support `O(1)`-time insertions and deletions at 
arbitrary positions.
This is in stark contrast to an array-based sequence. Ignoring the issue of
resizing an array, inserting or deleting an element from the end of an array-
based list can be done in constant time. However, more general insertions and
deletions are expensive. For example, with Python’s array-based list class, a
call to insert or pop with index `k` uses `O(n − k + 1)` time because of the loop
to shift all subsequent elements.
As an example application, consider a text editor that maintains a document
as a sequence of characters. Although users often add characters to the end
of the document, it is also possible to use the cursor to insert or delete one or
more characters at an arbitrary position within the document. If the 
character sequence were stored in an array-based sequence (such as a Python list),
each such edit operation may require linearly many characters to be shifted,
leading to `O(n)` performance for each edit operation. With a linked-list 
representation, an arbitrary edit operation (insertion or deletion of a character
at the cursor) can be performed in `O(1)` worst-case time, assuming we are
given a position that represents the location of the cursor.

# Chapter 8 - Trees

* Accessor methods of the Tree ADT

| --- | --- |
| T.root( ) | Return the position of the root of tree T, or None if T is empty. |
| T.is root(p) | Return True if position p is the root of Tree T. |
| T.parent(p) | Return the position of the parent of position p, or None if p is the root of T. |
| T.num children(p) | Return the number of children of position p. |
| T.children(p) | Generate an iteration of the children of position p. |
| T.is leaf(p) | Return True if position p does not have any children. |
| len(T) | Return the number of positions (and hence elements) that are contained in tree T. |
| T.is empty( ) | Return True if tree T does not contain any positions. |
| T.positions( ) | Generate an iteration of all positions of tree T. |
| iter(T) | Generate an iteration of all elements stored within tree T. |


* Tree Traversals:
1. Inorder (Left, Root, Right)
2. Preorder (Root, Left, Right)
3. Postorder (Left, Right, Root)
4. BFS