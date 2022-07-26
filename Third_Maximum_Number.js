/*
414. Third Maximum Number

Given an integer array nums, return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/
/*
 * @param {number[]} nums
 * @return {number}
 */
 let thirdMax = function(nums) {
    nums = nums.sort();
    let maxVal , j =0 ;
    if (nums.length<3){
        maxVal = Math.max(...nums);
        return maxVal;
    }
    if(nums.length == 3){
        return nums[0];
    }
    else{
        for( let i =nums.length ; i>0; i--){
            if(nums[i] != nums[i-1]){              
                j++
            }
            if(j == 3 ){
                return nums[i-1]
            }
        }
    }
    
};

let nums = [2,2,3,1];
console.log(thirdMax(nums));
