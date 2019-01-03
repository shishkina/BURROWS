require('dotenv').config();
const pgp = require('pg-promise')();

const connectToDatabase = (env = process.env.ENV) => {
  const dbConfig = ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_${env}`,
  });
  const connectionURL = `postgres://${dbConfig.username}:@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
  const db = pgp(connectionURL);
  return db;
};

module.exports = connectToDatabase;
