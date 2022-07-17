/*
290. Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

*/
/*
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 let wordPattern = function(pattern, s) {
    let pat1 = pattern.split("");
    let s1 = s.split(" ");
    let tmp1 ,tmp2 ;
    if (pat1.length != s1.length){
        return false;
    }
    for (let i=0; i< pat1.length; i++){
        tmp1 = pat1[i] ;
        tmp2 = s1[i];
        for(let j=i+1;j<s1.length;j++){
            if(pat1[j]==pat1[i]){
                if (s1[i] != s1[j]){
                    return false
                }
            }
            if(pat1[j]!=pat1[i]){
                if (s1[i] == s1[j]){
                    return false
                }
            }
        }
    }
    return true
};

let pattern = "abba", s = "dog dog dog dog";
console.log(wordPattern(pattern,s));