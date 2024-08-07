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
var reverseList = function (head) {
    let arr = [];
    let p = head;
    if (head === null) return null;

    while (p != null) {
        arr.unshift(p.val);
        p = p.next;
    }

    let reverseLinkedList = new ListNode(arr[0]);
    let q = reverseLinkedList;


    for (let i = 1; i < arr.length; i++) {
        q.next = new ListNode(arr[i]);
        q = q.next;
    }

    return reverseLinkedList;
};