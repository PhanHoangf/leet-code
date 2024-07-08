/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const maxInt = Number.MAX_SAFE_INTEGER
    let a = {
        num: maxInt,
        index: null
    };
    let b = {
        num: maxInt,
        index: null
    };
    for (let i = 0; i <= nums.length - 1; i++) {
        num = nums[i];
        if (num <= a.num) {
            a = {
                num,
                index: i
            };
        } else if (num <= b.num) {
            b = {
                num,
                index: i
            };
        } else {
            if (a.num == b.num) return false;
            if (b.num == maxInt || a.num == maxInt) return false;
            return true;
        }
    }

    return false;
};
