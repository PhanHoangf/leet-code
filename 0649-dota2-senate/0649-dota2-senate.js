/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    senate = senate.split('');
    
    while (senate.length !== 1) {
        let teamName = senate.shift();

        if (teamName !== '') {
            for (let i = 0; i < senate.length; i++) {
                if (senate[i] !== teamName && senate[i] !== '') {
                    senate[i] = ''
                    senate.push(teamName);
                    break;
                }
            }
        }
    }

    return senate[0] === 'R' ? "Radiant" : "Dire"
};
