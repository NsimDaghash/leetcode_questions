/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
*/
/*
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
let uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  let tmp = [],
    tmp2 = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1.length == 1 || !s2.includes(s1[i])) {
      tmp.push(s1[i]);
      // return tmp;
    }
    tmp2 = s1.splice(i, 1);
    console.log("30. tmp2 : ", s1);
    if (!s2.includes(s1[i]) && !tmp2.includes(s1[i]) && tmp2.length != 0) {
      tmp.push(s1[i]);
      console.log("35. tmp : ", tmp);
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2.length == 1 && !s1.includes(s2[i])) {
      tmp.push(s2[i]);
      // return tmp;
    }
    tmp2 = s2.splice(i, 1);
    console.log("38. s2 : ", s2);
    if (!s1.includes(s2[i]) || !tmp2.includes(s2[i])) {
      tmp.push(s2[i]);
      console.log("41. tmp : ", tmp);
    }
    return tmp;
  }
};

let s1 = "apple",
  s2 = "banana banana";
console.log(uncommonFromSentences(s1, s2));
