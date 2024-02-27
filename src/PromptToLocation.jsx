import PropTypes from "prop-types";

const PromptToLocation = async (prompt) => {
  const API_URL = `https://api.openai.com/v1/chat/completions`;
  const data = {
    model: "gpt-3.5-turbo",
    prompt: `Extract location data from the following prompt: "${prompt}"`,
    temperature: 0.7,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    // Asumiendo que la respuesta incluye los datos de ubicación en un formato específico
    locationData = responseData.choices[0].text.trim();

    return {
      locationString: locationData, // Ejemplo: "New York, NY, USA"
      units: "metric", // Asumiendo que quieres un valor predeterminado o extraído de la respuesta
    };
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw new Error("Failed to fetch location data.");
  }
};

PromptToLocation.propTypes = {
  prompt: PropTypes.string.isRequired,
};

export default PromptToLocation;
