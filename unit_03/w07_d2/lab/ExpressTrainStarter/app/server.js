require('dotenv').config();

process.env.ENV = process.env.ENV || 'dev';

const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
