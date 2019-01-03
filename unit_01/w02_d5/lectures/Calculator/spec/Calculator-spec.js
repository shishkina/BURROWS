describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('#add', () => {
    it('returns the sumation of the two numbers', () =>{
      const actual = calc.add(2, 3);
      const expectation = 5;
      expect(actual).toEqual(expectation);
    });
  });

  describe('#dance', () => {
    it('return a nice dancing statemnet', ()=> {
      const actual = calc.dance();
      const expectation = 'I am a calclator... I am dancin';
      expect(actual).toEqual(expectation);
    });
  });

  describe('#subtract', () => {
    it('returns the difference of two numbers', () => {
      const actual = calc.subtract(4, 1);
      const expectation = 3;
      expect(actual).toEqual(expectation);
    });
  });

  describe('#multiply', () => {
    it('returns the product of two numbers', () => {
      const actual = calc.multiply(2, 3);
      const expectation = 6;
      expect(actual).toEqual(expectation);
    });
  });


  describe('#displayTheUnicorn', () => {
    it('returns charlie several times', () => {
      const actual = calc.displayTheUnicorn(2);
      const expectation = "Charlie Charlie";
      expect(actual).toEqual(expectation);
    });
  });


});
