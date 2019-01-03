const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const Animal = require('./Animal');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/animals', (request, response) => {
  Animal.all().then((animals) => {
    response.status(200).send(animals);
  });
});

app.get('/api/animals/:id', (request, response) => {
  const id = request.params.id;
  Animal.find(id).then((animal) => {
    response.status(200).send(animal);
  });
});

app.delete('/api/animals/:id', (request, response) => {
  const id = request.params.id;
  Animal.destroy(id).then(() => {
    response.status(204).send({ message: 'animal is now free' });
  });
});

app.post('/api/animals', (request, response) => {
  const animalDetails = request.body;
  Animal.create(animalDetails).then((animal) => {
    response.status(200).send(animal);
  });
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
