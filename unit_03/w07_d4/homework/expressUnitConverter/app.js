const express = require('express'),
      app = express(),
      logger = require('morgan'),
      request = require('superagent');

app.use(logger('dev'));
app.listen(3000, ()=>{
  console.log("Priom... priom...");
});

app.get('/', (req,res) => {
  res.send("Welcome home!");
});

app.get('/weather/to-celsius/:farenheit', (req,res) => {
  const celsius = (req.params.farenheit - 32) * (5/9);
  res.send(`Converted from C to F: ${JSON.parse(celsius)}`);
});

app.get('/weather/to-farenheit/:celsius', (req, res) => {
  const farenheit = (req.params.celsius * 9) / 5 + 32;
  res.send(`Converted from F to C: ${JSON.parse(farenheit)}`);
});

app.get('/distance/to-miles/:kilometers', (req, res) => {
  const miles = req.params.kilometers / 1.609344;
  JSON.parse(miles);
  res.send(miles);
});

app.get('/distance/to-kilometers/:miles', (req, res) => {
  const kilometers = miles * 1.609344;
  res.send(`Converted from Miles to Kilometers: ${JSON.parse(kilometers)}`);
});

app.get('/poemgenerator', (req,res) => {
  request.get("http://shakeitspeare.com/api/poem");
})
