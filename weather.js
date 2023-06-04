import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      <button className="button-ref" onClick={refresh} ><img className="img-logo" src="https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/refresh-icon.png" /></button>
    </div>
    <div className="flex">
      <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
      <p className="description">{weatherData.weather && weatherData.weather[0].main}</p>
    </div>

    <div className="flex">
      <p className="temp">Temprature: {weatherData.main && weatherData.main.temp} &deg;C </p>
      <p className="temp">Humidity: {weatherData.main && weatherData.main.humidity} %</p>
    </div>

    <div className="flex">
      <p className="sunrise-sunset">Sunrise: {weatherData.sys && new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
      <p className="sunrise-sunset">Sunset: {weatherData.sys && new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
    </div>
    
  </div>
)

export default WeatherCard;
