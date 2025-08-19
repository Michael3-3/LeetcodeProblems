/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let smap = new Map();
    let tmap = new Map();
    for(let i=0;i<s.length;i++){
        smap.set(s[i],smap.get(s[i])+1|0);
        tmap.set(t[i],tmap.get(t[i])+1|0);

    }

    for(let [key,val] of smap){
        if(!tmap.has(key)|| tmap.get(key)!==val)
        return false; 
    }
    return true;
};