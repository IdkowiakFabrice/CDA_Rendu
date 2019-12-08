module.exports = function capitalize(str='', restToLower=false) {

    if(restToLower==true){
        
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    else{
        return str
    }

}