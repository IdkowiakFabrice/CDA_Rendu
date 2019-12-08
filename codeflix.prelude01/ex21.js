module.exports = function reverse (str=""){
    let splitStr = str.split("")
    let reverseStr = splitStr.reverse()
    let joinStr = reverseStr.join("")
    return joinStr 
}