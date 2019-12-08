module.exports = function insert(str="", toInsertopt="", positionopt=0){
 
    let finish = [str.slice(0,positionopt), toInsertopt, str.slice(positionopt)].join('')

    return finish
}