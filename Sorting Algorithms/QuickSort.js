// Quick sort -
//    QuickSort is a Divide and Conquer algorithm.
//    It picks an element as a pivot and partitions the given array around the picked pivot.
//    There are many different versions of quickSort that pick pivot in different ways.
//    Here, we follow last element as a pivot

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([-5, -2, 8, 1, -1]));
