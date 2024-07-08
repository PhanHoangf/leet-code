/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const maxInt = Number.MAX_SAFE_INTEGER
    a = maxInt;
    b = maxInt;
    for (let i = 0; i <= nums.length - 1; i++) {
        num = nums[i];
        if (num <= a) {
            a = num
        } else if (num <= b) {
            b = num
        } else {
            if (a == b) return false;
            if (b == maxInt || a == maxInt) return false;
            return true;
        }
    }

    return false;
};
