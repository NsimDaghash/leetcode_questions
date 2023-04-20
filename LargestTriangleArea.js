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

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  points.sort((a, b) => a[0] - b[0]); // sort by x-coordinate

  let maxArea = 0;

  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const x1 = points[i][0];
        const y1 = points[i][1];
        const x2 = points[j][0];
        const y2 = points[j][1];
        const x3 = points[k][0];
        const y3 = points[k][1];

        const area =
          0.5 *
          Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x2 * y1 - x3 * y2 - x1 * y3);

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};
