module.exports = function isAlphaDigit(str=''){
    
    let lettersDigit = /[^a-zA-Z0-9]/
 
    if(lettersDigit.test(str)){
        return false
    }
    return true
}