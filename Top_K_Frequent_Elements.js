/*
347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  const arr = [];
  for (const [key, value] of map) {
    arr.push([key, value]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(arr[i][0]);
  }

  return answer;
};
