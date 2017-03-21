// JS allows you to not pass in parameters
// blank parameters will be set to undefined
function greet(firstname, lastname, language) {
  console.log(firstname);
  console.log(lastname);
  console.log(language);
}

greet();


// This is how we can set default parameters if none are passed in
function greet(firstname, lastname, language) {
  language = language || 'English';

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log();
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'English');


// there is also the keywork 'arguments' which holds an array like object of all the parameters
// note: 'arguments' keywork is going to be deprecated and replaced by 'spread' keyword
function greet(firstname, lastname, language) {
  if (arguments.length === 0) {
    console.log("Missing parameters!");
    return;
  }

  console.log(arguments);
}

greet('Max', 'Mears');

