/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length === 1) return s;
    let j = s.length - 1;
    let i = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    s = s.split('');
    while (i < j) {
        if (!vowels.includes(s[i].toLowerCase())) {
            i++;
        } else if (!vowels.includes(s[j].toLowerCase())) {
            j--;
        } else {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            
            i++;
            j--;
        }
    }

    return s.join('');
};