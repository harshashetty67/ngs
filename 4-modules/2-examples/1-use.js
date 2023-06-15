const api = require('./1-object'); // we are importing the top-level args as api object here. 

console.log(api.language, api.direction, api.encoding);

// Note: 
/* - The type of object we import would depend on what we are exporting on other side.
   - If its an array or content we are exporting, then we can directly use them along with require()
   - If we are exporting a function we get the function reference imported */
