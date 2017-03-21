// function currying:
// take a function and create a new one with some default parameters
function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));


var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));