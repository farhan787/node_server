const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log(data));
logger.log('Hello, World!!');

logger.on('event', (a, b, c) => console.log(a, b, c))
logger.emit('event', 1, 2, 3)