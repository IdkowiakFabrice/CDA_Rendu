const first = require('./ex01')
const last = require('./ex03')
const initial = require('./ex02')
const rest = require('./ex04')
const flatten = require('./ex05')
const without = require('./ex06')
const union = require('./ex07')
const intersection = require('./ex08')
const difference = require('./ex09')
const indexOf = require('./ex10')
const lastIndexOf = require('./ex11')
const keys = require('./ex12')
const values = require('./ex13')
const pairs = require('./ex14')
const invert = require('./ex15')
const omit = require('./ex17')
const has = require('./ex18')
const size = require('./ex19')
const sample = require('./ex20')
const map = require('./ex21')
const pluck = require('./ex22')
const isArray = require('./ex23')
const isObject = require('./ex24')
const isMatch = require('./ex25')
const isUndefined = require('./ex26')
const isNull = require('./ex27')
const isRegExp = require('./ex28')
const isFunction = require('./ex29')

console.log("=> First")
console.log(first([10,5,'hello']))
console.log(first([10,5,'hello'], 2))
console.log(first([10,5,'hello'], 3))
console.log(("<="))

console.log("=> Last")
console.log(last([10,5,'hello',2]))
console.log(last([10,5,'hello',2],2))
console.log(last([10,5,'hello',2],3))
console.log("<=")

console.log("=> Initial")
console.log(initial([5,4,3,2,1]))
console.log(initial([5,4,3,2,1],2))
console.log(initial([5,4,3,2,1],4))
console.log("<=")

console.log("=> Rest")
console.log(rest([5,4,3,2,1,], 2))
console.log(rest([5,4,3,2,1,], 3))
console.log("<=")

console.log("=> Flatten")
console.log(flatten([1, [2], [3, [[4]]]]))
//console.log(flatten([1, [2], [3, [[4]]]], true))
console.log("<=")

console.log("=> Without")
console.log(without([1,2,1,0,3,1,4],0,1))
console.log(without([17,2,41,0,34,1,44],0,1,17,44))
console.log("<=")

console.log("=> Union")
console.log(union([1,2,3], [101,2,1,10], [2,1]))
console.log("<=")

console.log("=> Intersection")
console.log(intersection([1,2,3], [101,2,1,10], [2,1]))
console.log("<=")

console.log("=> Difference")
console.log(difference([1,2,3,4,5], [5,2,10]))
console.log("<=")

console.log("=> IndexOf")
console.log(indexOf([1,2,3],2))
console.log("<=")

console.log("=> lastIndexOf")
console.log(lastIndexOf([1,2,3,1,2,3], 2))
console.log("<=")

console.log("=> Keys")
console.log(keys({one: 1, two: 2, three: 3}))
console.log("<=")

console.log("=> Values")
console.log(values({one: 1, two: 2, three: 3}))
console.log("<=")

console.log("=> Pairs")
console.log(pairs({one : 1, two : 2, three : 3}))
console.log("<=")

console.log("=> Invert")
console.log(invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}))
console.log("<=")

console.log("=> Omit")
console.log(omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid'))
console.log(omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object){
    return _.isNumber(value);}))
console.log("<=")

console.log("=> Has")
console.log(has({a: 1, b: 2, c: 3}, "b"))
console.log("<=")

console.log("=> Size")
console.log(size([1,2,3,4,5]))
console.log(size({one: 1, two: 2, three: 3}))
console.log("<=")

console.log("=> Sample")
console.log(sample([1,2,3,4,5,6]))
console.log(sample([1,2,3,4,5,6],3))
console.log("<=")

console.log("=> Map")
console.log(map([1,2,3], function(num){return num * 3;}))
console.log(map({one: 1, two: 2, three: 3}, function(num, key){return num * 3;}))
console.log("<=")

console.log("=> Pluck")
const stooges = [{name: 'moe', age: 40,}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(pluck(stooges, 'name'))
console.log("<=")*

console.log("=> isArray")
console.log(isArray([1,2,3]))
console.log("<=")

console.log("=> isObject")
console.log(isObject({}))
console.log(isObject(1))
console.log("<=")

/*console.log("=> isMatch")
let stooge = {name: 'moe', age: 22};
console.log(isMatch(stooge,{age: 22}))
console.log("<=")*/

console.log("=> isUndefined")
let efrei
console.log(isUndefined(efrei))
console.log("<=")

console.log("=> isNull")
console.log(isNull(null))
console.log(isNull(undefined))
console.log("<=")

console.log("=> isRegExp")
console.log(isRegExp(/moe/))
console.log("<=")

console.log("=> isFunction")
console.log(isFunction(map))
console.log("<=")