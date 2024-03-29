/*
1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
*/

/*
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let countOdds = function(low, high) {
    let count = 0;
    while (low<=high){
        if(low%2 == 1){
            count++
            low = low+2;
        }
        else{
            low = low + 1;
        }
    }
    return count;
    
};

let low = 3, high = 7;
console.log(countOdds(low, high));