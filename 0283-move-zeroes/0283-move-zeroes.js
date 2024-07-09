/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length != 1) {
        let i = 0;
        let j = 1;

        while (i <= nums.length - 1 && j <= nums.length - 1) {
            if(nums[i] == 0) {
                if (nums[j] != 0) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;

                    i++;
                    j++;
                } else {
                    j++;
                }
            } else {
                i++;
                j++;
            }
        }
    }
};
