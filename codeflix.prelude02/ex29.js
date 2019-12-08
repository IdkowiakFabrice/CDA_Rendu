module.exports = function isFunction(object){
   /* if(object === Function){
        return 'true'
    }*/
    return object && {}.toString.call(object) === 'true';
}