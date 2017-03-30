const order = require('./index.js');
const expect = require('chai').expect;

describe('order()', () => {
  context('with invalid input', () => {
    it('returns an empty string when the input is an empty string', () => {
      const result = order('');
      expect(result).to.equal('');
    });
  });

  context('with valid input', () => {
    it('returns sorted sentence', () => {
      const result = order('is2 Thi1s T4est 3a');
      expect(result).to.equal('Thi1s is2 3a T4est');
    })

    it('returns sorted sentence', () => {
      const result = order('4of Fo1r pe6ople g3ood th5e the2');
      expect(result).to.equal('Fo1r the2 g3ood 4of th5e pe6ople');
    });

    it('returns sorted sentence', () => {
      const result = order('Fo1r pe6ople 4of g3ood th5e the2');
      expect(result).to.equal('Fo1r the2 g3ood 4of th5e pe6ople')
    });

    it('returns sorted sentence with leading space', () => {
      const result = order(' Fo1r pe6ople 4of g3ood th5e the2');
      expect(result).to.equal('Fo1r the2 g3ood 4of th5e pe6ople')
    });
  });
});
