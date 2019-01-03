import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/UserForm.jsx';
import ChirpList from './chirps/ChirpList.jsx';
import ChirpForm from './chirps/ChirpForm.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chirps: [] };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendChirp = this.sendChirp.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if (cookie.load('token')) {
      this.getCurrentUserChirps();
    }
  }
  getCurrentUserChirps() {
    request.get('/api/chirps')
           .then((response) => {
             const chirps = response.body;
             this.setState({ chirps });
           })
           .catch(() => {
             this.updateAuth();
           });
  }
  sendChirp({ body }) {
    request.post('/api/chirps')
           .send({ body })
           .then(() => {
             this.getCurrentUserChirps();
           });
  }
  signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  logIn(userDetails) {
    request.post('/api/login')
          .send(userDetails)
         .then(() => {
           this.updateAuth();
           this.getCurrentUserChirps();
         });
  }
  signUp(userDetails) {
    request.post('/api/signup')
          .send(userDetails)
          .then(() => {
            this.updateAuth();
            this.getCurrentUserChirps();
          });
  }
  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <div>
          <button onClick={this.signOut} >Log-Out!</button>
          <ChirpForm sendChirp={this.sendChirp} />
          <ChirpList chirps={this.state.chirps} />
        </div>
      );
    } else {
      userDisplayElement = (
        <div>
          <UserForm handleSubmit={this.signUp} buttonText="Sign-Up" />
          <UserForm handleSubmit={this.logIn} buttonText="Log-In" />
        </div>
      );
    }
    return (
      <div>
        {userDisplayElement}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
