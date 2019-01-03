const express = require('express'),
      app = express(),
      path = require('path')
      webpack = require('webpack'),
      config = require('./webpack.config'),
      request = require('superagent'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
    stats: {
      colors: true,
      chunks: false,
    },
  });

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/gifs/:searchTerm', (req, res) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(req.params.searchTerm)}&api_key=dc6zaTOxFJmzC`
  request.get(url).then(data => res.send(data))
})

app.listen(8080)