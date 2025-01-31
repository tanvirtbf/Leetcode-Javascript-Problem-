/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    for(let i=0; i<operations.length; i++){
        if(operations[i]!=="C" && operations[i]!=="D" && operations[i]!=="+"){
            let num = Number(operations[i])
            arr.push(num)
        }else if(operations[i]==="C"){
            arr.pop()
        }else if(operations[i]==="D"){
            let num = arr[arr.length-1] * 2
            arr.push(num)
        }else if(operations[i]==="+"){
            let num = arr[arr.length-1]+arr[arr.length-2]
            arr.push(num)
        }
    }
    let result = 0
    for(let i=0; i<arr.length; i++){
        result = result + arr[i]
    }
    return result
};

