import WeatherItem from "./WeatherItem";

const WeatherBlocks = ({weatherData, handler, city, getWeather, error, keyPress,}) => {
  return (
    <div className="container">
      <h1 className="weather">Weather</h1>
      <div className="block-flex">
        <input
          className="input"
          onChange={handler}
          value={city}
          onKeyDown={keyPress}
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
