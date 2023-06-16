const http = require('http'); // require() is of Common-Js module system. we can use => import {createServer} from 'http' => importing the function directly =>EcmaScript module system..

const server = http.createServer((req, res) => {
  res.end('Node-Js is cool'); // short hand of what written below => sending respornse and closing http connection.
});

server.listen(4242, () => {
  console.log('Server is running...');
});

/*
==================================================

const reqListner = (req, res) => {
  res.write('Hello World\n'); 
  res.end();
}

const server = http.createServer(); // just creating the server

server.on('request',reqListner); // subscribe to the default 'request' emiited when server is started (server.liste()).

server.listen(4242, () => {
  console.log('Server is running...'); // the listen() actually starts the http server and accepts requests => (triggers 'request' event listners.)
});

==================================================
*/
