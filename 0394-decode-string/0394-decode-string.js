/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let res = [];
    let k = [];
    let i = 0;
    let integer = '';
    while (i < s.length) {
        if (Number.isInteger(+s[i])) {
            integer += s[i];
        } else {
            if (integer) {
                k.push(integer);
                integer = '';
            }
            if (s[i] === ']') {
                let text = '';
                let char = res.pop();
                while (char !== '[') {
                    text = char + text;
                    char = res.pop();
                }
                let time = k.pop();

                while (time > 0) {
                    res.push(text);
                    time--;
                }
            } else {
                res.push(s[i])
            }
        }
        i++;
    }
    return res.join('');
};