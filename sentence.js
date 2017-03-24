function findClosingParen(sentence, firstIndex) {
  let count = 1;

  for (let i = firstIndex + 1; i < sentence.length; i++) {
    if (sentence[i] === '(') count += 1;
    if (sentence[i] === ')') count -= 1;

    console.log('count', count, 'sentence[i]', sentence[i]);

    if (count === 0) return i;
  }
}

const sentence = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
const firstIndex = 10;

console.log(findClosingParen(sentence, 10))
