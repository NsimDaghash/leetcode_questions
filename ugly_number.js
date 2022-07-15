/*
263. Ugly Number

An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
*/
/*
 * @param {number} n
 * @return {boolean}
 */
 let isUgly = function(n) {
    if (n === 0) return false
    let tmp
    while (n !== 1) {
      tmp = n / 5
      if (Math.floor(tmp) === tmp) {
        n = tmp
        continue
      }
      tmp = n / 3
      if (Math.floor(tmp) === tmp) {
        n = tmp
        continue
      }
      tmp = n / 2
      if (Math.floor(tmp) === tmp) {
        n = tmp
        continue
      }
      return false
    }
    return true    
  };

  let n=22;
  console.log(isUgly(n));