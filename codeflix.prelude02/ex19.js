module.exports = function size(list){
    let len = 0, key; 
  
    for (key in list) 
        { 
       if (list.hasOwnProperty(key)) 
         len++; 
             } 
  
    return len;
}