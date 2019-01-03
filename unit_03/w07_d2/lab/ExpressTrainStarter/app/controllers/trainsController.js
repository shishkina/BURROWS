const Train = require('../models/Train');

const trainsController = {
  getAll(request, response) {
    Train.all().then((trains) => {
      response.status(200).send(trains);
    });
  },
  createTrain(request, response) {
    const trainData = request.body;
    Train.create(trainData).then((train) => {
      response.status(200).send(train);
    });
  },
  deleteTrain(request, response) {
    const id = request.params.id;
    Train.delete(id).then(() => {
      response.status(204).send();
    });
  },
};

module.exports = trainsController;
