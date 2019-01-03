import React from 'react';

const propTypes = {
  temp: React.PropTypes.number,
};

function Temp({ temp }) {
  return (
    <div>
      <h2>{temp}</h2>
    </div>
  );
}

Temp.propTypes = propTypes;

export default Temp;
