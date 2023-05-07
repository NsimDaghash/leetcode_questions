/*
5. Longest Palindromic Substring
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const table = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  let longest = "";

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    table[i][i] = true;
    longest = s[i];
  }

  // Check substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      table[i][i + 1] = true;
      longest = s.substring(i, i + 2);
    }
  }

  // Check substrings of length 3 and above
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && table[i + 1][j - 1]) {
        table[i][j] = true;
        longest = s.substring(i, j + 1);
      }
    }
  }

  return longest;
};
