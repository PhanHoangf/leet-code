/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    if (chars.length === 1) return chars.length;

    let i = 0;
    let j = i + 1;
    let count = 1;
    let res = 0;
    let previousLength = chars.length;

    while (j <= chars.length - 1) {
        if (chars[i] === chars[j]) {
            count += 1;
            j++;
        }

        if (chars[i] !== chars[j]) {
            if (count !== 1) {
                let splitCount = count.toString().split('');
                chars.splice(i + 1, count - 1, ...splitCount);
                count = 1;
                
                i += splitCount.length + 1;
                j = i + 1;
            } else {
                i++;
                j++;
            }
        }
    }
    return chars.length;
}