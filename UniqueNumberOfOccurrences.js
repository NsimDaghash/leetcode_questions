/*
1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/
/*
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let numObj = {};
  for (let num of arr) {
      if (numObj[num]) {
          numObj[num] = numObj[num] + 1;
      } else {
          numObj[num] = 1;
      }
  }
  let valuesArr = Object.values(numObj).sort();
  let j = 0;
  for (let i = 1; i < valuesArr.length; i++) {
      if (valuesArr[j] === valuesArr[i]) {
          return false;
      }
      j++;
  }
  return true;    
};

let arr = [-3,0,1,-3,1,1,1,-3,10,0];
console.log(uniqueOccurrences(arr));