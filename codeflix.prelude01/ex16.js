module.exports = function countWords(str=""){
    let count = 0
    for(i=0; i<str.length; i++){
        if(str.charAt(i).match(/([A-Z])/g)){
            count = count +1

        }
    }
    return count
}