/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/
/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 let mergeAlternately = function(word1, word2) {
    let mw = "";
    word1 = word1.split("");
    word2 = word2.split("");
    let w1 = word1.length;
    let w2 = word2.length;
    if(w1 == w2){
        for(let i=0;i<w1;i++){
            mw = mw+word1[i] + word2[i]
        } 
        return mw;
    }
    if (w1>w2){
        for(let i=0;i<w2;i++){
            mw = mw+word1[i] + word2[i]
        }
        for(let j=w2;j<(w1);j++){
            mw=mw+word1[j]
        }
        return mw;
    }
    if (w1<w2){
        for(let i=0;i<w1;i++){
            mw = mw+word1[i] + word2[i]
        }
        for(let j=w1;j<(w2);j++){
            mw=mw+word2[j]
        }
        return mw;
    }        
};
let word1 = "abcd", word2 = "pq"
console.log(mergeAlternately(word1, word2));