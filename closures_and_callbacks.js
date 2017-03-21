function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(function() {
    console.log(greeting);
  }, 3000)
}

sayHiLater();


function tellMeWhenDone(callback) {
  var a = 1000; // some work
  var b = 2000; // some work

  console.log("Function done!")
  callback(); // the 'callback', it runs the function I gave it!
}

tellMeWhenDone(function() {
  console.log("Callback done!")
});