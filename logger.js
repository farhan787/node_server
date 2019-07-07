const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v1()); // Mac Address and timer generated uuid
// console.log(uuid.v4()); // pseudo random numbers generated uuid

class Logger extends EventEmitter {
  // Fire event
  log(message) {
    this.emit('message', { id: uuid.v4(), message });
  }
}

module.exports = Logger;
