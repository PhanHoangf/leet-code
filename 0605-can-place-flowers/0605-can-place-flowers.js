var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    
    // if (flowerbed[0] === 0) {
    //     if (flowerbed.length === 1) return true;
        
    //     if (flowerbed[1] === 0) {
    //         n -= 1;
    //         flowerbed[0] = 1;
    //     }
    // }

    // if (n === 0) return true;

    // if (flowerbed[flowerbed.length - 1] === 0) {
    //     if (flowerbed[flowerbed.length - 2] === 0) {
    //         n -= 1;
    //         flowerbed[flowerbed.length - 1] = 1;
    //     }
    // }

    // if (n === 0) return true;


    for (let i = 0; i < flowerbed.length; i++) {
        let prev = flowerbed[i - 1] || 0;
        let aft = flowerbed[i + 1] || 0;

        // console.log("//////////////////////////")
        // console.log(prev, "<== prev")
        // console.log(n, "<== loop")
        // console.log(aft, "<== aft")
        // console.log(i, "<== i")
        // console.log("//////////////////////////")



        if (prev === 0 && aft === 0 && flowerbed[i] === 0) {
            n -= 1;
            flowerbed[i] = 1;
            if (n === 0) break;
        }
    }

    return n === 0;
};
