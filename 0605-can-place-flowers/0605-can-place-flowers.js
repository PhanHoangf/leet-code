/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    if (flowerbed[0] === 0) {
        if (flowerbed.length === 1) return true;
        
        if (flowerbed[1] === 0) {
            n -= 1;
            flowerbed[0] = 1;
        }
    }

    if (n === 0) return true;

    if (flowerbed[flowerbed.length - 1] === 0) {
        if (flowerbed[flowerbed.length - 2] === 0) {
            n -= 1;
            flowerbed[flowerbed.length - 1] = 1;
        }
    }

    if (n === 0) return true;

    console.log(n)

    for (let i = 1; i < flowerbed.length - 1; i++) {
        let prev = flowerbed[i - 1];
        let aft = flowerbed[i + 1];

        console.log("//////////////////////////")
        console.log(prev, "<== prev")
        console.log(n, "<== loop")
        console.log(aft, "<== aft")
        console.log(i, "<== i")
        console.log("//////////////////////////")



        if (prev === 0 && aft === 0 && flowerbed[i] === 0) {
            n -= 1;
            flowerbed[i] = 1;
            if (n === 0) break;
        }
    }

    console.log(flowerbed)
    console.log(n)

    return n === 0;
};