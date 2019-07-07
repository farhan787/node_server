const EventEmitter = require('events');

// Create a class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();
console.log(typeof myEmitter);

// Event Listener
myEmitter.on('event', () =>
  console.log('event listener is listening to an event')
);

myEmitter.on('chuchu', () => console.log('Chuchu aa rha hai'));

// Init Event
myEmitter.emit('event');
// emitter.emit(eventName, valueThatCanBeReturned, valueThatCanBeReturned,......)
console.log(myEmitter);
