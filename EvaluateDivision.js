/*
399. Evaluate Division

You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] 
represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

 

Example 1:

Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
Example 2:

Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
Example 3:

Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // Step 1: Build the graph
  const graph = buildGraph(equations, values);

  // Step 2: Evaluate queries
  const results = [];
  for (const [start, end] of queries) {
    if (!graph.has(start) || !graph.has(end)) {
      results.push(-1.0);
    } else {
      results.push(evaluateQuery(graph, start, end, new Set()));
    }
  }

  return results;
};

const buildGraph = function (equations, values) {
  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [start, end] = equations[i];
    const value = values[i];

    if (!graph.has(start)) {
      graph.set(start, new Map());
    }
    graph.get(start).set(end, value);

    if (!graph.has(end)) {
      graph.set(end, new Map());
    }
    graph.get(end).set(start, 1 / value);
  }

  return graph;
};

const evaluateQuery = function (graph, start, end, visited) {
  if (start === end) {
    return 1.0;
  }

  visited.add(start);

  const neighbors = graph.get(start);
  for (const [neighbor, value] of neighbors.entries()) {
    if (!visited.has(neighbor)) {
      const result = evaluateQuery(graph, neighbor, end, visited);
      if (result !== -1.0) {
        return value * result;
      }
    }
  }

  return -1.0;
};
