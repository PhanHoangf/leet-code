/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else hash[arr[i]] += 1;
    }

    let set = new Set();
    for (const v of Object.values(hash)) {
        if (set.has(v)) return false;
        else set.add(v);
    }

    return true;
};