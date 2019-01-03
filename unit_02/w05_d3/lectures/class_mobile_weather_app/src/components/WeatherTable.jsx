import React from 'react';
import request from 'superagent';
import SearchBar from './SearchBar.jsx';
import LocationDisplay from './LocationDisplay.jsx';

export default class WeatherTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeatherData: null,
    };

    this.getWeatherData = this.getWeatherData.bind(this);

  }
  getWeatherData(zip) {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    request.get(`${baseURL}${zip},us&appid=f9d034deb9ba8badaee23b249c7e0a88`)
    .end((err, res) => {
      this.cleanWeatherData(JSON.parse(res.text));
    });
  }
  cleanWeatherData(weatherData) {
    function toFarenheit(temp) {
      return Math.floor((temp * (9 / 5) - 459.67)); 
    }
    const currentLocation = {
      name: weatherData.name,
      temp: toFarenheit(weatherData.main.temp),
      tempMax: toFarenheit(weatherData.main.temp_max),
      tempMin: toFarenheit(weatherData.main.temp_min),
      description: weatherData.weather[0].description,
    };

    this.setState({
      currentWeatherData: currentLocation,
    });
  } 
  render() {
    return (
      <div>
        <SearchBar weatherData={this.getWeatherData} />
        <LocationDisplay currentWeather={this.state.currentWeatherData}/>
      </div>
    );
  }
}
