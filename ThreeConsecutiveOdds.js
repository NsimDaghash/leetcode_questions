/*
1550. Three Consecutive Odds

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
*/

/*
 * @param {number[]} arr
 * @return {boolean}
 */
let threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr.slice(i, i + 3).filter((num) => num % 2 !== 0).length === 3) {
      return true;
    }
  }
  return false;
};

let arr = [2,6,4,1];
console.log(threeConsecutiveOdds(arr));
