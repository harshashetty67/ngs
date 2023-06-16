const fs = require('fs');

fs.readFile(__filename, function cb(err, data) {  // async call to read the file => it needs a callback function with 'err' as first argument.
  console.log('File data is', data);
});

console.log('TEST'); // Here this task will run before the file read process.
