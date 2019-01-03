import React from 'react';
import request from 'superagent';

class Sender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      message: '',
      times: 1,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.getAttribute('name');
    const data = {}
    data[name] = value;
    this.setState(data);
  }
  sendMessage(e) {
    e.preventDefault();
    request.post('/api/sms')
           .send(this.state)
           .end();
  }
  render() {
    return (
      <form onSubmit={this.sendMessage}>
        <input type="text" name="to" value={this.state.to} onChange={this.handleChange} />
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
        <input type="number" name="times" value={this.state.times} onChange={this.handleChange} />
        <input type="submit" value="Send"/>
      </form>
    );
  }
}

export default Sender;
