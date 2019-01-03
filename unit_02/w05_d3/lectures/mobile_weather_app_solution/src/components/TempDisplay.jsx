import React from 'react';

const propTypes = {
  temp: React.PropTypes.number,
};

function TempDisplay({ temp }) {
  return (
    <div>
      <h2 style={temp > 40 ? { color: 'red' } : { color: 'blue' }}>{temp}</h2>
    </div>
  );
}

TempDisplay.propTypes = propTypes;

export default TempDisplay;
