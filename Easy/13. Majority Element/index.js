/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let str = s.trim()
  let arr = []
  for(let i=0; i<str.length; i++){
      if(str[i]!==' '){
          arr.push(str[i])
      }else {
          arr = []
      }
  }
  return arr.length
};