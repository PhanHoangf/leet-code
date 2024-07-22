/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let res1 = [];
    let res2 = [];

    for (const value of set2) {
        if (!set1.has(value)) {
            res1.push(value);
        }
    }

    for (const value of set1) {
        if (!set2.has(value)) {
            res2.push(value)
        }
    }

    return [res2, res1];
};
