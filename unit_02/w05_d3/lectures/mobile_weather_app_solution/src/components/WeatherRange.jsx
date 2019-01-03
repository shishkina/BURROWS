import React from 'react';

const propTypes = {
  tempMax: React.PropTypes.string,
  tempMin: React.PropTypes.string,
};

function WeatherRange({ tempMax, tempMin }) {
  return (
    <div className="weather-range">
      <div className="temp-range">
        <h3>Max</h3>
        <h4>{tempMax}</h4>
      </div>
      <div className="temp-range">
        <h3>Min</h3>
        <h4>{tempMin}</h4>
      </div>
    </div>
  );
}

WeatherRange.PropTypes = propTypes;

export default WeatherRange;
