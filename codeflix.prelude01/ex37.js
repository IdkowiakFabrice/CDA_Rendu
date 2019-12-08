module.exports = function split(str='',separatoropt,limitopt){
    str = str.split(separatoropt)

    if(limitopt>0){
        str = str.slice(0,limitopt)
    }

    return str
}