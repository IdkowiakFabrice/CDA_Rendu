module.exports = function isUpperCase(str=''){
    let upper = /[^A-Z]/
 
    if(upper.test(str)){
        return false
    }
    return true
}