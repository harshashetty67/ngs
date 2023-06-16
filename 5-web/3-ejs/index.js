// In order to render html templates instead of plain texts we should use template expressions. Here basic EJS is used
// For advanced web pages it best to use frameworks like React-JS

const express = require('express');

const server = express();

server.set('view engine', 'ejs'); // setting EJS as template renderer.
server.get('/', (req, res) => {
  res.render('index'); // assigning the index.ejs template
});

server.get('/about', (req, res) => {
  res.render('about'); // assigning the about.ejs template
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
