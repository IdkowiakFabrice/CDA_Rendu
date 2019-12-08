module.exports = function last(array, n = 1){
    if(n == 1){
        return array[array.length-1]
    }
    else{
        return array.splice(-n)
    }
}