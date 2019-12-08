module.exports = function repeat(str="", timesopt=1){
    let finish =""
    if(timesopt==0){
        return str=""
    }else{
        for(i=0; i<timesopt;i++){
            finish = finish + str
        }
    }    
    return finish
}