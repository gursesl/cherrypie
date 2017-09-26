import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 5000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.get('/users', (req, res) => {
//   res.json([
//     {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@rmail.com"},
//     {"id": 2, "firstName": "Mark", "lastName": "Smith", "email": "bob@rmail.com"},
//     {"id": 3, "firstName": "Tina", "lastName": "Smith", "email": "bob@rmail.com"}
//   ]);
// });

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
