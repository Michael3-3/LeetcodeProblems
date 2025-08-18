/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for(i of nums){
        map.set(i,map.get(i)+1||0)
    }
    for(let [i,j] of map){
        if(j>0) return true
    }
    return false
};