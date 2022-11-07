// Strong Number - Sum of factorials of individual digits of a number is equal to the same number
// 145 = 1! + 4! + 5! = 145

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const strongNumber = (n) => {
  if (n <= 0) {
    return false;
  }

  let sum = 0;
  let originalNumber = n;
  let remainder;
  while (n > 0) {
    remainder = n % 10;
    sum += factorial(remainder);
    n = Math.floor(n / 10);
  }
  if (originalNumber === sum) {
    return true;
  }
  return false;
};

console.log(strongNumber(1));
console.log(strongNumber(2));
console.log(strongNumber(145));
