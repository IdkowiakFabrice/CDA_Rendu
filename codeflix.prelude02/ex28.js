module.exports = function isRegExp(object){
    let result = (object.constructor == RegExp)
    return result
}