CREATE DATABASE ruby_trains;

\c ruby_trains

CREATE TABLE trains (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  color VARCHAR
);
