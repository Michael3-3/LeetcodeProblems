/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for(i of nums){
        map.set(i,map.get(i)+1|0);
    }
    map = [...map.entries()].sort((a,b)=> b[1]-a[1]);
    let final =[]
    for(let i = 0 ;i<k;i++){
        final.push(map[i][0])
    }
    return final
};