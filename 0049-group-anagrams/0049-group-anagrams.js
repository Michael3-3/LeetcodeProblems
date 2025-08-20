/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (w of strs) {
        st = w.split('').sort().join('')
        if (map.has(st)) {
            map.get(st).push(w);  
        } else {
            map.set(st, [w]);    
        }
    }
    let arr =[]
    for(let [key,val] of map){
        arr.push(val)
    }
   return arr
};