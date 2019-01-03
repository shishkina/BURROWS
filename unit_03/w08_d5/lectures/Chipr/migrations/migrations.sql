-- These migrations are to be performed manually using
 -- the psql console

DROP DATABASE IF EXISTS chirp_chirp;
CREATE DATABASE chirp_chirp;

\c chirp_chirp

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE chirps (
  id SERIAL PRIMARY KEY,
  body VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users (id)
);
