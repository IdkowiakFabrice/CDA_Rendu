module.exports = function isNull(object){
    if(object === undefined){
        return 'false'
    }
    else if(object === null){
        return true
    }
}