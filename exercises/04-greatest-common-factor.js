// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd (num1, num2) {
  var num1Factors = [];
  var num2Factors = [];
  for (var i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      num1Factors.push(i);
    }
  }
  for (var j = 1; j <= num2; j++) {
    if (num2 % j === 0) {
      num2Factors.push(j);
    }
  }
  var commonFactors = [];
  for (var k = 0; k < num1Factors.length; k++) {
    for (var m = 0; m < num2Factors.length; m++) {
      if (num1Factors[k] === num2Factors[m]) {
        commonFactors.push(num1Factors[k])
      }
    }
  }
  return commonFactors.pop();
}

console.log(gcd(40,20));
