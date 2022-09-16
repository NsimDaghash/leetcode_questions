/* 345. Reverse Vowels of a String
 Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
  s = s.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let start = 0,
    end = s.length - 1,
    tmp = "",
    flag = 1;
  for (start; start <= end; start++) {
    if (vowels.includes(s[start])) {
      flag = 1;
      while (end > start && flag == 1) {
        if (vowels.includes(s[end])) {
          tmp = s[end];
          s[end] = s[start];
          s[start] = tmp;
          flag = 0;
          end = end - 1;
        } else {
          end = end - 1;
        }
      }
    }
  }
  s = s.join("");
  return s;
};

let s = "aA";
console.log(reverseVowels(s));
