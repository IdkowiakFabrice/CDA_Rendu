module.exports = function uniqueCharacters(str=''){
    let testUniqueCharacters = str[0]
    let result = false
    for(let i =1; i<str.length; i++){
        if(str[i] === testUniqueCharacters){
            result = true
        }else{
            return result = false 
        }
    }
    return result
}
