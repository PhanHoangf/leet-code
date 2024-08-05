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
var oddEvenList = function (head) {
    if (head == null) return null;
    if (head.next == null) return head;
    let p = head;
    let oddLinkedList = new ListNode(head.next.val);
    let r = oddLinkedList;
    while (p.next != null && p.next.next != null) {
        p.next = p.next.next;
        p = p.next;
        r.next = p.next;
        r = r.next;
    }
    p.next = oddLinkedList;
    return head;
};