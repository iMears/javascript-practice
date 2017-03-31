'use strict';

const expect = require('chai').expect;
const iqTest = require('./index');

describe('iqTest()', () => {
  context('with invalid input', () => {
    it('returns -1 when input is empty string', () => {
      const result = iqTest('');
      expect(result).to.equal(-1);
    });
  })

  context('with valid input', () => {
    it('returns odd numbers index', () => {
      const result = iqTest('2 4 7 8 10');
      expect(result).to.equal(3);
    });

    it('returns odd numbers index', () => {
      const result = iqTest('1 2 2');
      expect(result).to.equal(1);
    });

    it('returns correct index given numbers', () => {
      const result = iqTest('4 2 2 7 4');
      expect(result).to.equal(4);
    });
  });
});
