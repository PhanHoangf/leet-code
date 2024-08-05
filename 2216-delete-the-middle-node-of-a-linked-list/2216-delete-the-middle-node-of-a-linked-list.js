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
var deleteMiddle = function (head) {
    if (head == null) return null;
    if (head.next == null) return null;
    let fastNode = head.next.next;
    let slowNode = head;

    while (fastNode !== null && fastNode.next !== null) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    slowNode.next = slowNode.next.next;
    return head;
};