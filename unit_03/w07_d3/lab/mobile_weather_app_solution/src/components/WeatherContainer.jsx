import React from 'react';
import request from 'superagent';
import InputSearch from './InputSearch.jsx';
import LocationDescription from './LocationDescription.jsx';
import LocationList from './LocationList.jsx';

export default class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeatherData: null,
      locations: [],
    };

    this.getWeatherData = this.getWeatherData.bind(this);
    this.addCity = this.addCity.bind(this);

  }
  getWeatherData(zip) {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    request.get(`${baseURL}${zip},us&appid=19973bbf35ea9a1b28703fc1af6146e5`)
    .end((err, res) => {
      this.cleanWeatherData(JSON.parse(res.text), zip);
    });
  }
  addCity(arrayOfCities) {
    this.setState({
      locations: arrayOfCities,
    })
  }
  cleanWeatherData(weatherData, zip) {
    function toFarenheit(temp) {
      return Math.floor((temp * (9 / 5)) - 459.67);
    }

    const currentLocation = {
      cityName: weatherData.name,
      cityTemp: toFarenheit(weatherData.main.temp),
      cityTempMax: toFarenheit(weatherData.main.temp_max),
      cityTempMin: toFarenheit(weatherData.main.temp_min),
      cityTempDescription: weatherData.weather[0].description,
      cityZip: zip,
    };

    this.setState({ currentWeatherData: currentLocation });
  }
  render() {
    const locationElement = this.state.currentWeatherData ? 
      <LocationDescription 
        currentWeather={this.state.currentWeatherData} 
        locations={this.state.locations}
        addCityData={this.addCity}
      /> :
      <div className="location-display">
      Search for Current Location Data
      </div>;
    return (
      <div>
        <InputSearch weatherData={this.getWeatherData} />
        <LocationList locations={this.state.locations} weatherData={this.getWeatherData}/>
        {locationElement}
      </div>
    );
  }
}
