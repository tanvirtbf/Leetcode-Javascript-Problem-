/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let count = 0
    for(let i=0; i<nums.length-1; i++){ // index = 0, 1
        for(let j=i; j<nums.length-1; j++){ // 0, 1
            if(nums[i]+nums[j+1]===target){
                return [i,j+1]
            }
        }
    }
};