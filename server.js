const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Dynamic File Path
  let file = req.url === '/' ? 'index.html' : req.url;
  let filePath = path.join(__dirname, 'public', file);

  let fileExtension = path.extname(filePath);

  let contentType = '';
  switch (fileExtension) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/js';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'img/png';
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          if (!err && data) {
            res.writeHead(404);
            res.end(data);
          } else {
            res.end(err);
          }
        });
      } else {
        res.writeHead(500);
        res.end('<h2>Error 500: Internal Server Error...</h2>');
      }
    } else {
      res.writeHead(200, { 'Content-type': contentType });
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
