function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInt(5, 7));