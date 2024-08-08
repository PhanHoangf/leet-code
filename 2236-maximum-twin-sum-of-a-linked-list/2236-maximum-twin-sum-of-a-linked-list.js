/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var reverseList = function (head) {
    // initialize prev and next pointers to NULL
    let prev = null;
    let next = null;
    // set current pointer to the head node
    let curr = head;

    // while the current pointer is not NULL
    while (curr !== null) {
        // set the next pointer to the next node in the list
        next = curr.next;
        // reverse the current node's pointer to point to the previous node
        curr.next = prev;
        // set the previous pointer to the current node
        prev = curr;
        // move the current pointer to the next node
        curr = next;
    }

    // set the head pointer to the last node, which is the 
    // new first node after reversal
    head = prev;
    // return the new head pointer
    return head;
};

var pairSum = function (head) {
    if (head === null) return null;
    let p = head;
    let length = 0;

    while (p != null) {
        p = p.next;
        length++;
    }

    let n = length / 2;

    p = head;

    while (n > 1) {
        p = p.next;
        n--;
    }

    let q = reverseList(p.next);
    p.next = null;
    
    p = head;
    let max = 0;
    while (p != null) {
        let sum = q.val + p.val;
        p = p.next;
        q = q.next;

        if (sum > max) max = sum;
    }

    return max;
};