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
var pairSum = function (head) {
    var fast = head 
    var slow = head
    var prev = null
    var temp;
    while (fast && fast.next) {
        fast = fast.next.next
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    var output =0 
    while(prev){
        output = Math.max(output, prev.val + slow.val)
        prev = prev.next
        slow = slow.next
    }
    return output
};