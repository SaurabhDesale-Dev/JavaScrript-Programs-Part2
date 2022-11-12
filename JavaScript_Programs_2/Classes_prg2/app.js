// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

class Calculator {
  // Write functions to add(), subtract(), multiply() and divide()
  constructor(val1, val2) {
    this.val1 = val1;
    this.val12 = val2;
  }
  add(val1, val2) {
    return val1 + val2;
  }
  subtract(val1, val2) {
    return val1 - val2;
  }
  multiply(val1, val2) {
    return val1 * val2;
  }
  divide(val1, val2) {
    return val1 / val2;
  }
}

let calculator = new Calculator();

console.log(calculator.sub(10, 5));
