const pgPromise = require('pg-promise');

const pg = pgPromise();

const databaseURL = 'postgres://ajm:@localhost:5432/animal_app';

const db = pg(databaseURL);

module.exports = db;
