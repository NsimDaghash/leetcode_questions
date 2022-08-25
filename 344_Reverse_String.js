/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/
/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 let reverseString = function(s) {
    let n=s.length,tmp="";
    for(let i=0;i<n/2;i++){
        tmp = s[n-1-i];
        s[n-1-i] = s[i];
        s[i] = tmp;
    }
    return s
};

let s = ["h","e","l","l","o"];
console.log(reverseString(s));