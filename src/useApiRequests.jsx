import { useState, useEffect } from "react";
import PromptToLocation from "./PromptToLocation";
import LocationToCoordinates from "./LocationToCoordinates";
import WeatherData from "./WeatherData";
import WeatherSummary from "./WeatherSummary";

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
        if (!promptDataRes) throw new Error("No prompt data response");
        setPromptData(promptDataRes);

        const locationDataRes = await LocationToCoordinates(promptDataRes.locationString);
        if (!locationDataRes) throw new Error("No location data response");
        setLocationData([locationDataRes]); // Asumiendo que esperas un array aquí

        const weatherDataRes = await WeatherData(locationDataRes);
        if (!weatherDataRes) throw new Error("No weather data response");
        setWeatherData(weatherDataRes);

        const weatherDescriptionRes = await WeatherSummary(prompt, weatherDataRes);
        if (!weatherDescriptionRes) throw new Error("No weather description response");
        setWeatherDescription(weatherDescriptionRes);
      } catch (error) {
        setError(error.toString());
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [prompt]);

  return { error, promptData, locationData, weatherData, weatherDescription };
};

export default useApiRequests;
