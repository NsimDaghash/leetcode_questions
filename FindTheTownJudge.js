/*
997. Find the Town Judge
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

 

Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
*/
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // Initialize counts for each person
  let trustCounts = new Array(n + 1).fill(0);

  // Count the number of people trusting each person
  for (let i = 0; i < trust.length; i++) {
    let a = trust[i][0],
      b = trust[i][1];
    trustCounts[b]++;
  }

  // Check if there is a person trusted by all except himself/herself
  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1) {
      // Check if the person trusts nobody
      for (let j = 0; j < trust.length; j++) {
        let a = trust[j][0],
          b = trust[j][1];
        if (a === i) {
          return -1;
        }
      }
      return i;
    }
  }

  return -1;
};
