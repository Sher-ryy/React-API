import { useState, useEffect } from 'react';

const WeatherData = async (locationData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}?lat=${locationData.lat}&lon=${locationData.lon}&appid=${process.env.REACT_APP_API_KEY}`
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
