const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyCK4Wc9oUZYI3YmqI8p15PwLILtycN818k",
  authDomain: "burrow-login.firebaseapp.com",
  databaseURL: "https://burrow-login.firebaseio.com",
  storageBucket: "burrow-login.appspot.com",
  messagingSenderId: "639077729430"
};

firebase.initializeApp(config);

module.exports = firebase;