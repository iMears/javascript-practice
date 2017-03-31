'use strict';

// Bob is preparing to pass IQ test. The most frequent task
// in this test is to find out which one of the given numbers
// differs from the others. Bob observed that one number usually
// differs from the others in evenness. Help Bob — to check his
// answers, he needs a program that among the given numbers finds
// one that is different in evenness, and return a position of
// this number.

// ! Keep in mind that your task is to help Bob solve a real
// IQ test, which means indexes of the elements start from 1 (not 0)

module.exports = iqTest;

function iqTest(_numbers){
  if (!_numbers) return -1;

  let evenCount = 0;
  let oddCount  = 0;
  let evenIndex, oddIndex;

  const numbers = _numbers.split(' ').map((number) => parseInt(number));

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      evenCount += 1;
      evenIndex = i;
    } else {
      oddCount += 1;
      oddIndex = i;
    }
  }

  return (oddCount < evenCount ? oddIndex : evenIndex) + 1;
}