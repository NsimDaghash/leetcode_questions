/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
*/
/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
let relativeSortArray = function (arr1, arr2) {
  let tmp = [],
    tmp2 = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        tmp.push(arr1[j]);
      }
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!tmp.includes(arr1[i])) {
      tmp2.push(arr1[i]);
    }
  }
  tmp2=tmp2.sort((a,b)=>a-b);
  for (let i = 0; i < tmp2.length; i++) {
    tmp.push(tmp2[i]);
  }
  return tmp;
};

let arr1 = [28, 6, 22, 8, 44, 17],
  arr2 = [22, 28, 8, 6];
console.log(relativeSortArray(arr1, arr2));
