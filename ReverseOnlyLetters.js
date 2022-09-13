/*
917. Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

/*
 * @param {string} s
 * @return {string}
 */
let reverseOnlyLetters = function (s) {
  let arr = s.split("");
  let sol = "",
    j = arr.length - 1,
    i = 0;
  let arr2 = [];

  do {
    if (
      ((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) &&
      ((arr[j] >= "a" && arr[j] <= "z") || (arr[j] >= "A" && arr[j] <= "Z"))
    ) {
      arr2[i] = arr[j];
      arr2[j] = arr[i];
      i = i + 1;
      j--;
    }
    if (
      !((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) &&
      ((arr[j] >= "a" && arr[j] <= "z") || (arr[j] >= "A" && arr[j] <= "Z"))
    ) {
      arr2[i] = arr[i];
      i = i + 1;
    }
    if (
      ((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) &&
      !((arr[j] >= "a" && arr[j] <= "z") || (arr[j] >= "A" && arr[j] <= "Z"))
    ) {
      arr2[j] = arr[j];
      j = j - 1;
    }
    if (
      !((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) &&
      !((arr[j] >= "a" && arr[j] <= "z") || (arr[j] >= "A" && arr[j] <= "Z"))
    ) {
      arr2[i] = arr[i];
      arr2[j] = arr[j];
      i = i + 1;
      j--;
    }
  } while (i <= j);
  sol = arr2.join("");
  return sol;
};

let s = "a-bC-dEf-ghIj";
console.log(reverseOnlyLetters(s));

