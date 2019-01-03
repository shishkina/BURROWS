import React from 'react';
import WeatherRange from './WeatherRange.jsx';

const propTypes = {
  currentWeather: React.PropTypes.object,
};

const LocationDisplay = ({ currentWeather }) => {
  if (currentWeather !== null) {
    return (
      <div className="location-display">
        <h3>{currentWeather.name}</h3>
        <h2>{currentWeather.temp}</h2>
        <div className="description">
          <h3>Description</h3>
          <p>{currentWeather.description}</p>
        </div>
        <WeatherRange
          tempMax={currentWeather.tempMax}
          tempMin={currentWeather.tempMin}
        />
      </div>
    );
  }
  return (
    <div className="location-display">
      Search for Current Weather Data
    </div>
  );
};

LocationDisplay.propTypes = propTypes;

export default LocationDisplay;


