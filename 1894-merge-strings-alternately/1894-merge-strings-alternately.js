/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let condition = word1.length > word2.length ? word1.length : word2.length;
   
    for (let i = 0; i < condition; i++) {
        result += (word1[i] || '') + (word2[i] || '');
    }
    
    return result;
};