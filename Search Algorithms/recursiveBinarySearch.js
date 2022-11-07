// Given a sorted array of elements and a target element to search for,
// return the index of target element, if it is found in the array else -1

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    rightIndex = middleIndex - 1;
    return search(arr, target, leftIndex, rightIndex);
  } else {
    leftIndex = middleIndex + 1;
    return search(arr, target, leftIndex, rightIndex);
  }
};

const recursiveBinarySearch = (arr, targetNumber) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  return search(arr, targetNumber, leftIndex, rightIndex);
};

console.log(recursiveBinarySearch([2, 4, 6, 8, 10], 4));
console.log(recursiveBinarySearch([-1, 3, 5, 7, 9], 7));
console.log(recursiveBinarySearch([10, 30, 50, 70, 90], 20));
