/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let sumL = nums.slice(0, i).reduce((a, b) => a + b, 0);
        let sumR = nums.slice(i + 1, nums.length).reduce((a, b) => a + b, 0);

        if (sumL === sumR) return i;
        i++;
    }

    return -1;
};