/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover all arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/) including division by zero edge case
 *   - Modulo         (%) including division by zero edge case
 *   - Exponentiation (**)
 *   - Square Root    (sqrt) including negative number edge case
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adds zero to a number', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// --- Subtraction ---
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts positive numbers', () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test('subtracts resulting in a negative number', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts zero from a number', () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test('subtracts a number from itself', () => {
    expect(subtract(7, 7)).toBe(0);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// --- Multiplication ---
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies by one', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division ---
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides negative numbers', () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test('divides a negative by a positive', () => {
    expect(divide(-9, 3)).toBe(-3);
  });

  test('divides zero by a number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('returns error message when dividing by zero', () => {
    expect(divide(5, 0)).toBe('Error: Division by zero');
  });

  test('returns error message when dividing zero by zero', () => {
    expect(divide(0, 0)).toBe('Error: Division by zero');
  });
});

// --- Modulo ---
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('modulo with larger divisor', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('modulo of negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo of negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo with zero dividend', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: modulo by zero
  test('returns error message when divisor is zero', () => {
    expect(modulo(5, 0)).toBe('Error: Division by zero');
  });
});

// --- Exponentiation (power) ---
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises base to a positive exponent', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('any number to the power of zero is 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('any number to the power of 1 is itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a negative base to an even exponent', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises base to a fractional exponent', () => {
    expect(power(27, 1 / 3)).toBeCloseTo(3);
  });

  test('zero to any positive power is zero', () => {
    expect(power(0, 5)).toBe(0);
  });
});

// --- Square Root ---
describe('squareRoot', () => {
  // Example from image: √16 = 4
  test('√16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 9 = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('square root of 2.25 = 1.5', () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  test('square root of 0 = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 = 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  // Edge case: square root of a negative number
  test('returns error message for negative input', () => {
    expect(squareRoot(-4)).toBe('Error: Square root of a negative number');
  });

  test('returns error message for any negative input', () => {
    expect(squareRoot(-100)).toBe('Error: Square root of a negative number');
  });
});
