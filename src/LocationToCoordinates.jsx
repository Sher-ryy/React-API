const LocationToCoordinates = async (locationString) => {
    if (!locationString) {
      console.error("Location string is required");
      return null;
    }
  
    const API_URL = process.env.REACT_APP_API_URL.replace('/weather', '/geo/1.0/direct'); // Ajuste para usar la API de geocodificación
    const API_KEY = process.env.REACT_APP_API_KEY;
  
    try {
      const response = await fetch(`${API_URL}?q=${locationString}&limit=1&appid=${API_KEY}`);
      const data = await response.json();
  
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
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
  