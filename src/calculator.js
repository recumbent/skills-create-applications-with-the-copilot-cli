#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports the four basic arithmetic operations:
 *   - Addition       (+): sum two numbers
 *   - Subtraction    (-): find the difference between two numbers
 *   - Multiplication (*): multiply two numbers
 *   - Division       (/): divide one number by another (handles division by zero)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
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

module.exports = { add, subtract, multiply, divide };

// Only run CLI logic when executed directly (not when required as a module)
if (require.main === module) {
  // Parse CLI arguments: <number1> <operator> <number2>
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + - * /');
    process.exit(1);
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
    default:
      console.error(`Error: Unsupported operator "${operator}". Use +, -, *, or /`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
