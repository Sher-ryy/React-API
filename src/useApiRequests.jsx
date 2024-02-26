import { useState, useEffect } from "react";
import LocationToCoordinates from "./LocationToCoordinates";
import WeatherData from "./WeatherData";
import WeatherSummary from "./WeatherSummary"; // Asegúrate de cambiar WeatherDescript por WeatherSummary si hiciste esa modificación

const useApiRequests = (prompt) => {
  const [error, setError] = useState(null);
  const [promptData, setPromptData] = useState({});
  const [locationData, setLocationData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [weatherDescription, setWeatherDescription] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!prompt) return;

      try {
        const promptDataRes = await PromptToLocation(prompt);
        setPromptData(promptDataRes);

        const locationDataRes = await LocationToCoordinates(promptDataRes.locationString);
        setLocationData(locationDataRes);

        const weatherDataRes = await WeatherData(locationDataRes[0]);
        setWeatherData(weatherDataRes);

        const weatherDescriptionRes = await WeatherSummary(prompt, weatherDataRes);
        setWeatherDescription(weatherDescriptionRes);
      } catch (error) {
        setError(error);
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [prompt]);

  return { error, promptData, locationData, weatherData, weatherDescription };
};

export default useApiRequests;
