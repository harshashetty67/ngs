const path = require('path');
const fs = require('fs');

const files = ['./2-try.js', '','./3-throw.js']; 

files.forEach(file => {
  //const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(file); // since there is an empty file path, node will throw error and exit. But its important to handle errors carefully using try{} and catch() blocks.
  console.log('File data is', data);
});
