const path = require('path');
const fs = require('fs');

const files = ['2-try.js', '1-loop.js'];

files.forEach(file => {
  try 
  {
    const data = fs.readFileSync(file,'UTF-8'); // UTF-8 encoding argument decodes the file content.
    console.log('File data is', data);
  } 
  catch (err) 
  {
    if (err.code === 'ENOENT') 
    {
      console.log('File not found');
    } 
    else 
    {
      throw err;
    }
  }
  finally
  {
    console.log("Just showing that Finally can run in Node-JS..");
  }
});
