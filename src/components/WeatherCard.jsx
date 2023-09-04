import { useState } from "react";
import sunriseSun from "../assets/items/puesta4.png";
import logo from "../assets/items/logo.png";

const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setIsCelsius] = useState(true)
  const handleChangeTemp = () => setIsCelsius(!isCelsius)
  
  return (
    <article className="weather-app display-flex">
      <section className="main-container display-flex defaul-background">
          <div className="logo-container">
            <img className="logo-img" src={logo} alt="" />
          </div>
          <div className="main-title">
          <h1>Weather App</h1>
          <h2>{weather?.name}, {weather?.sys.country}</h2>
        </div>
        <div className="main-info display-flex">
          <section className="main-data1 defaul-container defaul-background">
            <div className="weather-icon">
              <img
                src={weather &&  `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""/>
            </div>
            <section className="weather-info">
              <h3>"{weather?.weather[0].description}"</h3>
              <ul>
                <li><span>Wind Speed:</span><span> {weather?.wind.speed} m/s</span></li>
                <li><span>Clouds:</span><span> {weather?.clouds.all} %</span></li>
                <li><span>Pressure:</span><span> {weather?.main.pressure} hPa</span></li>
              </ul>
            </section>
              <div className="weather-btn">
                <h2>{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
                <button className="defaul-background" onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
              </div>
          </section>
          <section className="main-data2 defaul-container display-flex defaul-background">  
            <ul>
              <li><span>Visibility:</span><span> {weather?.visibility.toLocaleString()} mts</span></li>
              <li><span>Humidity:</span><span> {weather?.main.humidity}</span></li>
              <li><span>Sunrise:</span>
                <span> {weather?.sys.sunrise &&
                  new Date(weather.sys.sunrise * 1000)
                  .toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </span></li>
              <li><span>Sunset:</span>
                <span> {weather?.sys.sunset &&
                  new Date(weather.sys.sunset * 1000)
                  .toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </span></li>
            </ul>
            <div>
              <img className="sunrise-img" src={sunriseSun} alt="" />
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default WeatherCard