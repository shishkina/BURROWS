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

  describe('#subtract', () => {
    it('subtract two numbers', () => {
      const actual = calculator.subtract(2, 3);
      const expectation = -1;
      expect(actual).toEqual(expectation);
    });
  });

  describe('#multiply', () => {
    it('multiply two numbers', () => {
      const actual = calculator.multiply(2, 3);
      const expectation = 6;
      expect(actual).toEqual(expectation);
    });
  });

  describe('#divide', () => {
    it('divide two numbers', () => {
      const actual = calculator.divide(6, 3);
      const expectation = 2;
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

    describe('#subtract', () => {
      it('subtracts a number to previous answer', () => {
        expect(calculator.subtract(2)).toEqual(5 - 2);
        expect(calculator.subtract(2)).toEqual(5 - 2 - 2);
      });
    });

    describe('#multiply', () => {
      it('multiplys a number to previous answer', () => {
        expect(calculator.multiply(2)).toEqual(5 * 2);
        expect(calculator.multiply(2)).toEqual(5 * 2 * 2);
      });
    });
  });
});
