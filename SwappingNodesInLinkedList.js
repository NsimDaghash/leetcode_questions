/*
1721. Swapping Nodes in a Linked List

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let x = head,
    y = head,
    t = head;

  // Until we reach k-th node from beginning
  while (k > 1) {
    x = x.next;
    t = t.next;
    k--;
  }

  // Until pointer t reach last need
  while (t.next) {
    y = y.next;
    t = t.next;
  }

  // Swap values at both the nodes
  let temp = x.val;
  x.val = y.val;
  y.val = temp;

  return head;
};
