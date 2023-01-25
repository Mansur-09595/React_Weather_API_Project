import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherBlocks from './WeatherBlocks';

function App() {
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState("Grozny")
  const [error, setError] = useState(null);

  const keyPress = (event) => {
    if(event.key === 'Enter') {
      getWeather()
    }
  }

  const getWeather = async () => {
    if(!city){
      return
    }
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${city}`)
      const data =  await response.json()
      if(response.ok){
        setWeatherData([...weatherData, data])
        setCity("")
        setError("")
      } else {
        setError(data.error.message)
        setCity("")
      }
    }
    useEffect(() => {
      getWeather();
    },[])


  return (
    <WeatherBlocks weatherData={weatherData} setCity={setCity} city={city} getWeather={getWeather} error={error} keyPress={keyPress}/>
  );
}

export default App;
