/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let num = nums.length
    let arr = []
    for(let i=0; i<num+1; i++){
        arr.push(i)
    }
    for(let i=0; i<num+1; i++){
        let result = 0
        for(let j=0; j<num; j++){
            if(arr[i]===nums[j]){
                result = 1
            }
        }
        if(result===0){
            return arr[i]
        }
    }
};
