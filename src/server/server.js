import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import compression from 'compression';
import path from 'path';

const app = express();
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
app.use(express.static(path.join(__dirname, '../client/public'), { maxAge: 31557600000 }));

const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config               = require('../../webpack.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(compression());
app.use(bodyParser.json());
app.use(logger('dev'));

//Root
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../index.html'))
})
//404 handler
app.get('*', function(req, res) {
  res.status(404).send('404 not found.')
});
//global error catcher
app.use((err, req, res, next) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log('uncaughtException: ', evt);
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});

