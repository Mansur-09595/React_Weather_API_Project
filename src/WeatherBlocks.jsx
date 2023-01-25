import WeatherItem from "./WeatherItem";

const WeatherBlocks = ({weatherData, setCity, city, getWeather, error, keyPress,}) => {
  return (
    <div className="container">
      <h1 className="weather">Weather</h1>
      <div className="block-flex">
        <input
          className="input"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyDown={(event) => keyPress(event)}
          placeholder={"Search for a city"}
        />
        <button className="fa-solid fa-magnifying-glass" onClick={() => getWeather()}></button>
      </div>
      {weatherData.map((item) => (
        <WeatherItem item={item} />
      ))}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WeatherBlocks;
