/*
258. Add Digits

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
*/
/*
 * @param {number} num
 * @return {number}
 */
let addDigits = function (num) {
  num = num + "";
  let sum=0;
  let num2 = num.split("");
  l = num2.length;
  if (l == 1) {
    return num;
  } else {
    while (l > 1) {
      sum = 0;
      num2 = num.split("");
      for (let i = 0; i < l; i++) {
        sum = sum + parseInt(num2[i]);
      }
      num = sum + "";
      l = num.length;
    }    
    sum = parseInt(num)
    return sum;
  }
};

let num = 38;
console.log(addDigits(num));
