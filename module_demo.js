// Module Wrapper Function
// (function(exports, require, module, __filename, __dirname) {
// })

console.log('Hello, world!!');
const Person = require('./person');

const farhan = new Person('farhan', 20);
farhan.greeting();

// module.exports = farhan;
// module.exports = 1
module.exports = {
  id: 1,
  farhan
};

module.exports.person = farhan;

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(exports);
