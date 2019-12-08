module.exports = function decapitalize(str=''){
    str = str.split(" ")

    for (i=0; i<str.length; i++){
        str[i]= str[i][0].toLowerCase()+str[i].substr(1);
    }
    return str.join(" ")

}