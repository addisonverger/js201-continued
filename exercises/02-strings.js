// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (string) {
  var reverseString = [];
  var j = string.length;
  for (var i = 0; i < j; i++) {
    reverseString.push(string.charAt(i));
  }
  reverseString.reverse();
  return reverseString.join('');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (string) {
  var stringArr = string.split(' ');
  var longestWordLength = 0;
  var longestWord = '';
  for (var i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length > longestWordLength) {
      longestWordLength = stringArr[i].length;
      longestWord = stringArr[i];
    }
  }
  return longestWord;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (string) {
  var stringArr = string.split(' ');
  var niceArr = [];
  for (var i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== 'heck' &&
    stringArr[i] !== 'darn' &&
    stringArr[i] !== 'dang' &&
    stringArr[i] !== 'crappy') {
      niceArr.push(stringArr[i]);
    }
  }
  return niceArr.join(' ');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll (string) {
  var stringLowerCase = string.toLowerCase();
  var stringArr = stringLowerCase.split(' ');
  for (var i = 0; i < stringArr.length; i++) {
    stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
  }
  return stringArr.join(' ');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split (string, delimiter) {
  var splitArr = [];
  for (var i = 0; i < string.length; i++) {
    splitArr.push(string.substring(0,string.indexOf(delimiter)));
    string = string.slice(string.indexOf(delimiter));
  }
  return splitArr;
}

console.log(split('a-b-c', '-'));
