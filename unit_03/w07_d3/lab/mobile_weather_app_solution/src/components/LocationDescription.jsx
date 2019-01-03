import React from 'react';
import Temp from './Temp.jsx';
import TempRange from './TempRange.jsx';
import AddCityButton from './AddCityButton.jsx';

const propTypes = {
  currentWeather: React.PropTypes.object,
  locations: React.PropTypes.array,
  addCityData: React.PropTypes.func,
};

const LocationDescription = ({ currentWeather, locations, addCityData }) => {
  return (
    <div className="location-display">
      <h3>{currentWeather.cityName}</h3>
      <Temp temp={currentWeather.cityTemp} />
      <div className="description">
        <h3>description</h3>
        <p>{currentWeather.cityTempDescription}</p>
      </div>
      <TempRange
        tempMax={currentWeather.cityTempMax}
        tempMin={currentWeather.cityTempMin}
      />
      <AddCityButton 
        locations={locations}
        cityName={currentWeather.cityName} 
        cityZip={currentWeather.cityZip}
        addCityData={addCityData}
      />
    </div>
  );
};

LocationDescription.propTypes = propTypes;

export default LocationDescription;
