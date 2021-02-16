// Chapter 2

/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

console.log("Looping a triangle");
console.log("==================================================");

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i) + "\n");
}

console.log("==================================================\n");

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a
significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/

console.log("FizzBuzz");
console.log("==================================================");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("==================================================\n");

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size =
8 and change the program so that it works for any size, outputting a grid of
the given width and height.
*/

console.log("Chessboard");
console.log("==================================================");

const size = 8;
for (let r = 0; r < size; r++) {
  let pattern = "";

  for (let c = 0; c < size; c++) {
    if (r % 2 == 0) {
      pattern += c % 2 == 0 ? " " : "#";
    } else {
      pattern += c % 2 == 0 ? "#" : " ";
    }
  }

  console.log(pattern);
}

console.log("==================================================\n");

// Chapter 3

/*
Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

console.log("Minimum");
console.log("==================================================");

function min(x, y) {
  return Math.min(x, y);
}

// const min = (x, y) => Math.min(x,y);

// const min = function(x,y) {
//   return Math.min(x, y);
// }

console.log("Min of 0 and 10 is", min(0, 10));
console.log("Min of 0 and -10 is", min(0, -10));

console.log("==================================================\n");

/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and
return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way
to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
*/

console.log("Recursion");
console.log("==================================================");

function isEven(n) {
  if (n < 0) return false;
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log("==================================================\n");

/*
Bean counting

You can get the Nth character, or letter, from a string by writing
"string"[N]. The returned value will be a string containing only one
character (for example, "b"). The first character has position 0, which
causes the last one to be found at position string.length - 1. In other
words, a two-character string has length 2, and its characters have positions
0 and 1.

Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make
use of this new function.

// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/

console.log("Bean counting");
console.log("==================================================");

// initial
// function countBs(s) {
//   // return s
//   //   .split("")
//   //   .reduce((count, c) => (c === "B" ? count + 1 : count), 0);

//   let count = 0;
//   for (const c of s) {
//     if (c === 'B') count++;
//   }
//   return count;
// }

function countChar(_string, _char) {
  return _string
    .split("")
    .reduce((count, c) => (c === _char ? count + 1 : count), 0);
}

// rewrite
function countBs(s) {
  return countChar(s, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

console.log("==================================================\n");

// Chapter 4

/*
The sum of a range

The introduction of this book alluded to the following as
a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10))); Write a range function that takes two
arguments, start and end, and returns an array containing all the numbers
from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum
of these numbers. Run the example program and see whether it does indeed
return 55.

As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/

console.log("The sum of a range");
console.log("==================================================");

// Using a generator function
// function* rangeGenerator(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

// function range(start, end) {
//   return Array.from(rangeGenerator(start, end));
// }

// Initial version
// function range(start, end) {
//   const range = [];
//   for (let i = start; i <= end; i++) {
//     range.push(i);
//   }
//   return range;
// }

function range(start, end, step = 1) {
  const range = [];

  if (start > end && step < 0) {
    for (let i = start; i >= end; i = i + step) {
      range.push(i);
    }
  } else {
    for (let i = start; i <= end; i = i + step) {
      range.push(i);
    }
  }

  return range;
}

function sum(numbers) {
  return numbers.reduce((total, n) => total + n);
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

console.log("==================================================\n");

/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as argument and produces a new array that has the same elements in the
inverse order. The second, reverseArrayInPlace, does what the reverse method
does: it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more
situations? Which one runs faster?

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

console.log("Reversing an array");
console.log("==================================================");

// Using reduceRight
// function reverseArray(a) {
//   return a.reduceRight((result, e) => {
//     result.push(e);
//     return result
//   }, []);
// }

function reverseArray(a) {
  const reversed = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversed.push(a[i]);
  }
  return reversed;
}

// function reverseArrayInPlace(orig) {
//   const copy = orig.slice();
//   for (let i = 0; i < orig.length; i++) {
//     orig[i] = copy[orig.length - 1 - i];
//   }
// }

// Without using slice or reverseArray
function reverseArrayInPlace(orig) {
  // if length is 5 then 2 (third element) since floor of 2.5 is 2
  // if length is 4 then 2 (third element)
  const oneAfterMidIndex = Math.floor(orig.length / 2);

  // Swap mirror elements without touching middle element (one without a mirror)
  // if there is one
  //
  // Given [1, 2, 3, 4, 5] do,
  // 1. swap 1 & 5
  // 2. swap 2 & 4
  for (let i = 0; i < oneAfterMidIndex; i++) {
    const mirrorElement = orig[orig.length - 1 - i];
    orig[orig.length - 1 - i] = orig[i];
    orig[i] = mirrorElement;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("==================================================");

/*
A list

Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with
array). A list is a nested set of objects, with the first object holding a
reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

A nice thing about lists is that they can share parts of their structure. For
example, if I create two new values {value: 0, rest: list} and {value: -1,
rest: list} (with list referring to the binding defined earlier), they are
both independent lists, but they share the structure that makes up their last
three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to
the front of the input list, and nth, which takes a list and a number and
returns the element at the given position in the list (with zero referring to
the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

console.log("A list");
console.log("==================================================");

// Recursive versions
// function arrayToList(items) {
//   const [value, ...rest] = items;

//   if (value === undefined) {
//     return null;
//   }

//   return { value, rest: arrayToList(rest) };
// }

// function listToArray(list) {
//   if (!list) return [];
//   const { value, rest } = list;
//   return [value].concat(listToArray(rest));
// }

// function nth(list, index) {
//   if (!list) return undefined;
//   if (index === 0) return list.value;
//   const { rest } = list;
//   return nth(rest, index - 1);
// }

function prepend(value, list) {
  return { value, rest: list };
}

function arrayToList(items) {
  let currentItem = null;

  for (let i = items.length - 1; i >= 0; i--) {
    currentItem = { value: items[i], rest: currentItem };
  }

  return currentItem === null ? undefined : currentItem;
}

function listToArray(list) {
  if (!list) return [];

  const array = [];

  let _list = list;
  do {
    const { value, rest } = _list;
    array.push(value);
    _list = rest;
  } while (!!_list);

  return array;
}

function nth(list, index) {
  if (!list) return undefined;
  if (index === 0) return list.value;

  let i = 1,
    _list = list.rest;

  while (i < index) {
    _list = _list.rest;
    i++;
  }

  return _list.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([]));
// → undefined
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 30
console.log(nth(arrayToList([]), 2));
// → undefined

console.log("==================================================");

/*
Deep comparison

The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if
they are the same value or are objects with the same properties, where the
values of the properties are equal when compared with a recursive call to
deepEqual.

To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison. But
you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the
properties of objects to compare them.
*/

console.log("Deep comparison");
console.log("==================================================");

// Your code here.

function deepEqual(obj1, obj2) {
  // If either one of the two is not an object then use ===
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // If either one of the two is a null then use ===
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // If both are objects but their number of properties don't match then they're
  // not equal
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  return Object.keys(obj1).every((prop) => deepEqual(obj1[prop], obj2[prop]));
}

console.log(deepEqual(null, undefined));
// false
console.log(deepEqual(1, {}));
// false
console.log(deepEqual(null, null));
// true
console.log(deepEqual({ a: "a" }, { a: "a", b: "b" }));
// false
console.log(deepEqual({ a: "a" }, { a: "c" }));
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual([1, 2], [1, 2]));
// → true

console.log("==================================================");

// Chapter 5

/*
Flattening

Use the reduce method in combination with the concat method to “flatten” an
array of arrays into a single array that has all the elements of the original
arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/

console.log("Flattening");
console.log("==================================================");

let arrays = [[1, 2, 3], [4, 5], [6]];
function flat(arrayOfArrays) {
  return arrayOfArrays.reduce((flattened, arr) => flattened.concat(arr));
}
console.log(flat(arrays));

console.log("==================================================");
