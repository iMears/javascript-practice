// The JS enginge puts semicolons where it thinks they should be
// in the case of return keyword this can cause a problem


//this will return undefined because it auto inserts a semicolon after the return
function getPerson() {
  return
  {
    firstname: 'Max'
  }
}

console.log(getPerson());


// this will work
function getPerson() {
  return {
    firstname: 'Max'
  };
}

console.log(getPerson());