const User = require('../models/User');
const UsersDAO = require('../services/UsersDAO')
const createToken = require('../utilis/createToken');
const bcrypt = require('bcrypt');

class AuthenticationController {
  static login(req, res) {
    const { email, password } = req.body;

    UsersDAO.find(['email', email])
      .then((user) => {
        if (!user) {
          res.json({ message: 'User not found' });
        } else if (user) {
          if (!bcrypt.compareSync(password, user.password)) {
            res.json({ message: 'incorrect password' });
          } else {
            const token = createToken(user);
            res.cookie('token', token);
            res.send(new User(user));
          }
        }
      })
      .catch(err => res.send(err));
  }

  static signup(req, res) {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    UsersDAO.create([email, hashedPassword])
      .then((user) => {
        const token = createToken(user);
        res.cookie('token', token);
        res.send(new User(user));
      })
      .catch(err => res.send(err));
  }

  static signout(req, res) {
    res.clearCookie('token')
     .status(200)
     .json({
       message: 'User succesfully logged out',
     });
  }
}

module.exports = AuthenticationController;
