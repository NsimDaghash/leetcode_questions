/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/
let singleNumber = function(nums) {
    let flag = nums.length-1;
    let sort_nums = nums.sort();
    for (let i=0;i< nums.length;i= i+2){
        if (i == nums.length-1){
            return(sort_nums[i])
        }
        else
        {
            if (sort_nums[i] != sort_nums[i+1]){
                return (sort_nums[i])
            }
        }
    }    
};

let nums = [4,1,2,1,2];
console.log(singleNumber(nums));