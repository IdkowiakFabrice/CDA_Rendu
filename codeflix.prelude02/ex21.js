module.exports = function map(list, iterateCb) {
    let arr = []
    if(Array.isArray(list)) {
        for(let value of list) {
            arr.push(iterateCb(value))
        }
    }else {
        for(const [key, value] of Object.entries(list)) {
            arr.push(iterateCb(value))  
        }
    }
    return arr
}