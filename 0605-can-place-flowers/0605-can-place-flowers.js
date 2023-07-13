/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

 /*
 I: 1d array, int
 O: bool
 C:
 1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
 E:
 if(길이 <= 2 ||)1이면 true; 아니면 false

 algo:two pointer
 ds: x

 solution:
- if edge case
- let l,r;
- move(l,r)

while(r < 배열길이)
  - n--;
  - move

return n == 0 ? true: false

move:
- while(r이 연속으로 3나올동안)
  - r++
- l = r-2

 time: O(N)
 space:O(1)
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) {
    return true;
  }

  const length = flowerbed.length;
  let count = 0;
  let i = 0;

  while (i < length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }

    if (count >= n) {
      return true;
    }

    i++;
  }

  return false;
};
