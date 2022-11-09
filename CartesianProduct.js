// Cartesian Product -
//    In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted A × B,
//    is the set of all ordered pairs (a, b) where a is in A and b is in B.

const cartesianProduct = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push([arr1[i], arr2[j]]);
    }
  }
  return res;
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesianProduct(arr1, arr2));
// [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]
