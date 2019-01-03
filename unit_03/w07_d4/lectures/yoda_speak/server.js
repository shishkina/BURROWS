const express = require('express'),
      app = express(),
      request = require('superagent');

app.listen(3000);

app.get('/', (req, res) => {
  const { sentence } = req.query;
  request
    .get(`https://yoda.p.mashape.com/yoda?sentence=${sentence}`)
    .set('X-Mashape-Key', `dCdWsbnUNnmshflnCppu08n6m5U9p13pxWzjsnIn4QNgQXrVzw`)
    .set("Accept", "text/plain")
    .catch((err) => {
      res.send(err);
    })
    .then((yodaSpeak) => {
      res.send(yodaSpeak.text)
    });
});