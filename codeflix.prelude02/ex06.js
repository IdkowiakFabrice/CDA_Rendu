module.exports = function without(array,...values){
    let arr1 = []
    for(const v of array){
        if(values.includes(v) == false){
            arr1.push(v)
        }
    }
    return arr1
}