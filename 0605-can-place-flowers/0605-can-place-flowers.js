var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    
    for (let i = 0; i < flowerbed.length; i++) {
        let prev = flowerbed[i - 1] || 0;
        let aft = flowerbed[i + 1] || 0;

        if (prev === 0 && aft === 0 && flowerbed[i] === 0) {
            n -= 1;
            flowerbed[i] = 1;
            if (n === 0) break;
        }
    }

    return n === 0;
};
