import React from 'react';

const propTypes = {
  temp: React.PropTypes.number,
};

function Temp({ temp }) {
  return (
    <div>
      <h2 style={temp > 60 ? {'color' : 'red'} : {'color' : 'blue'}} >{temp}</h2>
    </div>
  );
}

Temp.propTypes = propTypes;

export default Temp;
