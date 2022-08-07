/*
796. Rotate String

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/
/*
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
let rotateString = function(s, goal) {
    ss=s+s;
   if ((s.length ==goal.length) && ss.includes(goal)){
       return true
   }
    return false
};

let s = "abcde", goal = "abced";
console.log(rotateString(s, goal));