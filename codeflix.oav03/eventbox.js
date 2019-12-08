const { EventEmitter } = require ( 'events' )

// Exercice 01
function empty() {
    // Instantiate emitter
    const myEmitter = new EventEmitter()

    // Set an event
    myEmitter.on('hi', function() {
        console.log('hello world')
    })

    // Calling my event 
    myEmitter.emit('hi')
}   

// Exercice 02
function withArgs ( data ) {
    // Instantiate emitter
    const myEmitter = new EventEmitter()

    // Set an event
    myEmitter.on('newFellow', args => {
        if ( typeof args === 'string' ){
            console.log(`Here comes a new challenger ${data}`)
        }else if (Array.isArray(args)){
            for(const data of args){
                console.log(`Here comes a new challenger ${data}`)
            }
        }else{
            console.log("fail")
        }
    })

    // Calling my event 
    myEmitter.emit( 'newFellow', data )
}

// Exercice 03
class MyEventEmitter {
    constructor() {
        this.event = {}
    }
    
    on(eventName, callback){
        this.event[eventName] = callback
    }

    emit(eventName, ...data){
        const arrCallback = this.event[eventName]
        if(arrCallback !== undefined){
            // this.event[eventName]()
            callback(...data)
            // callback(data[0], data[1], data[2] ... )
        }
    }
}


// Export my function
module.exports = {
    empty,
    withArgs,
    MyEventEmitter
}