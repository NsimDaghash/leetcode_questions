/*
1047. Remove All Adjacent Duplicates In String

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
 

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"
*/

/*
 * @param {string} s
 * @return {string}
 */
let removeDuplicates = function (s) {
  s = s.split("");
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      s.splice(i, 2);
      i = i - 2;
    }
  }
  s = s.join("");
  return s;
};

let s = "azxxzy";
console.log(removeDuplicates(s));
