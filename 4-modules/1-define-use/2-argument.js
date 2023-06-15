// Note: NodeJS wraps the code we write into a function as shown below :

//function (exports,module,__filename,__dirname)   // all these arguments are local to this scope
//{  
  exports.a = 50;  // exports is alias for module.exports
  module.exports.b = 100;

  //console.log(arguments); // any code we write goes into the body of the wrapper function.

  console.log(__dirname); // directory of the file we are executing.
  console.log(__filename); // name of the file we are executing.
  console.log(exports); // list of exports
  console.log(exports.a); // we have exported argument a=50;
  console.log(module); // module holds all of the above as a single object
  // returns module.exports; //  returned value of wrapper function
//}

//Notes:
/* - This is how node internally executes our code, but we dont see this during development. 
   - The behaviour of JS inside browser works differntly, they dont have internal wrapping function. 
   - The wrapper function always returns the module.exports as return value. this is what other modules get while importing the exported details from here. */