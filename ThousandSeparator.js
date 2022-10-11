/*
1556. Thousand Separator

Given an integer n, add a dot (".") as the thousands separator and return it in string format.

Example 1:

Input: n = 987
Output: "987"
Example 2:

Input: n = 1234
Output: "1.234"
*/
/*
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n=n+"";
    n=n.split("");
    l=n.length-1;
    r=[];
    count = 0
    while(l>=0){
        if (count>0 && count % 3 == 0){            
          r.unshift(".")  ;            
        }
       r.unshift(n[l]) 
        count++;
        l-- ;
    }
    r= r.join("");
    return r;
};

let n = 1234 ;
console.log(thousandSeparator(n));