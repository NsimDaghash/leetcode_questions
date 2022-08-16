/*
812. Largest Triangle Area

Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

Example 1:

Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2.00000
Explanation: The five points are shown in the above figure. The red triangle is the largest.
Example 2:

Input: points = [[1,0],[0,0],[0,1]]
Output: 0.50000
*/
/*
 * @param {number[][]} points
 * @return {number}
 */
 let largestTriangleArea = function(points) {
    let result = [];
    for (let i = 0; i <points.length-2; i++) {
      for (let j = i + 1; j <points.length-1; j++) {
        for (let k = j + 1; k <points.length; k++) {
         //   Math.abs((points[j]-points[i]) * (points[k]-points[i])-(points[k]-points[i]) * (points[j]-points[i]))/2;
          result.push( Math.abs((points[j]-points[i]) * (points[k]-points[i])-(points[k]-points[i]) * (points[j]-points[i]))/2);
        }
      }
    }
    result.sort((a, b) => b-a);
    return (result[0]);
  };