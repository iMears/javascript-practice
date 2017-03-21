function Person(name, age, shirtSize) {
  this.name = name;
  this.age = age;
  this.shirtSize = shirtSize;

  this.sayBye = function() {
    console.log("Bye, ", this.name);
  };
}

Person.prototype.sayHi = function() {
  console.log("hello, " + this.name)
};


var max = new Person('Max', 27, 'xl');
var jose = new Person('Jose', 30, 'xxxl')

max.sayHi();
jose.sayHi();

max.sayBye();
jose.sayBye();

