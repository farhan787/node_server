const path = require('path');

// Basename
console.log(__filename)
console.log(path.basename(__filename))


// Dirname
console.log(__dirname)
console.log(path.dirname(__filename))

// Extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__dirname))

// Concatenate paths
// Good for delimiters for different Operating Systems
console.log(path.join(__dirname, 'test', 'index.html'))
console.log(path.join(__dirname, 'test/hello.html'))

console.log(path.join(__dirname, 'hello', 'hutiye', 'how', 'are', 'you', 'code.cpp'))