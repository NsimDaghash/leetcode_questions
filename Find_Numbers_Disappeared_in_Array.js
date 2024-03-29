/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
*/
/*
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        result.push(i + 1);
      }
    }
  
    return result;
};
/*
let findDisappearedNumbers = function (nums) {
    let result = [];

    let uniqueNumbers = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    });
    for (let j = 1; j <= nums.length ; j++) {
        if (!uniqueNumbers.includes(j)) {
            result.push(j);
        }
    }
    return result;
};

let nums = [1,1];
console.log(findDisappearedNumbers(nums));
*/

let nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));
>>>>>>> a734424150dea9a3d413539e0c3bf62b7c2bd2f9
