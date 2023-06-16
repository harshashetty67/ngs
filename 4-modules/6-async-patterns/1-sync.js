const fs = require('fs');

const data = fs.readFileSync(__filename); // synchronous call that blocks eventloop from doing other tasks till its completed.

console.log('File data is', data); // the below two tasks gets executed only after the file is read.

console.log('TEST');
