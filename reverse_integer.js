/*
7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed.
 If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/
/*
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    if (x>2147483647 || x< -2147483647){
        return 0;
    }
    if(x>=0){
        x=x.toString().split("").reverse().join("").toString();
        x=parseInt(x);
        if (x>2147483647){
            x=0;
         }
        }
    else{
        x=x*(-1);
        x=x.toString().split("").reverse().join("").toString();
        x=parseInt(x);
        x=x*(-1);
        if (x< -2147483647){
            x=0;
         }
        }
    return x;
};

let x = 123;
console.log(reverse(x));
