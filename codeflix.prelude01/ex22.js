module.exports = function splice(str="", start, deleteCountopt=str.length-start, toAddopt=""){

    let strSplit= str.split('')
    let strSplice = strSplit.splice(start,deleteCountopt)

    if(toAddopt !==""){
        strSplit[start]=toAddopt+" "

    }else{
        strSplit = strSplit
    }

    strJoin = strSplit.join("")

    return strJoin

}