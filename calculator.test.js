// calculator.test.js
const Calculator = require('./calculator');
const calc = new Calculator();

test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calc.subtract(5, 3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(calc.multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
    expect(calc.divide(6, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
    expect(() => calc.divide(1, 0)).toThrow('Cannot divide by zero');
});
