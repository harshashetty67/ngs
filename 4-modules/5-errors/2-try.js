const path = require('path');
const fs = require('fs');

const files = ['2-try.js','./3-throw.js'];

files.forEach(file => {
  try {
   //const filePath = path.resolve(process.env.HOME, file); // getting the absolute path to the file--works in linux machines.
    //console.log(filePath);
    const data = fs.readFileSync(file);
    console.log('File data is', data);
  } 
  catch (err) 
  {  
    console.log('File not found');  // keep the error message more generic. Bcz for every error it will display the same log.
  }
});
