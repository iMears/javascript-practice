function randomElement(array) {
  if (array.length == 0)
    throw new Error("The array is empty.");
  return array[Math.floor(Math.random() * array.length)]; // return random number 0..array.length-1
}

randomElement(["heads", "tails"])