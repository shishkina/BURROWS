const db = require('../connectToDatabase')(process.env.ENV);

class Train {
  static all() {
    return db.any('SELECT * FROM trains')
      .then((records) => {
        const trains = records.map((row) => {
          const newTrain = new Train(row);
          return newTrain;
        });
        return trains;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static find(id) {
    return db.one(`
        SELECT * FROM trains
        WHERE id=$1;
      `, [id])
      .then((data) => {
        const newTrain = new Train(data);
        return newTrain;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static create(options) {
    return db.one(`
        INSERT INTO trains (name, color, description)
        VALUES ($1, $2, $3)
        RETURNING *;
      `, [options.name, options.color, options.description])
      .then((data) => {
        const newTrain = new Train(data);
        return newTrain;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static deleteAll() {
    return db.none(`
        DELETE from trains WHERE true;
      `).catch((err) => {
        console.error(err);
      });
  }
  static delete(id) {
    return db.none(`
        DELETE from trains WHERE id=$1;
      `, [id]).catch((err) => {
        console.error(err);
      });
  }
  // ~~~~~~~~ INSTANCE Definition ~~~~~~~~
  constructor({ id, name, color, description }) {
    this.name = name;
    this.color = color;
    this.id = id;
    this.description = description;
  }
  chooChoo() {
    return `The ${this.name} train said "CHoooCHOO!!"`;
  }
  save() {
    return db.one(`
        UPDATE trains
        SET name=$2, color=$3
        WHERE id=$1
        RETURNING *;
      `,
      [this.id, this.name, this.color]
    )
    .then(() => this)
    .catch((err) => {
      console.error(err);
    });
  }
  update(options) {
    Object.keys(options).forEach((key) => {
      this[key] = options[key];
    });
    return this.save();
  }
}

module.exports = Train;
