const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (!err && data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      } else throw new Error(err);
    });
  }
  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
      if (!err && data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
      }
    });
  }
  if (req.url === '/api/users') {
    const users = [
      { name: 'farhan', age: 20 },
      { name: 'jatin', age: 21 },
      { name: 'bipin', age: 21 }
    ];
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
