// Given a number, verify if it its a palindrome number or not
// Palindrome number - If the reverse of a number is equal to the original number

const palindrome = (n) => {
  if (n <= 0) {
    return false;
  }

  if (n > 0 && n < 10) {
    return true;
  }

  // with built-in methods
  // let reverseNum = Number(String(n).split("").reverse().join(""));

  let remainder,
    reverseNum = 0,
    originalNum = n;

  while (n > 0) {
    remainder = n % 10;
    reverseNum = reverseNum * 10 + remainder;
    n = Math.floor(n / 10);
  }
  if (originalNum === reverseNum) {
    return true;
  }
  return false;
};

console.log(palindrome(123));
