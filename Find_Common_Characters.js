/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
*/
/*
 * @param {string[]} words
 * @return {string[]}
 */
let commonChars = function(words) {
  let tmp = words[0].split("");
  let result = [];
  for (let j = 0; j < tmp.length; j++) {
    let total = 0;
    for (let i = 0; i < words.length; i++) {
      let tmp2 = words[i].split("");
        if (words[i].includes(tmp[j])) {
          tmp2.splice(tmp2.indexOf(tmp[j]), 1);
          total = total + 1;
        }
      words[i] = tmp2.join("");
      if (total == words.length) {
        result.push(tmp[j]);
      }      
    }
  }
  return result;
};

let words = ["bella","label","roller"] ; 
console.log(commonChars(words));
