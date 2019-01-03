const ChirpDAO = require('../services/ChirpDAO');

class ChirpController {
  static getAllOfCurrentUser(req, res) {
    ChirpDAO.searchBy({ user_id: req.session.currentUser.id }).then((chirps) => {
      res.status(200).json(chirps);
    });
  }
  static create(req, res) {
    const chirpData = {
      body: req.body.body,
      user_id: req.session.currentUser.id,
    };
    ChirpDAO.create(chirpData)
           .then((chirp) => res.status(200).json(chirp));
  }
  static delete(req, res) {
    ChirpDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = ChirpController;
