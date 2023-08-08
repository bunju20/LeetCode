var reverseList = function(head) {
  if(!head || !head.next) return head;
  let pre = head;
  let cur = head.next;
  while(cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  head.next = null;
  return pre;
};
