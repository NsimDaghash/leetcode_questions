/*
785. Is Graph Bipartite?

There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, 
where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected 
edge between node u and node v. The graph has the following properties:

There are no self-edges (graph[u] does not contain u).
There are no parallel edges (graph[u] does not contain duplicate values).
If v is in graph[u], then u is in graph[v] (the graph is undirected).
The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects 
a node in set A and a node in set B.

Return true if and only if it is bipartite.

Example 1:

Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.

Example 2:

Input: graph = [[1,3],[0,2],[1,3],[0,2]]
Output: true
Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
*/

var isBipartite = function (graph) {
  // Get the length of the graph
  const glen = graph.length;
  // Create an empty stack to perform depth-first search
  const s = [];
  // Create an array to track the visited status of each node (initialized with 0)
  const vis = new Array(glen).fill(0);

  // Iterate over each node in the graph
  for (let i = 0; i < glen; i++) {
    // If the node has already been visited, skip to the next iteration
    if (vis[i]) continue;
    // Mark the current node as visited (color 1)
    vis[i] = 1;
    // Push the current node onto the stack
    s.push(i);

    // Perform depth-first search
    while (s.length) {
      // Pop the top node from the stack
      const curr = s.pop();
      // Get the edges (neighbors) of the current node
      const edges = graph[curr];

      // Traverse the neighbors of the current node
      for (const next of edges) {
        // If the neighbor has not been visited
        if (!vis[next]) {
          // Assign a different color (2) to the neighbor node
          vis[next] = vis[curr] ^ 3;
          // Push the neighbor onto the stack for further exploration
          s.push(next);
        }
        // If the neighbor has the same color as the current node, the graph is not bipartite
        else if (vis[curr] === vis[next]) {
          return false;
        }
      }
    }
  }

  // If all nodes have been visited without conflicts, the graph is bipartite
  return true;
};
