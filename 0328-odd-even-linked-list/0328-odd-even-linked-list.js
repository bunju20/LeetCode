var oddEvenList = function (head) {
  if (head === null) return head;
  if (head.next === null) return head;

  let odd = head;
  let oddHead = odd;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return oddHead;
};
