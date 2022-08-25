/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/
let reverseVowels = function (s) {
    let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
    let start = 0, end = (s.length - 1);
    let tmp = "", flg1 = 0, flg2 = 0;
    while (end > start) {
        for (let i = start; i < end; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if (s[i] == vowels[j]) {
                    start = i;
                    j = vowels.length;
                    i = end
                    flg1 = 1;
                }
            }
        }
        if (start == end) {
            return s;
        }
        for (let k = end; k > start; k--) {
            for (let j = 0; j < vowels.length; j++) {
                if (s[k] == vowels[j]) {
                    end = k;
                    j = vowels.length;
                    k = 0;
                    flg2 = 1;
                }
            }
        }
        if (end == 0) {
            return s;
        }
        if (flg1 == 1 && flg2 == 1) {
            i = start;
            s = s.split('')
            tmp = s[end];
            s[end] = s[i];
            s[i] = tmp;
            s = s.join('');
        }
        start++;
        end--;
        flg1 = 0;
        flg2 = 0;
    }
    return s;
};

let s = "leetcOde";
console.log(reverseVowels(s));
