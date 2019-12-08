module.exports = function pluck(list, propertyName){
    const stooges = [{name: 'moe', age: 40,}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    let result = stooges.map(({name}) => name)
    return result
}