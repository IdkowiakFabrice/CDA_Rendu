const { empty, withArgs, MyEventEmitter } = require ( './eventbox' )


console.log('=> ex01')
empty()
console.log('<=')

console.log('=> ex02')
withArgs ( 'Luffy' )
console.log('---------')
withArgs ( ['Luffy','Zoro','Nami','Sanji','Usopp'] )
console.log('<=')

const em = new MyEventEmitter()

em.on('hello', () =>{
    console.log(`Hello world`)
})

em.on('hello', function(first, last){
    console.log(`Hello, ${first} ${last}!`)
})

em.emit('hello')
em.emit('hello', 'steve', 'jobs')
em.emit('unknow')