const migrate = require('./migrate');

migrate(`
  ALTER TABLE trains
  ADD COLUMN description TEXT;
`);
