/*
1668. Maximum Repeating Substring

For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.

Example 1:

Input: sequence = "ababc", word = "ab"
Output: 2
Explanation: "abab" is a substring in "ababc".
Example 2:

Input: sequence = "ababc", word = "ba"
Output: 1
Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
Example 3:

Input: sequence = "ababc", word = "ac"
Output: 0
Explanation: "ac" is not a substring in "ababc". 
*/
/*
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
let maxRepeating = function (sequence, word) {
  let count = 0;
  if (sequence=="") {
    return 0;
  }
  if (sequence.includes(word)) {
    while (sequence.length >= word.length) {
      if (sequence.includes(word)) {
      count++;
      i = sequence.indexOf(word) + word.length;
      sequence = sequence.split("");
      const removed = sequence.splice(0, i);
      sequence = sequence.join("");
      }
      else{
        return count
      }
    }
  }
  return count;
};

let sequence = "ababc", word = "ba";
console.log(maxRepeating(sequence, word));
