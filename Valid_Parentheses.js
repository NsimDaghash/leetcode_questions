/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/
/*
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    // Array to store open barckets 
    let openBarckets = [];
    if (s.length <2){
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            openBarckets.push(s[i]);
        }
        else if (s[i] === ')' && openBarckets.length !== 0 && openBarckets[openBarckets.length - 1] === '(') {
            openBarckets.pop();
        } else if (s[i] === '}' && openBarckets.length !== 0 && openBarckets[openBarckets.length - 1] === '{') {
            openBarckets.pop();
        } else if (s[i] === ']' && openBarckets.length !== 0 && openBarckets[openBarckets.length - 1] === '[') {
            openBarckets.pop();
        }
        else {
            return false;
        }
    }
    if(openBarckets.length != 0){
        return false;
    }
    else{
        return true;
    }
};

let s ='{[()]}()'
console.log(isValid(s));