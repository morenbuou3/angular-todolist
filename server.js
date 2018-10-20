var express = require('express');
var path = require('path');
var app = express();

app.use('/build', express.static(__dirname + '/build'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/src', express.static(__dirname + '/src'));

app.get('/', (request, response, next) => {
  response.sendfile(`${__dirname}/index.html`);
});

app.listen('9000', () => console.log('SSR Server started'));