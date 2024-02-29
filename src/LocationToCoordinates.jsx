const LocationToCoordinates = async (locationString) => {
  if (!locationString) {
    console.error("Location string is required");
    return null;
  }


  if (!import.meta.env.VITE_WEATHER_API_URL || !import.meta.env.VITE_API_WEATHER_KEY) {
    console.error("Environment variables for API URL or API Key are not defined");
    return null;
  }

  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

  try {
    const response = await fetch(`${API_URL}?q=${locationString}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Asumiendo que la respuesta de la API incluye datos de latitud y longitud
    if (data && data.coord) {
      const { lat, lon } = data.coord;
      return { lat, lon };
    } else {
      console.error("No location found for the given string:", locationString);
      return null;
    }
  } catch (error) {
    console.error("Error fetching location coordinates:", error);
    return null;
  }
};

export default LocationToCoordinates;
