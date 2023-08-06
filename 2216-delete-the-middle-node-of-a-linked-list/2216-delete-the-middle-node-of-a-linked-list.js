/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let pre = null;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        pre = slow;
        slow = slow.next;
    }
    
    if (pre) pre.next = slow.next;
    else head = head.next;
    
    return head;
};
