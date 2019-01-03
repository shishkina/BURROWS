const twilio = require('twilio');

class TwilioMachine {
  constructor() {
    this.from = process.env.TWILLIO_NUMBER;
    this.operator = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
  }
  sendMultiple({ to, message, times }) {
    for (var i = 0; i < times; i++) {
      this.send({ to, message });
    }
  }
  send({ to, message }) {
    return new Promise((resolve, reject) => {
      this.operator.sendMessage({
        to,
        body: message,
        from: this.from,
      }, (error, response) => {
        if (error){
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

module.exports = TwilioMachine;
