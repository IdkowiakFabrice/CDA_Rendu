const uniqueCharacters = require ('./ex01')
const reverseStr = require ('./ex02')
const anagram = require ('./ex03')
const removeDuplicate = require('./ex05')


console.log('=> uniqueCharacters')
console.log(uniqueCharacters('roronoa'))
console.log(uniqueCharacters('aaaaa'))
console.log('<=')

console.log('=> Reverse Str')
console.log(reverseStr('roronoa'))
console.log(reverseStr('oui'))
console.log('<=')

console.log('=> Anagram')
console.log(anagram('roronoa', 'aonoror'))
console.log(anagram('oui', 'non'))
console.log('<=')

console.log('=> removeDuplicate')
console.log(removeDuplicate(['roronoa', 'oui', 'roronoa', 'non', 'oui','roronoa']))
console.log(removeDuplicate(['oui', 'non', 'peutetre', '145']))
console.log('<=')