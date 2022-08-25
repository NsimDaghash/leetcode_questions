/*

Implement strStr()
Easy

4446

3768

Add to List

Share
Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/

/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 let strStr = function(haystack, needle) {
    if (haystack == null || needle == null) {
        return -1;
    }
    if (haystack === needle) {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;   
};

let haystack = "aaaaa", needle = "bba";
console.log(strStr(haystack, needle));
