function greet(firstname, lastname, language) {
  if (language === 'en') {
    console.log("hello " + firstname + " " + lastname);
  }

  if (language === 'sp') {
    console.log("hola " + firstname + " " + lastname);
  }
};

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
 greet(firstname, lastname, 'sp');
}

greetEnglish("Max", "Mears");
greetSpanish("Max", "Mears");
