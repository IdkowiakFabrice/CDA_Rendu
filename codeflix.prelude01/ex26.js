module.exports = function isAlpha(str=''){
    
    let letters = /[^a-zA-Z]/
 
    if(letters.test(str)){
        return false
    }
    return true
}