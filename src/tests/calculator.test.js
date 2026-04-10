/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover the four basic arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/) including division by zero edge case
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
