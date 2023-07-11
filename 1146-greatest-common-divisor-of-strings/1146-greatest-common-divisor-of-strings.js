/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 /*
 18:30 ~
 I: str1, str2
 O: 두개의 스트링을 나눌수 있는 제일큰 string x
 C:
 1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
 E:x
 algo:x
 ds:x
 solution: 이거 옵티멀은 아니다
 - 짧은놈 긴놈 정하고
 - for(len = 0 ~ 작은놈 길이)
    if(작은놈하고 긴놈이 len으로 나눠떨어지면)
    subStr = 작은놈.slice(0,len)
    if(둘다 subStr로 잘 나눠진다면)return subStr;
    -> 안나눠지면 ''

checkDivide(str,subStr)
- for(subStr길이만큼 더함)
    - if(길이로 잘랐는데 그게 subStr이 아니면)return false;
-return true;

N : 큰 문자열 길이
M : 작은 문자열 길이
 time:O(N*M)
 space:O(N+M) -> string이므로

 */
var gcdOfStrings = function(str1, str2) {
    let shorter = str1.length <= str2.length ? str1 : str2;
    let longer = str1.length > str2.length ? str1 : str2;
    
    for (let len = shorter.length; len > 0; len--) {
        if (shorter.length % len === 0 && longer.length % len === 0) {
            let subStr = shorter.slice(0, len);
            if (checkDivide(shorter, subStr) && checkDivide(longer, subStr)) {
                return subStr;
            }
        }
    }
    return '';
};

function checkDivide(str, subStr) {
    for (let i = 0; i < str.length; i += subStr.length) {
        if (str.slice(i, i + subStr.length) !== subStr) {
            return false;
        }
    }
    return true;
}