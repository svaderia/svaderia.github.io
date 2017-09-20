---
title: Data Structure and Algorithms in Python-1
tags: [DSA, OOP]
excerpt: Notes on Chapter 1 and 2 of Data Structures and Algorithms in Python by Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser.
header:
      image: /assets/images/dsa2.png
      teaser: /assets/images/dsa.png
---


## Chapter 1 - Python Primer
* Python’s syntax relies heavily on the use of `whitespace`. Individual statements
are typically concluded with a `newline` character, although a command can extend
to another line, either with a concluding `backslash character (\)`, or if an opening
delimiter has not yet been closed,

* Python treats everything as `object`.
* Python automatically chooses the internal representation for an integer based upon the magnitude of its value.
* By default, the string must use base 10. If conversion from a different base is desired, that
base can be indicated as a second, optional, parameter. For example, the expression
`int( 7f , 16)` evaluates to the integer `127`.

* To express
a tuple of length one as a literal, a comma must be placed after the element, but
within the parentheses. For example, `(17,)` is a one-element tuple. The reason for
this requirement is that, without the trailing comma, the expression `(17)` is viewed
as a simple parenthesized numeric expression.
* Alternatively, the quote delimiter can be designated using a
backslash as a so-called escape character, as in `Don\'t worry` . Because the
backslash has this purpose, the backslash must itself be escaped to occur as a natu-
ral character of the string literal, as in `C:\\Python\\` , for a string that would be
displayed as `C:\Python\`.
* The first is that the `set` does not maintain the elements
in any particular order. The second is that only instances of `immutable` types can be
added to a Python set. Therefore, objects such as integers, floating-point numbers,
and character strings are eligible to be elements of a set.
* Python uses curly braces `{ and }` as delimiters for a set, for example, as `{17}`
or `{ red , green , blue }`. The `exception` to this rule is that `{ }` does not
represent an `empty set`; for historical reasons, it represents an `empty dictionary`
(see next paragraph). Instead, the constructor syntax `set( )` produces an empty set.
* If an iterable parameter is sent to the constructor `set()`, then the set of distinct elements
is produced. For example, `set("hello")` produces `{'h','e','l','l','o'}`.

* The constructor for the `dict` class accepts an existing mapping as a parameter,
in which case it creates a new dictionary with identical associations as the existing
one. Alternatively, the constructor accepts a sequence of key-value pairs as a parameter, 
as in `dict(pairs)` with `pairs = [('ga','Irish'), ('de','German')]`.

* The `and` and `or` operators `short-circuit`, in that they do not evaluate the second
operand if the result can be determined based on the value of the first operand.
This feature is useful when constructing Boolean expressions in which we first test
that a certain condition holds (such as a reference not being None), and then test a
condition that could have otherwise generated an error condition had the prior test
not succeeded.  
* The expression `a is b` evaluates to `True`, precisely when identifiers `a` and `b` are
`aliases` for the same object. The expression `a == b` tests a more general notion of
`equivalence`. If identifiers `a` and `b` refer to the same object, then `a == b` should also
evaluate to `True`. Yet `a == b` also evaluates to `True` when the identifiers refer to
different objects that happen to have values that are deemed equivalent. The precise
notion of equivalence depends on the data type. For example, two strings are considered equivalent if they match character for character. Two sets are equivalent if
they have the same contents, irrespective of order. In most programming situations,
the equivalence tests `==` and `!=` are the appropriate operators; use of `is` and `is not`
should be reserved for situations in which it is necessary to detect true aliasing.

* In Python, the `/` operator
designates `true` division, returning the `floating-point` result of the computation.
Thus, `27 / 4` results in the float value `6.75`. Python supports the pair of operators `//` and `%` to perform the integral calculations, with expression `27 // 4` evaluating to int value `6` (the mathematical floor of the quotient), and expression `27 % 4`
evaluating to int value `3`, the remainder of the integer division.
* Python carefully extends the semantics of `//` and `%` to cases where one or both
operands are `negative`. For the sake of notation, let us assume that variables
`n` and `m` represent respectively the `dividend` and `divisor`.
`q = n // m` and `r = n % m`. Python guarantees that `q m + r` will equal `n`. We
already saw an example of this identity with positive operands, as 6 ∗ 4 + 3 = 27.
When the divisor `m` is positive, Python further guarantees that `0 ≤ r < m`. As
a consequence, we find that `−27 // 4` evaluates to `−7` and `−27 % 4` evaluates
to `1`, as `(−7) ∗ 4 + 1 = −27`. When the divisor is negative, Python guarantees that
`m < r ≤ 0`. As an example, `27 // −4` is `−7` and `27 % −4` is `−1`, satisfying the
identity `27 = (−7) ∗ (−4) + (−1)`.
* The conventions for the `//` and `%` operators are even extended to floating-
point operands, with the expression `q = n // m` being the integral floor of the
quotient, and `r = n % m` being the “remainder” to ensure that `q m + r` equals
n. For example, `8.2 // 3.14` evaluates to `2.0` and `8.2 % 3.14` evaluates to `1.92`, as
`2.0 ∗ 3.14 + 1.92 = 8.2`.

* Bitwise operations
```
~ bitwise complement (prefix unary operator)
& bitwise and
| bitwise or
ˆ bitwise exclusive-or
<< shift bits left, filling in with zeros
>> shift bits right, filling in with sign bit
```
* Sequence Operators
  * Each of Python’s built-in sequence types (str, tuple, and list) support the following operator syntaxes:

```python
s[j]               element at index j
s[start:stop]      slice including indices [start,stop)
s[start:stop:step] slice including indices start, start + step,
                   start + 2 step, . . . , up to but not equalling or stop
s+t                concatenation of sequences
s*k                shorthand for s + s + s + ... (k times)

val in s           containment check
val not in s       non-containment check
```

* Operators for Sets and Dictionaries
  * `Sets` and `frozensets` support the following operators:
```python
key in s      containment check
key not in s  non-containment check
s1 == s2      s1 is equivalent to s2
s1 != s2      s1 is not equivalent to s2
s1 <= s2      s1 is subset of s2
s1 < s2       s1 is proper subset of s2
s1 >= s2      s1 is superset of s2
s1 > s2       s1 is proper superset of s2
s1 | s2       the union of s1 and s2
s1 & s2       the intersection of s1 and s2
s1 − s2       the set of elements in s1 but not s2
s1 ˆ s2       the set of elements in precisely one of s1 or s2
```

* Extended assignment operator:
```python
alpha = [1, 2, 3]
beta = alpha            # an alias for alpha
beta += [4, 5]          # extends the original list with two more elements
beta = beta + [6, 7]    # reassigns beta to a new list [1, 2, 3, 4, 5, 6, 7]
print(alpha)            # will be [1, 2, 3, 4, 5]
```

* Python fuctions uses `pass by reference` not `pass by value`.
An advantage to Python’s mechanism for passing information to and from a
function is that `objects` are not copied. This ensures that the invocation of a function
is efficient, even in a case where a parameter or return value is a complex object.
* We note that reassigning a new
value to a formal parameter with a function body, such as by setting `data = [ ]`,
does not alter the actual parameter; such a reassignment simply breaks the alias.

* In `print()` The separator can be customized by providing
a desired separating string as a keyword parameter, `sep`. For example, colon separated 
output can be produced as `print(a, b, c, sep=':' )`.

* By default, a trailing newline is output after the final argument. An alternative trailing string can be designated using a keyword parameter, `end`. Designating the empty string `end=''` suppresses all trailing characters.

* File operation functions.
   * `fp.seek(k)` : Change the current position to be at the k th byte of the file. 
   * `fp.tell( )` : Return the current position, measured as byte-offset from the start. 
 
* Exception Hierarchy.
  1. Exception
  2. AttributeError
  3. EOFError
  4. IOError
  5. IndexError
  6. KeyError
  7. KeyboardInterrupt
  8. NameError
  9. StopIteration
  10. TypeError
  11. ValueError
  12. ZeroDivisionError 
 
 * A second philosophy, often embraced by Python programmers, is that   
***"It is
easier to ask for forgiveness than it is to get permission."***  
In Python, this philosophy is implemented using a try-except control structure.

* The keyword, `pass`, is a statement that does nothing, yet it can serve syntactically
as a body of a control structure.
* A `try`-statement can have a `finally` clause, with a body of
code that will always be executed in the standard or exceptional cases, even when
an uncaught or re-raised exception occurs. That block is typically used for critical
cleanup work, such as closing an open file.


* An **iterator** is an object that manages an iteration through a series of values. If
variable, `i`, identifies an iterator object, then each call to the built-in function,
`next(i)`, produces a subsequent element from the underlying series, with a
StopIteration exception raised to indicate that there are no further elements.
* An **iterable** is an object, obj, that produces an iterator via the syntax `iter(obj)`.
 
* By these definitions, an instance of a list is an iterable, but not itself an iterator.
With `data = [1, 2, 4, 8]`, it is not legal to call `next(data)`. However, an iterator
object can be produced with syntax, `i = iter(data)`, and then each subsequent call
to `next(i)` will return an element of that list.
* Use of the keyword `yield` rather than `return` to indicate a result. This indicates
 to Python that we are defining a `generator`, rather than a traditional function.

* `expr1 if condition else expr2`
This compound expression evaluates to `expr1` if the condition is true, and otherwise
evaluates to `expr2`. For those familiar with Java or C++, this is equivalent to the
syntax, `condition ? expr1 : expr2`, in those languages.

* Comprehensions.
   * `[ k k for k in range(1, n+1) ]`      list comprehension
   * `{ k k for k in range(1, n+1) }`      set comprehension
   * `( k k for k in range(1, n+1) )`      generator comprehension
   * `{ k : k k for k in range(1, n+1) }`  dictionary comprehension

* Methods of RANDOM class.
   * `seed(hashable)`:           Initializes the pseudo-random number generator based upon the hash value of the parameter
   * `random( )`:                Returns a pseudo-random floating-point value in the interval [0.0, 1.0).
   * `randint(a,b)`:             Returns a pseudo-random integer in the closed interval [a, b].
   * `randrange(start, stop, step)`:  Returns a pseudo-random integer in the standard Python range indicated by the parameters.
   * `choice(seq)`:              Returns an element of the given sequence chosen pseudo-randomly.
   * `shuffle(seq)`:             Reorders the elements of the given sequence pseudo-randomly.

## Chapter 2 - OOP in Python
---
## Special methods for Class.
```python
a + b :   a.__add__(b);
a - b :   a.__sub__(b);
a * b :   a.__mul__(b);
a / b :   a.__truediv__(b);
a // b :   a.__floordiv__(b);
a % b :   a.__mod__(b);
a ** b :   a.__pow__(b);
a << b :   a.__lshift__(b);
a >> b :   a.__rshift__(b);
a & b :   a.__and__(b);
a ^ b :   a.__xor__(b);
a | b :   a.__or__(b);
a += b :   a.__iadd__(b)
a -= b :   a.__isub__(b)
a *= b :   a.__imul__(b)
etc...
+a :   a.__pos__( )
-a :   a.__neg__( )
~a :   a.__invert__( )
abs(a) :   a.__abs__( )
a < b :   a.__lt__(b)
a <= b :   a.__le__(b)
a > b :   a.__gt__(b)
a >= b :   a.__ge__(b)
a == b :   a.__eq__(b)
a != b :   a.__ne__(b)
v in a :   a.__contains__(v)
a[k] :   a.__getitem__(k)
a[k] = v :   a.__setitem__(k,v)
del a[k] :   a.__delitem__(k)
a(arg1, arg2, ...):   a.__call__(arg1, arg2, ...)
len(a) :   a.__len__( )
hash(a) :   a.__hash__( )
iter(a) :   a.__iter__( )
next(a) :   a.__next__( )
bool(a) :   a.__bool__( )
float(a) :   a.__float__( )
int(a) :   a.__int__( )
repr(a) :   a.__repr__( )
reversed(a) :   a.__reversed__( )
str(a) :   a.__str__( )
```

## Copy module of python
This module supports two functions: the `copy` function creates a `shallow copy`
of its argument, and the `deepcopy` function creates a `deep copy` of its argument.
After importing the module, we may create a deep copy for any object as follows:
`palette = copy.deepcopy(warmtones)`