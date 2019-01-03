#More JavaScript!

### Pseudo-coding

**Let's Solve Some Problems!**
Think about Pseudo-coding each of these before you dive into coding.

Solve these problems in an app.js file.

### Problem 1: Big or Small String?
Write a function called `bigOrSmallString` that accepts one argument, a string, and returns "This word is big" if the strings length is greater than 10, and "This string is small" otherwise.

### Problem 2: Odd or Even String Length?
Write a function called `oddOrEvenString` that accepts one argument, a string, and returns "This string's length is odd" if the length is an odd number, and "This string length is totally even" if the string length is even.

### Problem 3: Median
Write a function that takes an array as a parameter. The function should return the median number in an array.

Example: Given the following array:

  [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Use some kind of sorting method to put the values in order first, then somehow access the median element, somehow using the length of the array...somehow.

### Problem 4: Prime Check
Write a function called `primeChecker` that accepts one argument, a number. Use a loop to iterate through and print the numbers 1 to 100. If a number is a prime number, print "Divide this!", as well as the number itself.

Calling `primeChecker(10);` would return the following:

```bash
1
Divide this!
2
Divide this!
3
Divide this!
4
5
Divide this!
6
7
Divide this!
8
9
10
```

### Problem 5: Positive or Negative?
Write a function called `posNeg`. Given 2 integers, return true if one is negative and one is positive.

```javascript
posNeg(1, -1)
// true
posNeg(-1, 1)
// true
posNeg(-4, -5)
// false
```

### Problem 6: Double X Counter
Write a function called `countXx`. Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

```javascript
  countXx("abcxx")
  // 1
  countXx("xxx")
  // 2
  countXx("xxxx")
  // 3
```

### Problem 7: Initials
Write a function called `initials` that accepts one argument, a string. Given a person's name, return their initials.
  - It should work both with and without a middle name being provided.

```javascript
initials('Neil Patrick Harris');
// NPH
```


