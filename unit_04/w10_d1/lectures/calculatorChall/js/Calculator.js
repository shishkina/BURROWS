class Calculator {
  add(x, y = this.previousAnswer) {
    this.previousAnswer = x + y;
    return this.previousAnswer;
  }

  subtract(x, y) {
    if (!y && this.previousAnswer) {
      this.previousAnswer = this.previousAnswer - x;
    } else {
      this.previousAnswer = x - y;
    }
    return this.previousAnswer;
  }

  multiply(x, y = this.previousAnswer) {
    this.previousAnswer = x * y;
    return this.previousAnswer;
  }

  divide(x, y) {
    if (!y && this.previousAnswer) {
      this.previousAnswer = this.previousAnswer / x;
    } else {
      this.previousAnswer = x / y;
    }
    return this.previousAnswer;
  }
}

module.exports = Calculator;
