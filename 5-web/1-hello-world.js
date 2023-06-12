const http = require('http'); // require() is of Common-Js module system. we can use => import {createServer} from 'http' => importing the function directly =>EcmaScript module system..

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
