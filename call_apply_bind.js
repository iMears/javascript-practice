var person = {
  firstname: 'Max',
  lastname: 'Mears',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log();
}

// bind creates a copy of the function and lets you pass the object
// that you want 'this' to refer to
var logPersonName = logName.bind(person);
logPersonName('en');

// these do the same thing:
// logName();
// logName.call;

// unlike bind(), call() actually calls the function
// the first parameter is the 'this' and then pass in normal parameters
logName.call(person, 'en', 'es');

// exact same as call() but takes an array as the second argument
logName.apply(person, ['en', 'es']);


// this is how you would us it with an IIFE
(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log();
}).apply(person, ['english', 'spanish']);


// here is a real world scenario:
// say we have a new person2 that doesn't have the getFullName()
var person2 = {
  firstname: "Joe",
  lastname: "Nasty"
};

// we can use the first persons function and 'apply' it to our second person
console.log(person.getFullName.apply(person2, ['Slang', 'Hood']));
