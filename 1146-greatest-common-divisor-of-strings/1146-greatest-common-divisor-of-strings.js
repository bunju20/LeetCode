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
 solution:이거 이딴식으로 풀면 안될것같긴한데
- 더 짧은 문자열 고름
- if(짧은걸로 긴거 나눌수 있으면){
    isDivisible = true;
    for()
}

 time:
 space:

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