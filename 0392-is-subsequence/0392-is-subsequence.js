/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t.length < s.length) return false;
    let j = 0;
    let i = 0;
    let res = '';
    
    while (j <= t.length - 1 && i <= s.length -1) {
        charT = t[j];
        charS = s[i];
        
        if (charT === charS) {
            res += charT;
            j++;
            i++;
        } else {
            j++;
        }
    }

    return res === s;
};