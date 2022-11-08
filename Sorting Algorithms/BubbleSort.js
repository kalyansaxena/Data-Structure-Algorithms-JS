// Bubble sort -
//   Bubble sort, sometimes referred to as sinking sort,
//   is a simple sorting algorithm that repeatedly steps through the input list element by element,
//   comparing the current element with the one after it, swapping their values if needed.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([-5, -2, 8, 1, -1]));
