module.exports = function flatten(array){
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])
}