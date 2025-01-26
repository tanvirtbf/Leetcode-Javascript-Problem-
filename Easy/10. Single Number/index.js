/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let arr = []
  let negArr = []
  let maxNum = 3*10000
  
  for(let i=0; i<maxNum; i++){
      arr[i] = 0
      negArr[i] = 0
  }
  
  for(let i=0; i<nums.length; i++){
      if(nums[i]>0){
          arr[nums[i]] += 1
      }else {
          let num = -(nums[i])
          negArr[num] += 1
      }
  }
  
  let result = null
  for(let i=0; i<maxNum; i++){
      if(arr[i]===1){
          result = i
          return result
      }
  }
  for(let i=0; i<maxNum; i++){
      if(negArr[i]===1){
          result = -i
          return result
      }
  }

};