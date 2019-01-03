const User = require('../models/User');
const db = require('../config/db');
const sql = require('../config/sqlProvider').users;

class UsersDAO {
  static all() {
    return db.map(sql.all, null, row => new User(row))
  }

  static find(valueArray) {
    return db.one(sql.find, valueArray)
  }

  static create(valueArray) {
    return db.one(sql.create, valueArray);
  }
}

module.exports = UsersDAO;
