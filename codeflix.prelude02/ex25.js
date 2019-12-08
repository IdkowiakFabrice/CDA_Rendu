module.exports = function isMatch(object, properties){
    let stooge = {name: 'moe', age: 22};
    let result = _.chain(object1)
    .keys()
    .every(function(currentKey) {
        return _.has(object2, currentKey) &&
            _.isEqual(object1[currentKey], object2[currentKey]);
    })
    .value();
}