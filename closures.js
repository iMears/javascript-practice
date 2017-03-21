// A closure is the local variables for a function -
// kept alive after the function has returned
function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + " " + name);
  }
}

// one way to run this
greet("Hi")("Max");


// another way to run it
var sayHi = greet("Hi");
sayHi("Max");



// you would expect this to return 0 1 2
// but it actually returns 3 3 3
function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      function() {
        console.log(i)
      }
    )
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



// You could fix this problem with the 'let'
function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    // the 'let' is new to ES6
    let j = i
    arr.push(
      function() {
        console.log(j)
      }
    )
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


// Or use a closure to our advantage
// returns 0 1 2
function buildFunctions3() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j)
        }
      })(i)
    )
  }
  return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();
