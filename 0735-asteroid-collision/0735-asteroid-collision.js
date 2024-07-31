/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const isCollision = (a, b) => {
        return a > 0 && b < 0;
    }
    let res = [];
    let current;
    while (asteroids.length > 0) {
        current = asteroids.shift();
        if (res.length == 0) {
            res.push(current)
        } else {
            let a1 = res.pop();

            if (!isCollision(a1, current)) {
                res.push(a1, current);
            }
            else {
                while (isCollision(a1, current)) {
                    if (Math.abs(a1) > Math.abs(current)) {
                        current = a1;
                        a1 = res.pop();
                    } else if (Math.abs(current) > Math.abs(a1)) {
                        a1 = res.pop();
                    } else {
                        current = undefined;
                        a1 = undefined;
                    }
                }

                if (a1 === undefined && current !== undefined) {
                    res.push(current);
                } else if (a1 === undefined && current === undefined) {
                    res.push();
                } else {
                    res.push(a1, current);
                }
            }
        }
    }

    return res;
};