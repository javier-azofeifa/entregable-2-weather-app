import Image1 from './assets/backgroud/background1.jpg';
import Image2 from './assets/backgroud/background2.jpg';
import Image3 from './assets/backgroud/background3.jpg';
import Image4 from './assets/backgroud/background4.jpg';
import Image5 from './assets/backgroud/background5.jpg';
import Image6 from './assets/backgroud/background6.jpg';
import Image7 from './assets/backgroud/background7.jpg';
import Image8 from './assets/backgroud/background8.jpg';
import WeatherCard from './components/WeatherCard';
import CurrentDate from './components/CurrentDate';
import ScreenLoad from './components/ScreenLoad';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const changeBackground = () => {
    if (weather?.weather[0].icon === '50n') {
      Image = Image1
    }
    else if (weather?.weather[0].icon === '09n' || '10n' || '11n') {
      Image = Image2
    }
    else if (weather?.weather[0].icon === '01n') {
      Image = Image3
    }
    else if (weather?.weather[0].icon === '02n' || '03n' || '04n') {
      Image = Image4
    }
    else if (weather?.weather[0].icon === '50d') {
      Image = Image5
    }
    else if (weather?.weather[0].icon === '01d') {
      Image = Image6
    }
    else if (weather?.weather[0].icon === '02d' || '03d' || '04d') {
      Image = Image7
    }
    else if (weather?.weather[0].icon === '09d' || '10d' || '11d') {
      Image = Image7
    }
    return Image
  };
  changeBackground();

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(coords){
      const apiKey = '2e2288d7dc7b53e0230ccb192b003ab4'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          setTemp(obj)
        })
      .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <article className='hero display-flex' style={{ backgroundImage: `url(${Image})`}}>
      <div className='article-container'>
        <div>
          <ScreenLoad/>
        </div>
        <div>
          <WeatherCard
            weather={weather}
            temp={temp}/>
        </div>
        <div>
          <CurrentDate/>
        </div>
      </div>
    </article>
  )
}

export default App