module.exports = function last (str="",len=1){
    length = str.length
    if (len>length){
        return str 
    }
    else if (len<length){
        return str.substr(length-len,len)
    }
}