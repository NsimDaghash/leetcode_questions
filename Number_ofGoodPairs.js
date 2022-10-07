/*
1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/
/*
 * @param {number[]} nums
 * @return {number}
 */
 let numIdenticalPairs = function(nums) {
    let count=0,j=0;
    for (let i=0 ; i<nums.length;i++){
        j=i+1
        while(j<nums.length){
            if(nums[j] == nums[i]){
                count++;
            }
            j++
        }
    }
    return count;
};

let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));