import React from 'react';
import TempDisplay from './TempDisplay.jsx';
import WeatherRange from './WeatherRange.jsx';

const propTypes = {
  currentWeather: React.PropTypes.object,
};

const LocationDisplay = ({ currentWeather }) => {
  if (currentWeather !== null) {
    return (
      <div className="location-display">
        <h3>{currentWeather.name}</h3>
        <TempDisplay temp={currentWeather.temp} />
        <div className="description">
          <h3>description</h3>
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
