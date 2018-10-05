// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max (array) {
  if (array[0] === undefined) {
    return 0;
  }
  else {
    array.sort(function (a, b) { return a - b });
    return array.pop();
  }
}

console.log(max([0]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which takes an array of numbers and returns a
// new array containing only the positive numbers in the given array.

function positives (array) {
  var posArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      posArr.push(array[i]);
    }
  }
  return posArr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens (array) {
  var evenArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    }
  }
  return evenArr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds (array) {
  var oddArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) && array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers (array) {
  var intArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      intArr.push(array[i]);
    }
  }
  return intArr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance (array) {
  const sqrArr = array.map(function (x) { return x * x });
  return sqrArr;
}
