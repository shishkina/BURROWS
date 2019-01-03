process.env.ENV = 'test';

const app = require('../../app/app');

const SpecReporter = require('jasmine-spec-reporter');

jasmine.getEnv().addReporter(new SpecReporter());

let server;

beforeAll(() => {
  server = app.listen(1234);
});

afterAll(() => {
  server.close();
});
