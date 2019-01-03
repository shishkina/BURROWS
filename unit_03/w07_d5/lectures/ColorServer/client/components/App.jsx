import React from 'react';
import request from 'superagent';
import Sender from './Sender.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [],
    };
    this.getColors = this.getColors.bind(this);
  }
  getColors() {
    request.get('/api/colors')
           .then((colorData) => {
             this.setState({ colors: colorData.body.colors });
           });
  }
  componentDidMount() {
    this.getColors();
    setInterval(this.getColors, 5000);
  }
  render() {
    return (
      <div style={{ backgroundColor: `#${this.state.colors[0]}` }}>
        <h1 style={{ color: `#${this.state.colors[1]}` }}>
          WEeeeeeeeeeeeeeeee!
        </h1>
        <p style={{ color: `#${this.state.colors[2]}` }}>
          So much fun!
        </p>
        <div style={{ color: `#${this.state.colors[3]}` }}>
          Wow... Sometimes... things just come together in a beutiful way
        </div>
        <Sender />
      </div>
    );
  }
}

export default App;
