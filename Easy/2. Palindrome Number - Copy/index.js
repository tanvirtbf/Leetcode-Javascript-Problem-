var isPalindrome = function(x) {
  if(x<0) {
      return false
  }
  let testArr = []
  let finalArr = []
  let duplicateValue = x
  while(duplicateValue !== 0){
      let ans = duplicateValue % 10
      finalArr.push(ans)
      duplicateValue = Math.floor(duplicateValue / 10)
  }
  for(let i = finalArr.length-1; i>=0; i--){
      testArr.push(finalArr[i])
  }
  for(let i = 0; i<finalArr.length; i++){
      if(testArr[i]!==finalArr[i]) return false
  }
  return true
};

