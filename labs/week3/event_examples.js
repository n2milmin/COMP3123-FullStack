const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event
const helloFn = () => {
    console.log('Hello world!');
}

// Create an event handler
eventEmitter.on('hello', helloFn);

// Fire the 'hello' event
eventEmitter.emit('hello');
eventEmitter.emit('hello');

// Remove the event handler 
eventEmitter.removeListener('hello', helloFn);

// Fire the 'hello' event again 
eventEmitter.emit('hello'); // Nothing happens 

