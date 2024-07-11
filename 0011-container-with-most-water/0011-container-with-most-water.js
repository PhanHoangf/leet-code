/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;

    let max = 0;

    const min = (a, b) => {
        return a > b ? b : a;
    }

    if (height.length == 2) {
        return min(height[i], height[j]) * 1;
    }

    while (i <= j) {
        let minHeight = min(height[i], height[j]);
        let area = minHeight * (j - i);

        if (area > max) {
            max = area;
        }

        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
};