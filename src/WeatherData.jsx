import PropTypes from "prop-types";

const WeatherData = async (locationData) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=${import.meta.env.VITE_OWM}`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject("Unable to fetch weather data.");
  }
};

WeatherData.propTypes = {
  locationData: PropTypes.object.isRequired,
};

export default WeatherData;
