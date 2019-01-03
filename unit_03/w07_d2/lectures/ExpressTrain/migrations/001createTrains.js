const migrate = require('./migrate');

migrate(`
  CREATE TABLE trains (
    id SERIAL NOT NULL,
    name TEXT,
    color TEXT
  );
`);
