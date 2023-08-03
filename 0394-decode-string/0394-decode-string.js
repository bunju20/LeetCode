/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    while(s.indexOf('[')!=-1) { 
        let left = s.lastIndexOf('[');
        let right = left + s.substring(left).indexOf(']');
        let word = s.substring(left+1, right);
        let count = "";
        while(s[left-1] >= 0 && s[left-1]<=9) {
            left--;
            count = s[left] + count;
        }
        s = s.substring(0,left) + word.repeat(count) + s.substring(right+1); 
    }
    return s;
};