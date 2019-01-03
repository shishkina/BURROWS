// This will be our Main component, it will render all of the child components, it will also know if the user is logged in by saving it to state.

import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  render() {
    return (
      <div>
        <div id="main-nav">
          <h1>MAIN COMPONENT</h1>
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;