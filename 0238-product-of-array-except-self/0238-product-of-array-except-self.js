/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // let arr = [];
    // for(let i=0;i<nums.length;i++){
    //     let mul =1;
    //     for(let j=0;j<nums.length;j++){
    //         if(j === i) continue;
    //         mul*=nums[j]
    //     }
    //     arr.push(mul);
    // }
    // return arr

    // best approach with O(n) prefix and suffix product

    let arr = Array(nums.length).fill(1);
    let prefix=1,suffix = 1;
    for(i=0;i<nums.length;i++){
        arr[i]*=prefix;
        prefix *= nums[i]; 
    }
    for(i=nums.length-1;i>=0;i--){
        arr[i]*=suffix;
        suffix *= nums[i]; 
    }
    return arr

};