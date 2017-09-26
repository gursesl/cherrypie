import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import cors from 'cors';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 5000;
const app = express();
const compiler = webpack(config);

app.use(cors());

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@rmail.com"},
    {"id": 2, "firstName": "Mark", "lastName": "Smith", "email": "bob@rmail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Smith", "email": "bob@rmail.com"}
  ]);
});

app.listen(process.env.PORT || port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

