module.exports = function isDigit(str=''){
    let digit = /[^0-9]/
 
    if(digit.test(str)){
        return false
    }
    return true
}