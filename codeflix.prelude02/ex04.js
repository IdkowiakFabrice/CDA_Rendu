module.exports = function rest(array, index = 1){
    //return index == 1 ? array[0] : array.splice(index, array.length)
    return array.splice(index, array.length)
}