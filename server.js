'use strict';
const express = require('express');
const config = require('./config');

// Configs
const PORT = config.app.port;

// App
const app = express();

//Alphabet
const alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

//Api/HasAlpha End Point
app.get('/api/hasAlpha', (req, res) => {
  let uriText = req.query.text;

  if(!uriText){
    res.status(400).json({error: 'Input text cannot be determined.'});
    return;
  }

  let result = alphaArray.every((letter) => {
    return uriText.includes(letter) || uriText.includes(letter.toUpperCase());
  });

  let json = {};
  json.result = result;

  res.json(json);
});

//Api/Help End Point
app.use('/api/help', express.static(__dirname + '/doc'));

//404 Not Found
app.use(function (req, res, next) {
  res.status(404).json({error: 'Not found!'});
})

//500 Server Error
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({error: 'Oops, something went wrong!'});
})

//Start App
var server = app.listen(PORT, function(){
  console.log('Running on port: %s', server.address().port);
});
