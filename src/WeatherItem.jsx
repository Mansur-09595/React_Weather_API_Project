const WeatherItem = ({item}) => {
    return (
          <div className={item.current.is_day ? "blocks-weather" : "night"}>
            <div className="block-right">
              <h2 className="name">{item.location.name}</h2>
              <p className="region">{item.location.region}</p>
              <p className="localtime">{item.location.localtime}</p>
            </div>
            <div className="block-left">
              <img className="icons" src={item.current.condition.icon} />
              <p className="temp_c">{item.current.temp_c}&#176; C</p>
              <p className="temp_f">{item.current.temp_f}&#176; F</p>
            </div>
          </div>
    );
  };
  
  export default WeatherItem;