module.exports = function reverseStr(str=''){
    let returnedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        returnedString += str[i]
    }
    return returnedString
}
