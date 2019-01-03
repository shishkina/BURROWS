CREATE DATABASE ruby_trains;

\c ruby_trains

CREATE TABLE train_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  color VARCHAR
);
