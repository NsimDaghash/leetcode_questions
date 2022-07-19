/*
342. Power of Four
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
*/
/*
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfFour = function (n) {
    if (n == 1) {
        return true;
    }
    if (n <= 0) {
        return false
    }
    while (n > 1) {
        if (n % 4 != 0) {
            return false
        }
        else {
            n = n / 4;
        }
    }
    return true;
};

let n=11;
console.log(isPowerOfFour(n));