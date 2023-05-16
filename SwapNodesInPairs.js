/*
24. Swap Nodes in Pairs
Medium
10.3K
381
Companies
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // Dummy node
  const dummy = new ListNode(0);
  // Point the next of dummy node to the head
  dummy.next = head;
  // This node will be used to traverse the list
  let current = dummy;
  // Loop until we reach to the second last node
  while (
    current.next !== null &&
    current.next !== undefined &&
    current.next.next !== null
  ) {
    // First node of the pair
    let first = current.next;
    // Second node of the pair
    let second = current.next.next;
    // Point the next of first node to the node after second node
    first.next = second.next;
    // Now the current node's next should be the second node
    current.next = second;
    // Linking the original second node to the first node
    current.next.next = first;
    // Move the pointer two nodes ahead
    current = current.next.next;
  }
  return dummy.next;
};
