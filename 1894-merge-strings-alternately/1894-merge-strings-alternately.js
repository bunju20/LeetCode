/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

 /*
 14:39~
I: string두개
O: 병합된 string 한개
C:
1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
E:x

algo:two pointer
ds:x

solution:
- 두개의 포인터 만듬
- while(둘중의 하나가 끝까지 보기전까지)
    - word1 푸시 l++
    - word2 푸시 r++
- l과 r의 남은걸 측정
- 남은 놈들만 더해서 배열에 추가
- 배열을 string으로 만듦.

N: 가장 긴 문자열의 길이
time: O(N)
space: O(N)
 */
var mergeAlternately = function(word1, word2) {
    let l = 0;
    let r = 0;
    let result = [];
    while(l < word1.length && r < word2.length){
        result.push(word1[l]);
        result.push(word2[r]);
        l++;
        r++;
    }
    let leftL = word1.length - l;
    let leftR = word2.length - r;
    if(leftL)result.push(word1.slice(l));
    if(leftR)result.push(word2.slice(r));
    return result.join('');

};