const request = require('superagent');

describe('trainsController', () => {
  describe('GET /trains', () => {
    it('respond with json', (done) => {
      request.get('localhost:1234/trains')
        .end((err, response) => {
          expect(response.status).toEqual(200);
          expect(response.body.constructor).toEqual(Array);
          done();
        });
    });
  });
  describe('POST /trains', () => {
    it('returns the new train', (done) => {
      request.post('localhost:1234/trains')
        .send({ name: 'T', color: 'lightblue' })
        .end((err, response) => {
          expect(response.status).toEqual(200);
          expect(response.body.name).toEqual('T');
          expect(response.body.color).toEqual('lightblue');
          expect(response.body.id.constructor).toEqual(Number);
          done();
        });
    });
  });
  describe('DELETE /trains/:id', () => {
    it('removes a train', (done) => {
      let train;
      request.post('localhost:1234/trains')
        .send({ name: 'A', color: 'lightblue' })
        .end((postErr, resTrain) => {
          train = resTrain.body;
          request.del(`localhost:1234/trains/${train.id}`)
            .end((delErr, response) => {
              expect(response.status).toEqual(204);
              request.get('localhost:1234/trains')
                .end((getErr, trains) => {
                  expect(trains).not.toContain(train);
                  done();
                });
            });
        });
    });
  });
  describe('GET /trains/:id', () => {
    xit('returns the train', (done) => {
      let train;
      request.post('localhost:1234/trains')
        .send({ name: 'E', color: 'lightgreen' })
        .end((err, resTrain) => {
          train = resTrain.body;
          request.get(`localhost:1234/trains/${train.id}`)
            .end((getErr, response) => {
              expect(response.status).toEqual(200);
              expect(response.body).toEqual(train);
              done();
            });
        });
    });
  });
  describe('PATCH /trains/:id', () => {
    xit('returns the train', (done) => {
      let train;
      request.post('localhost:1234/trains')
        .send({ name: 'E', color: 'lightgreen' })
        .end((err, resTrain) => {
          train = resTrain.body;
          const newName = 'Weeeeee!';
          train.name = newName;
          request.patch(`localhost:1234/trains/${train.id}`)
            .send(train)
            .end((patchErr, response) => {
              expect(response.status).toEqual(200);
              expect(response.body.name).toEqual(newName);
              done();
            });
        });
    });
  });
});
