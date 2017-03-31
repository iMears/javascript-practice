'use strict';

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