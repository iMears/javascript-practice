// function statement
function greet(name) {
  console.log("hello " + name);
}
greet("Max");


// function expression
var greetFunc = function(name) {
  console.log("hello " + name);
};
greetFunc("Jordan");


// Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
  return "hello " + name;
}("John");

console.log(greeting);


// us parentheses () wrap a function so that it doesn't
// get evaluate as a function statement
// this is a typical use of an IIFE
var firstname = "Joe";

(function(name) {
  console.log("Hello " + name);
})(firstname);