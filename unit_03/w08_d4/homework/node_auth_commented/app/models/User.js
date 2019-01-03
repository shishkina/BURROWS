class User {
  constructor(obj) {
    const { email, id, password } = obj;
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
