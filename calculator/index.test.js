const calculator = require('../calculator');
const expect     = require('chai').expect;

describe('Calculator', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      expect(calculator.add(7, 5)).to.eq(12);
    });
  });

  describe('subtract', () => {
    it('subtracts one number from another', () => {
      expect(calculator.subtract(7, 5)).to.eq(2);
    });
  });
});