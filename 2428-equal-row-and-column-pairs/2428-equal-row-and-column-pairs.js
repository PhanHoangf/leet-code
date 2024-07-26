/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let totalPair = 0;
    let rowMap = [];

    for (let r = 0; r < grid.length; r++) {
        let key = ''
        for (let c = 0; c < grid.length; c++) {
            key += grid[r][c] + ',';
        }

        rowMap.push(key);
    }

    for (let r = 0; r < grid.length; r++) {
        let key = ''
        for (let c = 0; c < grid.length; c++) {
            key += grid[c][r] + ',';
        }

        rowMap.forEach(v => {
            if(v == key) {
                totalPair++;
            }
        })
    }
    
    return totalPair
    return Object.values(rowMap).reduce((a, b) => a + b, 0);
};