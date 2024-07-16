/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowels = 'aeiou';
    let maxVowels = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            maxVowels++;
        }
    }

    let windowVowels = maxVowels;
    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            windowVowels++;
        }

        if (vowels.includes(s[i - k])) {
            windowVowels--;
        }

        if (windowVowels > maxVowels) {
            maxVowels = windowVowels;
        }
    }

    return maxVowels;
};