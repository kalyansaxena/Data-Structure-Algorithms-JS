// Given a sorted array of elements and a target element to search for,
// return the index of target element, if it is found in the array else -1

const binarySearch = (arr, targetNumber) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (targetNumber === arr[middleIndex]) {
      return middleIndex;
    }
    if (targetNumber < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch([2, 4, 6, 8, 10], 4));
console.log(binarySearch([-1, 3, 5, 7, 9], 7));
console.log(binarySearch([10, 30, 50, 70, 90], 20));
