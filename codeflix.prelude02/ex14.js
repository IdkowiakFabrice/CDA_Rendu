module.exports = function pairs(object){
    var keys = _keys(object);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], object[keys[i]]];
    }
    return pairs;
  }

function _keys(object) 
  {
    if (!isObject(object)) return [];
    if (Object.keys) return Object.keys(object);
    var keys = [];
    for (var key in object) if (_.has(object, key)) keys.push(key);
    return keys;
  }
function isObject(object) 
 {
    var type = typeof object;
    return type === 'function' || type === 'object' && !!object;
  }