/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    let max = [...candies].sort((a,b) => a-b)[candies.length - 1];
    for (let i = 0; i< candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            res.push(true);
        } else res.push(false);
    }
    return res;
};