const { readFile } = require('fs').promises; // node modules by default offer some promise async calls().

async function main() {
  const data = await readFile(__filename,'utf-8');  // without callback func()
  console.log('File data is', data);
}

main();

console.log('TEST');  // works same as previous example

//=============================================================================================================

// node modules with promises APIs are the future as they are easy to implement and understand.