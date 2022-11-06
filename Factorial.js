const factorial = (n) => {
  let res = 1;
  if (n === 0 || n === 1) {
    return res;
  }
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
