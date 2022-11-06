// Given a string, verify if it its a palindrome string or not
// Palindrome string - If the reverse of a string is equal to the original string

const palindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(palindrome("radar"));
console.log(palindrome("level"));
