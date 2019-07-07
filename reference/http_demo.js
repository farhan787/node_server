const http = require('http');
// console.log(http);
// console.log(http.STATUS_CODES);

// http.createServer(handler).listen(port, callback)

http.createServer((req, res) => {
    res.write('Hello, world!!')
    res.end()
}).listen(3000)