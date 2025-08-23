/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length===0) return 0;
    nums = nums.sort((a,b)=>a-b);
    let count=1;
    let maxCount =1;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]) continue

        if( nums[i]+1 === nums[i+1]  ){
            count+=1
            maxCount = Math.max(maxCount,count);
        }
        else{
            count =1
        }
    }
    console.log(maxCount,count)
    return maxCount;
};