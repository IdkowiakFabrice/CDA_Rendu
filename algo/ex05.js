module.exports = function removeDuplicate(array=[]){
    for (let i = 0; i<array.length; i++){
        for (let j = 0; j<array.length; j++){
            if(j !== i ){
                if(array[j] === array[i]){
                    array.splice(j,1)
                }
            }
        }
    }
    return array
}
