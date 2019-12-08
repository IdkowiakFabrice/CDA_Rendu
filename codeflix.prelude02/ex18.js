module.exports = function has(object, key){
    let x = new Boolean("false")
    if('key' in object){
        x = true
    }
    else if (!'key' in object){
        x = false
    }
    return x
}