const Train = require('../models/Train');

const trainsController = {
  getAll(request, response) {
    Train.all().then((trains) => {
      response.status(200).send(trains); // SEND 200 oK... along with trains
    });
  },
  createTrain(request, response) {
    const trainData = request.body;
    Train.create(trainData).then((newTrain) => {
      response.status(200).send(newTrain);
    });
  },
  deleteTrain(request, response) {
    const id = request.params.id;
    Train.delete(id).then(() => {
      response.status(204).send();  // 204... no content
    });
  },
};

module.exports = trainsController;
