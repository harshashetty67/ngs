const fs = require('fs');
const util = require('util'); // uitl module allows us to promisify any async calls.

const readFile = util.promisify(fs.readFile);

// async and await is needed so that we wait till async call is done
async function main() {
  const data = await readFile(__filename); // we can use readFile() without callback function.
  console.log('File data is', data);
}

main();

console.log('TEST');
