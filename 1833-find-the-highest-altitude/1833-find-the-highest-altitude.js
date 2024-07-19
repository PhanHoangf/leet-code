/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = 0;
    let prefix = 0;
    for (let i = 0; i < gain.length; i++) {
        prefix += gain[i];

        if (prefix > max) {
            max = prefix;
        }
    }

    return max;
};