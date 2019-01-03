require('dotenv').config();

const connectToDatabase = require('../app/connectToDatabase');

const migrate = (env, statement) => {
  const db = connectToDatabase(env);
  return db.none(statement)
    .then(() => {
      console.log('Success!');
    })
    .catch((error) => {
      console.error(error);
    });
};

const migrateAll = (statement) => {
  const migratePromises = ['dev', 'test', 'production'].map((env) => migrate(env, statement));
  Promise.all(migratePromises).then(() => process.exit());
};

module.exports = migrateAll;
