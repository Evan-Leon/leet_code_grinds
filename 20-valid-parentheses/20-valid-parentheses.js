/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const stack = [];

 const obj = {
     '(':')',
    '{': '}',
    '[':']'
 }

 for (let i =0; i < s.length; i+=1){
     if (obj[s[i]]){
         stack.push(obj[s[i]])
     }else if (s[i] !== stack.pop()){
        return false
     }
 }
 return (stack.length === 0);
   
};