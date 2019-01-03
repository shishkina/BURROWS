const Calculator = require('../Calculator');

describe('Calculator', function() {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('#add', () => {
    it('adds two numbers', () => {
      const actual = calculator.add(2, 3);
      const expectation = 5;
      expect(actual).toEqual(expectation);
    });
  });

  describe('with previous answer of 5 found', () => {
    beforeEach(() => {
      calculator.add(2, 3);
    });

    describe('#add', () => {
      it('adds a number to previous answer', () => {
        expect(calculator.add(2)).toEqual(5 + 2);
        expect(calculator.add(2)).toEqual(5 + 2 + 2);
      });
    });

  });
});
