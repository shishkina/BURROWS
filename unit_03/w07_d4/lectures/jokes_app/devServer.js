const express = require('express'),
      app = express();

app.listen(7770);

app.get('/', (req, res) => {
  res.send('Hello Tacos');
});

app.get('/bananas', (req, res) => {
  res.send('all dem bananas')
});

app.get('/joke', (req, res) => {
  res.send('What did one snowman say to the other? \b Does this place smell like carrots?')
});

app.get('/bird/eagle', (req, res) => {
  res.send('amuurriccaaaa');
});

app.get('/bird/:type', (req, res) =>{
  res.send(`This is a ${req.params.type}`)
});
