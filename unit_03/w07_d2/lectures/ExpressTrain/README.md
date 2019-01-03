# Express Train!
- Welcome Dev!

## .env
- For this app to work! you'll need a .env file
- Create that with the below info inside!

.env
```
DB_HOST="localhost"
DB_PORT="5432"
DB_USERNAME="[YOUR-COMPUTER-USERNAME]"
DB_PASSWORD=""
DB_NAME="express_trains"
PORT="8080"
```

---

## Migrations!

Get your database ready!
```sh
psql -f migrations/dropDatabases.sql
psql -f migrations/createDatabases.sql
node migrations/001createTrains.js
node migrations/002addDescriptionToTrains.js
```

---

### Product Backlog:
- As a user, I want to be able to receive a single train, so I can get all the data for the train I'm interested in.
  - First Questions:
    - Does the TRAIN object know how to `find` an individual train?
    - Does the TRAINSCONTROLLER know how to findOne train, given a request?
    - Does the app know how to respond to a request like ``/trains/:id`?
      - Hint: the DELETE feature includes much of the same code
  - Tasks: ?
- As a user, I want to be able to update a train, so I can modify a train's info which has changed out here in the real world
  - Tasks: ?



//
