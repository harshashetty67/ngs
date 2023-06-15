const templateGenerator = require('./4-function'); // We are getting the fucntion reference here as its been exported.

const myTemplate = templateGenerator('Hello Node!'); // call the function

console.log(myTemplate);
