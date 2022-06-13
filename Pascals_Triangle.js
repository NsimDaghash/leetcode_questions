/*
118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 
*/
/*
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let ret = [];
    
    for(let i = 0; i < numRows; i++)
    {
        ret[i] = [];
        ret[i][0] = ret[i][i] = 1;
        for(let j = 1; j < i; j++)
        {
               ret[i][j] = ret[i-1][j] + ret[i-1][j-1]; 
        }
    }
    return ret;
    
};