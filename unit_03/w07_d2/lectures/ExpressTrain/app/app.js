const express = require('express');
const bodyParser = require('body-parser');
const trainController = require('./controllers/trainsController');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// IF someone sends  GET request to /trains... run trainController.getAll
app.get('/trains', trainController.getAll);
app.post('/trains', trainController.createTrain);
app.delete('/trains/:id', trainController.deleteTrain);
app.get('*', (request, response) => {
  response.status(404).send({ message: 'Not Found' });
});

module.exports = app;
