---
title: Data Structure and Algorithms in Python-3
tags: [DSA, Stack, Queue, List]
excerpt: Notes on Chapter 5 and 6 of Data Structures and Algorithms in Python by Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser.
header:
      image: /assets/images/dsa2.png
      teaser: /assets/images/dsa.png
---

## Chapter 5 - Array-Based Sequences
* Python internally represents each
Unicode character with `16 bits` (i.e., 2 bytes). Therefore, a six-character string, such
as __SAMPLE__ , would be stored in `12` consecutive bytes of memory.
* Python represents a list or tuple instance using an internal storage
mechanism of an array of object **references**. At the lowest level, what is stored
is a consecutive sequence of memory addresses at which the elements of the sequence reside.
* Although the relative size of the individual elements may vary, the number of
bits used to store the memory address of each element is fixed (e.g., 64-bits per
address).
* When you compute a slice of a list, the result is a new
list instance, but that new list has references to the same elements that are in the
original list.
> Images below shows some of properties of list.  

----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_018.png)
----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_019.png)
----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_020.png)
----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_021.png)
----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_022.png)
----------------------------------------------------------------------------------------------

* Primary support for compact arrays is in a module named `array`. That module
defines a class, also named `array`, providing compact storage for arrays of primitive
data types. 
* The constructor for the array class requires a **type code** as a first parameter,
which is a character that designates the type of data that will be stored in the array.
As a tangible example, the type code, `i` , designates an array of **(signed) integers**,
typically represented using at least **16**-bits each.
```python
primes = array( i , [2, 3, 5, 7, 11, 13, 17, 19])
```
* The type code allows the interpreter to determine precisely how many bits are
needed per element of the array. The type codes supported by the `array` module,
as shown in Table 5.1.

![image1](/assets/images/dsa/Selection_023.png)

* Python’s list class presents a more interesting abstraction. Although a list has a
particular length when constructed, the class allows us to add elements to the list,
with no apparent limit on the overall capacity of the list. To provide this abstraction,
Python relies on an algorithmic sleight of hand known as a **dynamic array**.  
The first key to providing the semantics of a dynamic array is that a list instance
maintains an underlying array that often has greater capacity than the current length
of the list. For example, while a user may have created a list with five elements,
the system may have reserved an underlying array capable of storing eight object
references (rather than only five). This extra capacity makes it easy to append a
new element to the list by using the next available cell of the array.  
If a user continues to append elements to a list, any reserved capacity will
eventually be exhausted. In that case, the class requests a new, larger array from the
system, and initializes the new array so that its prefix matches that of the existing
smaller array. At that point in time, the old array is no longer needed, so it is
reclaimed by the system. Intuitively, this strategy is much like that of the hermit
crab, which moves into a larger shell when it outgrows its previous one.

> Tuples and Strings

----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_024.png)
> Lists

----------------------------------------------------------------------------------------------
![image1](/assets/images/dsa/Selection_025.png)

* In practice, the ***extend*** method is preferable to repeated calls to ***append*** because
the constant factors hidden in the asymptotic analysis are significantly smaller. The
greater efficiency of ***extend*** is threefold.  
Finally, increased efficiency of ***extend*** comes from
the fact that the resulting size of the updated list can be calculated in advance. If the
second data set is quite large, there is some risk that the underlying dynamic array
might be resized multiple times when using repeated calls to ***append***. With a single
call to ***extend***, at most one resize operation will be performed.
* Experiments should show that the ***list comprehension*** syntax is significantly faster
than building the list by repeatedly ***appending***.
* It is a common Python idiom to initialize a list of constant values
using the multiplication operator, as in `[0]*n` to produce a list of length n with
all values equal to zero. Not only is this succinct for the programmer; it is more
efficient than building such a list incrementally.

> Strings

* The analysis for many behaviors is quite intuitive. For example, methods that
produce a new string (e.g., capitalize, center, strip) require time that is linear in
the length of the string that is produced. Many of the behaviors that test Boolean
conditions of a string (e.g., islower) take **O(n)** time, examining all n characters in the
worst case, but short circuiting as soon as the answer becomes evident (e.g., islower
can immediately return False if the first character is uppercased). The comparison
operators (e.g., ==, <) fall into this category as well.

## Chapter 6 - Stacks, Queues, and Deques

### Stack
* A stack is a collection of objects that are inserted and removed according to the
last-in, first-out (LIFO) principle. A user may insert objects into a stack at any
time, but may only access or remove the most recently inserted object that remains
(at the so-called “top” of the stack).
* Following methods are supported by `stack` ADT.
    * `S.push(e)`: Add element e to the top of stack S.
    * `S.pop( )`: Remove and return the top element from the stack S; an error occurs if the stack is empty.
    * `S.top( )`: Return a reference to the top element of stack S, without removing it; an error occurs if the stack is empty.
    * `S.is empty( )`: Return True if stack S does not contain any elements.
    * `len(S)`: Return the number of elements in stack S;

* Realization of a stack S as an adaptation of a Python list L.  


| Stack Method | Realization with Python list |
| --- | --- |
| S.push(e) | L.append(e) |
| S.pop( ) | L.pop()|
| S.top( ) | L[-1] |
| S.is_empty( ) |  len(L) == 0 | 
| len(S) | len(L) |

* `S.push(e)` and `S.pop( )` has amortized cost of `O(1)`.  `S.top( )`, `S.is_empty( )`, `len(S)` has cost of `O(1)`.

* Following Exception is used when we want to raise empty Exception.  


```python
class Empty(Exception):
”””Error attempting to access an element from an empty container.”””
pass
```
* Implementation of Stack as Python ADT class.  


```python
class ArrayStack:
  """LIFO Stack implementation using a Python list as underlying storage."""

  def __init__(self):
    """Create an empty stack."""
    self._data = []                       # nonpublic list instance

  def __len__(self):
    """Return the number of elements in the stack."""
    return len(self._data)

  def is_empty(self):
    """Return True if the stack is empty."""
    return len(self._data) == 0

  def push(self, e):
    """Add element e to the top of the stack."""
    self._data.append(e)                  # new item stored at end of list

  def top(self):
    """Return (but do not remove) the element at the top of the stack.

    Raise Empty exception if the stack is empty.
    """
    if self.is_empty():
      raise Empty('Stack is empty')
    return self._data[-1]                 # the last item in the list

  def pop(self):
    """Remove and return the element from the top of the stack (i.e., LIFO).

    Raise Empty exception if the stack is empty.
    """
    if self.is_empty():
      raise Empty('Stack is empty')
    return self._data.pop()               # remove last item from list

if __name__ == '__main__':
  S = ArrayStack()                 # contents: [ ]
  S.push(5)                        # contents: [5]
  S.push(3)                        # contents: [5, 3]
  print(len(S))                    # contents: [5, 3];    outputs 2
  print(S.pop())                   # contents: [5];       outputs 3
  print(S.is_empty())              # contents: [5];       outputs False
  print(S.pop())                   # contents: [ ];       outputs 5
  print(S.is_empty())              # contents: [ ];       outputs True
  S.push(7)                        # contents: [7]
  S.push(9)                        # contents: [7, 9]
  print(S.top())                   # contents: [7, 9];    outputs 9
  S.push(4)                        # contents: [7, 9, 4]
  print(len(S))                    # contents: [7, 9, 4]; outputs 3
  print(S.pop())                   # contents: [7, 9];    outputs 4
  S.push(6)                        # contents: [7, 9, 6]
  S.push(8)                        # contents: [7, 9, 6, 8]
  print(S.pop())                   # contents: [7, 9, 6]; outputs 8
```

### Queues

* Another fundamental data structure is the queue. It is a close “cousin” of the stack,
as a queue is a collection of objects that are inserted and removed according to the
first-in, first-out (FIFO) principle.
* Following methods are supported by `queue` ADT.  
    * `Q.enqueue(e)`: Add element e to the back of queue Q.
    * `Q.dequeue( )`: Remove and return the first element from queue Q; an error occurs if the queue is empty.
    * `Q.first( )`: Return a reference to the element at the front of queue Q, without removing it; an error occurs if the queue is empty.
    * `Q.is_empty( )`: Return True if queue Q does not contain any elements.
    * `len(Q)`: Return the number of elements in queue Q;

* Implementation of Queues as python ADT class.

```python
class ArrayQueue:
  """FIFO queue implementation using a Python list as underlying storage."""
  DEFAULT_CAPACITY = 10          # moderate capacity for all new queues

  def __init__(self):
    """Create an empty queue."""
    self._data = [None] * ArrayQueue.DEFAULT_CAPACITY
    self._size = 0
    self._front = 0

  def __len__(self):
    """Return the number of elements in the queue."""
    return self._size

  def is_empty(self):
    """Return True if the queue is empty."""
    return self._size == 0

  def first(self):
    """Return (but do not remove) the element at the front of the queue.

    Raise Empty exception if the queue is empty.
    """
    if self.is_empty():
      raise Empty('Queue is empty')
    return self._data[self._front]

  def dequeue(self):
    """Remove and return the first element of the queue (i.e., FIFO).

    Raise Empty exception if the queue is empty.
    """
    if self.is_empty():
      raise Empty('Queue is empty')
    answer = self._data[self._front]
    self._data[self._front] = None         # help garbage collection
    self._front = (self._front + 1) % len(self._data)
    self._size -= 1
    return answer

  def enqueue(self, e):
    """Add an element to the back of queue."""
    if self._size == len(self._data):
      self._resize(2 * len(self.data))     # double the array size
    avail = (self._front + self._size) % len(self._data)
    self._data[avail] = e
    self._size += 1

  def _resize(self, cap):                  # we assume cap >= len(self)
    """Resize to a new list of capacity >= len(self)."""
    old = self._data                       # keep track of existing list
    self._data = [None] * cap              # allocate list with new capacity
    walk = self._front
    for k in range(self._size):            # only consider existing elements
      self._data[k] = old[walk]            # intentionally shift indices
      walk = (1 + walk) % len(old)         # use old size as modulus
    self._front = 0                        # front has been realigned
```

### Double-Ended Queues
* We next consider a queue-like data structure that supports insertion and deletion
at both the front and the back of the queue. Such a structure is called a double-
ended queue, or `deque`, which is usually pronounced “deck” to avoid confusion
with the dequeue method of the regular queue ADT, which is pronounced like the
abbreviation “D.Q.”

* Following methods are supported by `deque` ADT.
    * `D.add first(e)`: Add element e to the front of deque D.
    * `D.add last(e)`: Add element e to the back of deque D.
    * `D.delete first( )`: Remove and return the first element from deque D; an error occurs if the deque is empty.
    * `D.delete last( )`: Remove and return the last element from deque D; an error occurs if the deque is empty.
    * `D.first( )`: Return (but do not remove) the first element of deque D; an error occurs if the deque is empty.
    * `D.last( )`: Return (but do not remove) the last element of deque D; an error occurs if the deque is empty.
    * `D.is_empty( )`: Return True if deque D does not contain any elements.
    * `len(D)`: Return the number of elements in deque D;
* An implementation of a `deque` class is available in Python’s standard `collections`
module.
![image1](/assets/images/dsa/Selection_026.png)