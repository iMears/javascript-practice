// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

module.exports = order;

function order(words) {
  if (words === '') return '';
  if (words.slice(0, 1) === ' ') words = words.slice(1);

  let result = [];

  words.split(' ').forEach((word) => {
    const index = parseInt(word.match(/\d+/)[0]);
    result[index] = word;
  });

  return result.join(' ').slice(1);
}
