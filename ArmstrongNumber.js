// Armstrong Number - Sum of cubes of individual digits of a number is equal to the same number
// 153 = cube(1) + cube(5) + cube(3) = 153

const cube = (n) => {
  return n ** 3;
};

const armstrongNumber = (n) => {
  if (n < 0) {
    return false;
  }

  let sum = 0;
  let originalNumber = n;
  let remainder;
  while (n > 0) {
    remainder = n % 10;
    sum += cube(remainder);
    n = Math.floor(n / 10);
  }
  if (originalNumber === sum) {
    return true;
  }
  return false;
};

console.log(armstrongNumber(0));
console.log(armstrongNumber(1));
console.log(armstrongNumber(153));
console.log(armstrongNumber(370));
