// Perfect Number - Sum of factors of a number except itself is equal to the same number
// Ex: 6 = 1 + 2 + 3 = 6

const perfectNumber = (n) => {
  if (n <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
};

console.log(perfectNumber(6));
console.log(perfectNumber(28));
