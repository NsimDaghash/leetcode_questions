/*
961. N-Repeated Element in Size 2N Array

You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

 

Example 1:

Input: nums = [1,2,3,3]
Output: 3
Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2
Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
let repeatedNTimes = function(nums) {
    let tmp = [], count  ;
    for(let i=0;i<nums.length; i++){
        count = 0;
        if(i<nums.length-1 && tmp.includes(nums[i])){
            i++
        }
       else {
           tmp.push(nums[i]);
           for(let j=i ;j<nums.length ; j++){
               if(nums[j] == nums[i])
                   count++;
           }
       } 
        if (count == nums.length/2){
            return (nums[i]);
        }
    }    
};


let nums = [5,1,5,2,5,3,5,4];
console.log(repeatedNTimes(n));
