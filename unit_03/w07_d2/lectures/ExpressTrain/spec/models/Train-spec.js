const Train = require('../../app/models/Train');

describe('Train', () => {
  let savedTrain;
  const mockTrain = {
    name: 'C',
    color: 'blue',
    description: 'Really alright!',
  };
  beforeEach((done) => {
    Train.deleteAll().then(() => {
      Train.create(mockTrain).then((train) => {
        savedTrain = train;
        done();
      });
    });
  });
  describe('.all', () => {
    it('returns array of Train objects', (done) => {
      Train.all().then((data) => {
        expect(data.constructor).toEqual(Array);
        expect(data[0].constructor).toEqual(Train);
        done();
      });
    });
  });
  describe('.find', () => {
    it('returns a single Train object', (done) => {
      Train.find(savedTrain.id).then((train) => {
        expect(train.constructor).toEqual(Train);
        expect(train).toEqual(savedTrain);
        done();
      });
    });
  });
  describe('.create', () => {
    it('returns newly created Train with ID', (done) => {
      Train.create({ name: 'N', color: 'yellow' })
        .then((train) => {
          expect(train.constructor).toEqual(Train);
          expect(train.name).toEqual('N');
          expect(train.id).toBeDefined();
          done();
        });
    });
  });
  describe('.deleteAll', () => {
    it('clears database of trains', (done) => {
      Train.deleteAll()
        .then(() => {
          Train.all().then((data) => {
            expect(data.length).toEqual(0);
            done();
          });
        });
    });
  });
  describe('.delete', () => {
    it('removes train from database', (done) => {
      Train.delete(savedTrain.id)
        .then(() => {
          Train.all().then((trains) => {
            const ids = trains.map((train) => train.id);
            expect(ids).not.toContain(savedTrain.id);
            done();
          });
        });
    });
  });
  describe('#new', () => {
    it('maintains train\'s properties', () => {
      expect(savedTrain.name).toEqual(mockTrain.name);
      expect(savedTrain.color).toEqual(mockTrain.color);
      expect(savedTrain.description).toEqual(mockTrain.description);
    });
  });
  describe('#save', () => {
    it('updates train\'s properties', (done) => {
      savedTrain.name = 'LnotherTrain';
      savedTrain.save()
        .then(() => {
          Train.find(savedTrain.id)
            .then((train) => {
              expect(train).toEqual(savedTrain);
              done();
            });
        });
    });
  });
  describe('#update', () => {
    beforeEach(() => {
      spyOn(savedTrain, 'save');
    });
    it('modifies train\'s properties', () => {
      savedTrain.update({ name: 'banana' });
      expect(savedTrain.name).toEqual('banana');
    });
    it('calls save on train', () => {
      savedTrain.update({ name: 'banana' });
      expect(savedTrain.save).toHaveBeenCalled();
    });
    xit('does not allow to change id', () => {
      const originalID = savedTrain.id;
      savedTrain.update({ id: 'NotGoodID' });
      expect(savedTrain.id).not.toEqual('NotGoodID');
      expect(savedTrain.id).toEqual(originalID);
    });
  });
  describe('#chooChoo', () => {
    it('the train speaks with it\'s name', () => {
      const message = savedTrain.chooChoo();
      expect(message).toContain(savedTrain.name);
    });
  });
});
