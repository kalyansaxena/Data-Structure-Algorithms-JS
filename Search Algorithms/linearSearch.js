// Given an array of elements and a target element to search for,
// return the index of target element, if it is found in the array else -1

const linearSearch = (arr, targetNumber) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNumber) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([2, 4, 6, 8, 10], 10));
console.log(linearSearch([-1, 3, 5, 7, 9], -1));
console.log(linearSearch([10, 30, 50, 70, 90], 20));
