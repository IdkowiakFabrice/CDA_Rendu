module.exports = function invert(obj){
    //Code perso

    /*let arr = []

    for(const [key, value] of Object.entries(obj)){
        arr.push(value, key)
    }
    return arr*/
    // retourne : [ 'Moses', 'Moe', 'Louis', 'Larry', 'Jerome', 'Curly' ]

    // Correction

    let newObj = {}
    let arr = Object.entries(obj)

    for(const elt of arr){
        const [key, value] = elt
        newObj[value] = key

    }
    return newObj
}