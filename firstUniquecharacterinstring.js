/*
387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/
/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let tmp = s.split("");
  let tmp2 = tmp;
  if (tmp.length == 1) {
    return 0;
  }
  for (let i = 0; i < tmp.length; i++) {
    tmp2 = tmp;
    n = (tmp2.splice(i, 1).toString());
    if (!tmp2.includes(n)) {
      return i;
    }
    tmp2 = tmp2.splice(i, 0, n);
  }
  return -1;
};

let s = "loveleetcode";
console.log(firstUniqChar(s));
