/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const setArr = new Set(nums)
    const arr = [...setArr]
    let firstH = -(2e31)
    let secondH = -(2e31)
    let thirdH = -(2e31)
    for(let i=0; i<arr.length; i++){
        if(firstH<arr[i]){
            firstH = arr[i]
        }
    }
    for(let i=0; i<arr.length; i++){
        if(secondH<arr[i] && arr[i]!==firstH){
            secondH = arr[i]
        }
    }
    if(arr.length>2){
        for(let i=0; i<arr.length; i++){
            if(thirdH<arr[i] && arr[i]!==secondH && arr[i]!==firstH){
                thirdH = arr[i]
            }
        }
    }else {
        thirdH =firstH
    }
    return thirdH
};

