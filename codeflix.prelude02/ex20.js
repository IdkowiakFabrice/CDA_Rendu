module.exports = function sample(list, n=1){
    let rand = list[Math.floor(Math.random() * list.length)];
    return rand
}