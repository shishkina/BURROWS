-- SCHEMA

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  quote TEXT,
  birthday VARCHAR,
  ssn INTEGER NOT NULL UNIQUE
);


-- BOOLEAN
-- INTEGER
-- FLOAT
-- TEXT / VARCHAR
-- NULL
-- DATE
-- TIME
-- SERIAL PRIMARY KEY
