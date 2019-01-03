const express = require('express');
const bodyParser = require('body-parser');
const ColourLovers = require('./ColourLovers');
const TwilioMachine = require('./TwilioMachine');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/api/colors', (request, response) => {
  const colorBot = new ColourLovers();
  colorBot.getColors().then((colorData) => {
                  response.status(200).send(colorData);
              });
});

app.post('/api/sms', (request, response) => {
  const twillioBot = new TwilioMachine();
  const to = request.body.to;
  const message = request.body.message;
  const times = request.body.times;
  if (times <=1 ){
    twillioBot.send({ to, message })
              .then((twilResponse) => {
                response.status(204).send();
              })
              .catch((error) => {
                console.error(error);
                response.status(500).send({ message: 'Nope' });
              });
  } else {
    twillioBot.sendMultiple({ to, message, times });
    response.status(204).send({ message: 'you mad bro?' });
  }

});

module.exports = app;
