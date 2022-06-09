/*
69. Sqrt(x)
Easy

3978

3259

Add to List

Share
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/
/*
 * @param {number} x
 * @return {number}
 */
 let mySqrt = function(x) {
    if (x == 0 || x==1){
        return x;
    }        
    for(let i=2 ; i<=x;i++){
        if(i*i>x){
            return(i-1);
        }
    }
};

let x=12;
console.log(mySqrt(x));