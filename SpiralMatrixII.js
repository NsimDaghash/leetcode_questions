/*
59. Spiral Matrix II
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  let num = 1,
    row = 0,
    col = 0,
    direction = "right";
  while (num <= n * n) {
    matrix[row][col] = num;
    if (direction === "right") {
      if (col === n - 1 || matrix[row][col + 1] !== 0) {
        direction = "down";
        row++;
      } else {
        col++;
      }
    } else if (direction === "down") {
      if (row === n - 1 || matrix[row + 1][col] !== 0) {
        direction = "left";
        col--;
      } else {
        row++;
      }
    } else if (direction === "left") {
      if (col === 0 || matrix[row][col - 1] !== 0) {
        direction = "up";
        row--;
      } else {
        col--;
      }
    } else if (direction === "up") {
      if (row === 0 || matrix[row - 1][col] !== 0) {
        direction = "right";
        col++;
      } else {
        row--;
      }
    }
    num++;
  }
  return matrix;
};

let n = 3;
console.log(generateMatrix(n));
