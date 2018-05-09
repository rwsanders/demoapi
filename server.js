'use strict';
const express = require('express');
const config = require('./config');

// Constants
const PORT = config.app.port;
const HOST = config.app.ipaddress;

// App
const app = express();

//Alphabet
const alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Api/HasAlpha End Point
app.get('/api/hasAlpha', (req, res) => {
  var uriText = req.query.text;

  if(!uriText){
    res.status(400).json({error: 'Input text cannot be determined.'});
    return;
  }

  var result = alphaArray.every((letter) => {
    return uriText.includes(letter) || uriText.includes(letter.toUpperCase());
  });

  res.send(result + '\n');
});

//Api/Help End Point
app.use('/api/help', express.static(__dirname + '/doc'));

//404 Not Found
app.use(function (req, res, next) {
  res.status(404).send("Not found!");
})

//500 Server Error
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Oops, something went wrong!');
})

//Start App
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
