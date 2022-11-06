// Given a number 'n', find first 'n' fibonacci sequence of elements

const fibonacci = (n) => {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  let res = [0, 1];

  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }

  return res;
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(10));
