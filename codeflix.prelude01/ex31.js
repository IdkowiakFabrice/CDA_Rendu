module.exports = function isLowerCase(str=''){
    let lower = /[^a-z]/
 
    if(lower.test(str)){
        return false
    }
    return true
}