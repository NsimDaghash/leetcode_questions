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
let reverseVowels = function(s) {
    let vowels=("aeiou").split("")
    let lng = vowels.length;
    console.log(vowels);
    for(i=0;i<s.length;i++){
        for (let j=0;j<lng;j++){
            if (vowels[j] == s[i]){
                console.log(vowels[j]);
                for(let j=s.length;j>i;j--){
                    for (let j=0;j<lng;j++){
                        if (vowels[j] == s[i]){
                            let tmp=
                        }
                    }
                }
            }
        }
    }
    return s
};

let s = "latcode";
console.log(reverseVowels(s));