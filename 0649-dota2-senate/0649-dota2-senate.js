/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    
    let radiant =  [], dire = []
    
    const n = senate.length
    
    for(let i = 0; i < n; i++) senate[i] === "R" ? radiant.push(i) : dire.push(i)
    
    while(radiant.length && dire.length){
        let r_idx = radiant.shift(), d_idx = dire.shift()
        
        d_idx < r_idx ? dire.push(d_idx + n) : radiant.push(r_idx + n)
    }
    
    return dire.length ? "Dire" : "Radiant"    
    
};
