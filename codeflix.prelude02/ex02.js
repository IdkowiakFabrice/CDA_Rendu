module.exports = function inital(array, n = 1){
    return n==1 ? array[0] : array.splice(0, array.length-n)
    // ou return array.slice(0, array.length - n)
}