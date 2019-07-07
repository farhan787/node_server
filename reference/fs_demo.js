const fs = require('fs');
const path = require('path');

// Create a folder
let dirPath = path.join(__dirname, 'test', 'folder_created');

// fs.mkdir(dirPath, { recursive: true }, err => {
//   if (err) throw new Error('Folder not created');
//   else console.log('Folder created');
// });

// Create a file
// open(path, mode, callback with data and error)
const filePath = path.join(__dirname, 'test', 'file.py');
fs.open(filePath, 'r+', (err, data) => {
  if (err) {
    throw new Error(err);
  } else if (data) {
    console.log(data); // what's this ???
  } else {
    console.log('File created');
  }
});

// Beware of the file access flag what should be its value for reading, writing or any other operation
const newFilePath = path.join(__dirname, 'test', 'newFile.cpp');
fs.open(newFilePath, 'w', (err, data) => {
  if (err) {
    throw new Error(err);
  } else if (data) {
    console.log(data); // what's this ???
  } else {
    console.log('File created');
  }
});

fs.readFile(filePath, 'utf8', (err, data) => {
  if (!err && data) {
    console.log(data);
  } else if (err) {
    throw new Error(err);
  }
});

// fs.rename()
// fs.writeFile()
// fs.appendFile()