// Factorial of a number using recursion

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 4 * 3 * 2 * 1
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1
