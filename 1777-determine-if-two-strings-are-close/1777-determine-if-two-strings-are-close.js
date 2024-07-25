/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false;
    if (word1 === word2) return true;

    let hash1 = {};
    let hash2 = {};

    let flag = true;

    for (let i = 0; i < word2.length; i++) {
        if (!word1.includes(word2[i])) {
            flag = false;
        }
    }
    
    if (!flag) return false;

    for (let i = 0; i < word2.length; i++) {
        if (!hash2[word2[i]]) {
            hash2[word2[i]] = 1;
        } else {
            hash2[word2[i]] += 1;
        }
    }

    for (let i = 0; i < word2.length; i++) {
        if (!hash1[word1[i]]) {
            hash1[word1[i]] = 1;
        } else {
            hash1[word1[i]] += 1;
        }
    }
    return Object.values(hash1).sort((a, b) => a - b).join() === Object.values(hash2).sort((a, b) => a - b).join()
};
