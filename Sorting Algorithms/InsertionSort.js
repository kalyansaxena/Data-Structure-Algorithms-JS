// Insertion sort -
//     Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time
//     by comparisons. It is much less efficient on large lists than more advanced algorithms such as
//     quicksort, heapsort, or merge sort.

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([-5, -2, 8, 1, -1]));
