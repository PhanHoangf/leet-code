/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    let i = 0;
    let text = '';
    while (i <= s.length - 1) {
        let char = s[i];
        if (char === ')') {
            let c = stack.pop();
            while (c !== '(') {
                text += c;
                c = stack.pop();
            }
            stack.push(...text);
            text = '';
        } else {
            stack.push(char);
        }
        i++;
    }
    return stack.join('').trim();
};