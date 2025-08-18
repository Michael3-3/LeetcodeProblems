/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let newarr = nums.map((num)=>encript(num));
    return newarr.reduce((a,b)=>a+b,0)
};


const encript = (num)=>{
    let arr = [];
    count=0;
    while(num!=0){
        arr.push(num%10);
        num = Math.floor(num/10);
        count++;
    }
    maxele=Math.max(...arr);
    result = 0;
    for(let i=0;i<count;i++) result=result*10+maxele;

    return result;
}