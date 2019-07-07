const os = require('os');

// Platform
console.log(os.platform());

// Architecture
console.log(os.arch());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home Directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());

// CPUs
console.log(os.cpus().length);
console.log(os.cpus());
