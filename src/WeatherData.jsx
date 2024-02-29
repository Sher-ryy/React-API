import PropTypes from 'prop-types';

const WeatherData = async (locationData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_WEATHER_API_URL}?lat=${locationData.lat}&lon=${locationData.lon}&appid=${import.meta.env.VITE_API_WEATHER_KEY}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Unable to fetch weather data.");
  }
};

WeatherData.propTypes = {
  locationData: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeatherData;
