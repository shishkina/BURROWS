const db = require('./db');

class Animal {
  static all(){
    return db.any('SELECT * FROM animals')
             .then((records) => {
               const animals = records.map((row) => {
                 return new Animal(row);
               });
               return animals;
             })
            .catch((err) => {
              console.error(err);
            });
  }
  static destroy(id) {
    return db.none(`
      DELETE FROM animals WHERE id=$1;
      `, [id])
      .catch((err) => {
        console.error(err);
      });
  }
  static find(id) {
    return db.one(`
      SELECT * FROM animals
      WHERE id=$1;
      `, [id])
      .then((row) => {
        const newAnimal = new Animal(row);
        return newAnimal;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static create({ name, nickname, creature }) {
    return db.one(`
      INSERT INTO animals
        (name, nickname, creature)
      Values
        ($1, $2, $3)
      RETURNING *;
      `, [name, nickname, creature])
      .then((row) => {
        return new Animal(row);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  constructor({ id, name, nickname, creature }) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.creature = creature;
  }
  rollAround() {
    return `Keep rollin rollin rollin rollin said ${this.name}`;
  }
}

module.exports = Animal;
