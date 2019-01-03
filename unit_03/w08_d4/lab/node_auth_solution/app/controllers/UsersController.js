const UsersDAO = require('../services/UsersDAO');
const User = require('../models/User');

class UsersController {
  static index(req, res) {
    UsersDAO.all()
      .then(users => res.send(users))
      .catch(err => res.send(err));
  }

  static show(req, res) {
    UsersDAO.find(['id', req.params.id])
     .then(user => res.send(new User(user)))
     .catch(err => res.send(err));
  }
}

module.exports = UsersController;
