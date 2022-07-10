/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
 let reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;    
    if (head==null || head.next==null){
        return head;
    }
    while(curr!= null) {
        nextTemp = curr.next; 
        curr.next = prev;  
        prev = curr; 
        curr = nextTemp;  
    }
    return prev     
};

let head = [1,2];
console.log(reverseList(head));

