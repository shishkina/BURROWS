class Calculator {
  add(x, y) {
    return x + y;
  }
  dance() {
    return 'I am a calclator... I am dancin';
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  displayTheUnicorn(n) {
    let unicornMessage = '';
    for (let i = 0; i < n-1; i++) {
      unicornMessage += 'Charlie ';
    }
    return unicornMessage + 'Charlie';
  }
}
