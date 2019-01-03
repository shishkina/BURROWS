// This file will handle the register component, this component will register a user in our firebase system and also creat a user in our DB

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({first_name: '', last_name: '', email: username})
      })
      .then(() => {
        this.props.router.push(`/dashboard/${username}/hello_youre_the_coolest`);
      })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the <mark>REGISTER</mark> component, this component is <mark><b>NOT</b></mark> protected</h1>
        <div id="register-form">
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Register</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
