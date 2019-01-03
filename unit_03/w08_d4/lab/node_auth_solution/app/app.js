const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./config/routes');
const auth = require('./middleWare/authentication');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/api', auth);
app.use('/api', routes);

module.exports = app;
