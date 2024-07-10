/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t.length < s.length) return false;
    let j = 0;
    let i = 0;
    
    while (j <= t.length - 1 && i <= s.length -1) {
        if (t[j] === s[i]) {
            j++;
            i++;
        } else {
            j++;
        }
    }

    return i === s.length;
};