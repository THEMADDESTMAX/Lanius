'use strict';

const express = require('express');
let app = express();
const GameController = require('./controllers/GameController');

let cntrl = new GameController();

app.get('/', (req, res) => {

  let result = cntrl.greet();
  res.send(result);

});

app.get('/user', (req, res) => {
  res.send('Hello user!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
