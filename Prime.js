// Given a number, verify if number is a prime or not
// Prime number - A number which has only two factors i.e 1 & itself

const Prime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(Prime(2));
console.log(Prime(5));
console.log(Prime(7));
console.log(Prime(9));
console.log(Prime(10));
console.log(Prime(13));
