/*
389. Find the Difference

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 let findTheDifference = function(s, t) {
    for (let ch of [...s]) {
      t = t.replace(ch, "");
    }
    return t;
  };

  let s = "abcd", t = "abcd";

  console.log(findTheDifference(s, t));