import React from 'react';

const propTypes = {
  message: React.PropTypes.string.isRequired,
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
