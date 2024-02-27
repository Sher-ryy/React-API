import PropTypes from "prop-types";
import Spinner from "./Spinner"; 
const WeatherCard = ({
  isLoading,
  data,
  units,
  country,
  USstate,
  setUnits,
}) => {
  const displayState = country === "US" ? `, ${USstate}` : "";

  const handleUnitChange = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  const windDirStyle = {
    transform: `rotate(${data.wind.deg + 90}deg)`,
  };

  return (
    <div className="weathercard">
      {isLoading && <Spinner />}
      <div className="weathercard__data">
        <div className="weathercard__location">{`${data.name}${displayState}, ${country}`}</div>
        <div className="weathercard__temperature">
          <span className="temp-value">{data.main.temp.toFixed(1)}</span>
          <span className="temp-unit">{units === "metric" ? "°C" : "°F"}</span>
        </div>
        <div className="weathercard__wind">
          <div className="wind-speed">{data.wind.speed.toFixed(1)} {units === "metric" ? "m/s" : "mph"}</div>
          <div className="wind-direction" style={windDirStyle}></div>
        </div>
        <button onClick={handleUnitChange}>Change Units</button>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  units: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  USstate: PropTypes.string,
  setUnits: PropTypes.func.isRequired,
};

export default WeatherCard;
