/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let combine = str1 + str2;
    if (combine !== str2 + str1) {
        return '';
    }
    let i = 1;
    let res = '';
    while (i < combine.length) {
        let prefix = combine.slice(0, i);
        if (
            prefix + prefix === combine.slice(0, prefix.length * 2) && 
            prefix.length === gcd(str1.length, str2.length)
        ) {
            res = prefix;
            break;
        }
        i++;
    }
    return res;
};

var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}