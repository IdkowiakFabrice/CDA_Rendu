module.exports = function swapCase(str=""){
    let finish =""
    let length = str.length
   
    for (i=0; i<length; i++){
        if (str.charAt(i).match(/([A-Z])/g)){
            finish =finish + str.charAt(i).toLowerCase()
        }
        else if(str.charAt(i).match(/([a-z])/g)){
            finish = finish + str.charAt(i).toUpperCase()
        }
        else if (str.charAt(i).match(/ /g)){
            finish = finish + " "
        }
        else{
            finish = finish
        }
    }
    return finish
}