var express = require('express');
var path = require('path');
var app = express();
var webpack = require('webpack');

// app.use('/build', express.static(__dirname + '/build'));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/src', express.static(__dirname + '/src'));

var compiler = webpack(require('./webpack.config.js'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}));

app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

// app.get('/', (request, response, next) => {
//   response.sendfile(`${__dirname}/index.html`);
// });

app.listen('9000', () => console.log('SSR Server started'));