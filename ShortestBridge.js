/*

934. Shortest Bridge
Medium

You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

 

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 1
Example 2:

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
Example 3:

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const n = grid.length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = new Array(n).fill(false).map(() => new Array(n).fill(false));
  const queue = [];

  // Step 1: Identify the first island using DFS
  const identifyFirstIsland = (row, col) => {
    if (
      row < 0 ||
      row >= n ||
      col < 0 ||
      col >= n ||
      visited[row][col] ||
      grid[row][col] === 0
    ) {
      return;
    }

    visited[row][col] = true;
    queue.push([row, col]);

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      identifyFirstIsland(newRow, newCol);
    }
  };

  let found = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        identifyFirstIsland(i, j);
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }

  // Step 2: Perform a BFS to find the shortest path to connect the islands
  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newRow < n &&
          newCol >= 0 &&
          newCol < n &&
          !visited[newRow][newCol]
        ) {
          visited[newRow][newCol] = true;

          if (grid[newRow][newCol] === 1) {
            return steps;
          }

          queue.push([newRow, newCol]);
        }
      }
    }

    steps++;
  }

  return -1; // Error: Unable to connect the islands
};
