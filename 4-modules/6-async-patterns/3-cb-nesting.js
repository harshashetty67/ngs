const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
  fs.writeFile(__filename + '.copy', data, function cb2(err) { // as the async call grows the callback function calls also grows, this makes code more complex to read.
    // Nest more callbacks here...
  });
});

console.log('TEST');


// So its best to use promises along with async calls that doesn't need callback function associated with it.s