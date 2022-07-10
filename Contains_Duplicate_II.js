/*
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/
/*
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 let containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length - 1; i++) {
     for (let j = i + 1; j < nums.length; j++) {
       if (nums[i] === nums[j] && j - i <= k) {
         return true;
       }
     }
   }
   return false;   
 };

 let nums = [1,2,3,1,2,3], k = 2;

console.log(containsNearbyDuplicate(nums, k));