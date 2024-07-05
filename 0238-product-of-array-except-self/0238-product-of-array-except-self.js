/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = (result[i] || 1) * prefix;
        prefix *= nums[i];
    }

    console.log(result)

    let suff = 1;
    for (let i = nums.length-1 ; i >= 0; i--) {
        result[i] *= suff;
        suff *= nums[i];
    }

    return result;
};