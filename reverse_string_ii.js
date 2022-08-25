/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/
/*
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 let reverseStr = function(s, k) {
    // strings are immutable in javascript
    // converting to an array will allow in place letter swapping
    const a = s.split('');
    // loop through the array in 2*k increments
    for (let start = 0; start < a.length; start += 2 * k) {
        let i = start;
        let j = Math.min(start + k - 1, a.length - 1);
        // reverse first k characters in current increment
        while (i < j) {
            let tmp = a[i];
            a[i++] = a[j];
            a[j--] = tmp;
        }
    }
    // return a string as the result
    return a.join('');
    
};

let s = "abcdefg", k = 2 ;
console.log(reverseStr(s,k));