/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let operations = 0;
    let i = 0;
    let hash = {};

    while (i <= nums.length - 1) {
        if (hash[nums[i]]) {
            operations++;
            hash[nums[i]] -= 1;
            if (hash[nums[i]] == 0) {
                delete hash[nums[i]];
            }
        }
        else {
            if (hash.hasOwnProperty(k - nums[i])) {
                hash[k - nums[i]] += 1;
            } else {
                hash[k - nums[i]] = 1;
            }
        }
        i++;
    }

    return operations;

};