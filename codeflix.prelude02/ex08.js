module.exports = function intersection(...arrays){
    let arr = []
    const ft = arrays[0]
    for (const v of ft){
        let present = true;
        for(i=1; i<arrays.length;i++) {
            if (!arrays[i].includes(v)){
                present = false;
            }
        }
        if (present == true){
            arr.push(v)
        }
    }
    return arr
}