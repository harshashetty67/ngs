const fs = require('fs').promises; // promise api of 'fs' module

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data); //copying this file content to '6-promise-nesting.js.copy' file.
  // More awaits here...
}

main();
console.log('TEST');

//==========================================
/* 
 - async calls can be nested easily one after other with 'await' keyword (await makes sures that one call is complete for other to start).
 - This makes code more readable and reduces complexity.
*/
