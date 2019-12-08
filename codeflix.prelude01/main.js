const lowerCase = require ('./ex01')
const upperCase = require ('./ex02')
const lenght = require ('./ex03')
const capitalize = require ('./ex04')
const decapitalize = require ('./ex05')
const kebabCase = require ('./ex06')
const snakeCase = require ('./ex07')
const swapCase = require ('./ex08')
const charAt = require ('./ex09')
const first = require ('./ex10')
const last = require ('./ex11')
const substr = require ('./ex12')
const slice = require ('./ex13')
const count = require ('./ex14')
const countsubstring = require ('./ex15')
const countWords = require ('./ex16')
const indexOf = require ('./ex17')
const lastIndexOf = require ('./ex18')
const insert = require ('./ex19')
const repeat = require ('./ex20')
const reverse = require ('./ex21')
const splice = require ('./ex22')
const trim = require ('./ex23')
const endsWith = require ('./ex24')
const includes = require ('./ex25')
const isAlpha = require ('./ex26')
const isAlphaDigit = require ('./ex27')
const isBlank = require ('./ex28')
const isDigit = require ('./ex29')
const isEmpty = require ('./ex30')
const isLowerCase = require ('./ex31')
const isUpperCase = require ('./ex32')
const isNumeric = require ('./ex33')
const isString = require ('./ex34')
const startsWith = require ('./ex35')
const chars = require ('./ex36')
const split = require ('./ex37')


















console.log('=> lowerCase')
console.log(lowerCase('Chopper'))
console.log(lowerCase('OUI'))
console.log('<=')

console.log('=> upperCase')
console.log(upperCase('Chopper'))
console.log(upperCase('oui'))
console.log('<=')

console.log('=> lenght')
console.log(lenght('Chopper'))
console.log(lenght('oui'))
console.log('<=')

console.log('=> capitalize')
console.log(capitalize('ChoppEr', true))
console.log(capitalize('oui',true))
console.log('<=')

console.log('=> capitalize')
console.log(decapitalize('Woonan', true))
console.log(decapitalize('El Drago',true))
console.log('<=')

console.log('=> kebabCase')
console.log(kebabCase('love one code'))
console.log(kebabCase('LoveOneCode'))
console.log('<=')

console.log('=> snakeCase')
console.log(snakeCase('gold d roger'))
console.log(snakeCase('GoldDRoger'))
console.log('<=')

console.log('=> swapCase')
console.log(swapCase('gold d roger'))
console.log(swapCase('GoldDRoger'))
console.log(swapCase('One Code'))
console.log('<=')

console.log('=> charAt')
console.log(charAt('chopper', 0))
console.log(charAt('chopper', 2))
console.log('<=')

console.log('=> first')
console.log(first('chopper', 2))
console.log(first('tony', 5))
console.log('<=')

console.log('=> last')
console.log(last('chopper', 2))
console.log(last('tony', 5))
console.log('<=')

console.log('=> substr')
console.log(substr('tony tony chopper', 10))
console.log(substr('chopper', 2, 2))
console.log('<=')

console.log('=> slice')
console.log(slice('chopper', 1))
console.log(slice('chopper',-4))
console.log(slice('chopper',1,4))
console.log('<=')

console.log('=> count')
console.log(count('chopper'))
console.log('<=')

console.log('=> countsubstring')
console.log(countsubstring('tony tony chopper', 'tony'))
console.log(countsubstring('gomu gomu no', 'Gear'))
console.log('<=')

console.log('=>countWords')
console.log(countWords('Tony Tony Chopper'))
console.log(countWords('TonyTonyChopper'))
console.log(countWords('Tony Tony - Chopper'))

console.log('=> indexOf')
console.log(indexOf('Ch0pper', '0'))
console.log(indexOf('Ch0pper', 'o'))
console.log('<=')

console.log('=> lastIndexOf')
console.log(lastIndexOf('Ch0pper', 'p'))
console.log(lastIndexOf('Ch0pper', 'o'))
console.log('<=')

console.log('=> insert')
console.log(insert('Chpper', '0', 2))
console.log(insert('Tony', 'tony ch0pper' , 4))
console.log('<=')

console.log('=> repeat')
console.log(repeat('w',3 ))
console.log(repeat('gomu', 0))
console.log('<=')

console.log('=> reverse')
console.log(reverse('Chopper'))
console.log('<=')

console.log('=> splice')
console.log(splice('tony tony chopper', 0, 10))
console.log(splice('tony chopper', 0, 4, 'tony tony'))
console.log(splice('tony tony usopp', -5, 5, 'chopper'))
console.log('<=')

console.log('=>trim')
console.log(trim(' Tony Tony Chopper '))
console.log('<=')

console.log('=>endsWith')
console.log(endsWith('Tony Tony Chopper','Chopper'))
console.log(endsWith('Tony Tony Chopper','Tony'))
console.log(endsWith('Chopper','ho',3))
console.log('<=')

console.log('=> includes')
console.log(includes('Ch0pper', 'pper'))
console.log(includes('Ch0pper', 'o', 3))
console.log('<=')

console.log('=> isAlpha')
console.log(isAlpha('Chopper'))
console.log(isAlpha('Chopper!'))
console.log(isAlpha('Chopper and Usopp'))
console.log('<=')

console.log('=> isAlphaDigit')
console.log(isAlphaDigit('Ch0pper'))
console.log(isAlphaDigit('1986'))
console.log(isAlphaDigit('1337-42'))
console.log('<=')

console.log('=> isBlank')
console.log(isBlank(''))
console.log(isBlank('  '))
console.log(isBlank('Chopper!'))
console.log('<=')

console.log('=> isDigit')
console.log(isDigit('42'))
console.log(isDigit('9.4'))
console.log(isDigit('Ch0pper'))
console.log('<=')

console.log('=> isEmpty')
console.log(isEmpty(''))
console.log(isEmpty('  '))
console.log(isEmpty('Chopper!'))
console.log('<=')

console.log('=> isLowerCase')
console.log(isLowerCase('chopper'))
console.log(isLowerCase('Chopper'))
console.log(isLowerCase('Ch0pper'))
console.log('<=')

console.log('=> isUpperCase')
console.log(isUpperCase('CHOPPER'))
console.log(isUpperCase('Chopper'))
console.log('<=')

console.log('=> isNumeric')
console.log(isNumeric('1986'))
console.log(isNumeric('-7.5'))
console.log(isNumeric('1.9E+2'))
console.log(isNumeric('five'))
console.log('<=')

console.log('=> isString')
console.log(isString('chopper'))
console.log(isString('1337'))
console.log('<=')

console.log('=> startsWith')
console.log(startsWith('I gotta give my all for everone in my crew!','I gotta'))
console.log(startsWith('Tony Tony Chopper','on',1))
console.log(startsWith('Tony Tony Chopper','Chopper'))
console.log('<=')

console.log('=> chars')
console.log(chars('ch0pper'))
console.log('<=')

console.log('=> split')
console.log(split('tony tony ch0pper',' '))
console.log(split('gomu gomu no bazooka',/\s/,2))
console.log('<=')
