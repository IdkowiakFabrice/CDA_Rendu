module.exports = function isBlank(str=''){

    if(str == "" || !str.trim()){
        return true
    }else{
        return false
    }

}