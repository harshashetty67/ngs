const moduleApi = require('./3-wrapper'); // when importing the module we get module.exports as the returned object.

console.log(moduleApi.a); // the properties we exported in 3-wrapper.js module.
console.log(moduleApi.b);
console.log(moduleApi);

// output :
/*  50
    100
    { a: 50, b: 100 } 
*/
