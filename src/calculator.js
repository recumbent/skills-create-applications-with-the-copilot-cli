#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports the following arithmetic operations:
 *   - Addition       (+):    sum two numbers
 *   - Subtraction    (-):    find the difference between two numbers
 *   - Multiplication (*):    multiply two numbers
 *   - Division       (/):    divide one number by another (handles division by zero)
 *   - Modulo         (%):    remainder of a divided by b (handles division by zero)
 *   - Exponentiation (**):   raise a base to a given exponent
 *   - Square Root    (sqrt): square root of a number (handles negative input)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 *        node calculator.js <number> sqrt
 * Example: node calculator.js 10 + 5
 *          node calculator.js 2 ** 8
 *          node calculator.js 9 sqrt
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Returns an error message if b is zero to avoid division by zero
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Returns an error message if b is zero to avoid division by zero
function modulo(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n
// Returns an error message if n is negative (not a real number)
function squareRoot(n) {
  if (n < 0) {
    return 'Error: Square root of a negative number';
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Only run CLI logic when executed directly (not when required as a module)
if (require.main === module) {
  // Parse CLI arguments: <number1> <operator> <number2>
  const args = process.argv.slice(2);

  if (args.length < 2 || args.length > 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('       node calculator.js <number> sqrt');
    console.error('Operators: + - * / % **');
    process.exit(1);
  }

  // Handle single-argument operations: <number> sqrt
  if (args.length === 2) {
    const n = parseFloat(args[0]);
    const op = args[1];
    if (isNaN(n)) {
      console.error('Error: Operand must be a valid number.');
      process.exit(1);
    }
    if (op === 'sqrt') {
      console.log(`sqrt(${n}) = ${squareRoot(n)}`);
    } else {
      console.error(`Error: Unsupported single-argument operator "${op}". Use: sqrt`);
      process.exit(1);
    }
    process.exit(0);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;

  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
    case '%':
      result = modulo(a, b);
      break;
    case '**':
      result = power(a, b);
      break;
    default:
      console.error(`Error: Unsupported operator "${operator}". Use +, -, *, /, %, **`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
