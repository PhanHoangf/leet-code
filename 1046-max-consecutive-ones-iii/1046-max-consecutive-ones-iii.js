/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0;
    let j = 0;
    while (j <= nums.length - 1) {
        let num = nums[j];

        if (num === 0) k--;
        if (k < 0) {
            if (nums[i] === 0) k++;
            i++;
        }
        j++;
    }

    return j - i;
};