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
    let numLength = nums.length;
    let tmp=[];
    nums = nums.sort((a, b)=>(a - b));
    console.log(nums);
    for (let i = 0,j=0; i < nums.length - 1; i++,j++) {
        if (nums[i + 1] === nums[i]) {
            tmp.push (nums[i]+1);
            nums.splice(i, 1);
        }
    }
    console.log(nums);
/*   for (let k = 0,j=0; k < nums.length; k++,j++) {
            if (nums[k] !== j) {
                tmp.push(j);
            }
        }*/
    return tmp
};

let nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));