import React from 'react';

const propTypes = {
  address: React.PropTypes.string,
  lines: React.PropTypes.array,
};

class Line extends React.Component {
  render() {
    return (
      <div className="door">
        <h3>{this.props.address}</h3>
        <p>{this.props.lines.join(' - ')}</p>
      </div>
    );
  }
}

Line.propTypes = propTypes;

export default Line;
