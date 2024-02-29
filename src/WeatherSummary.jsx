import PropTypes from 'prop-types';

const WeatherSummary = async (query, weatherInfo) => {
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const systemMessage = `Please provide a detailed weather summary based on the following data. Include temperature preferences and clothing recommendations.`;

  const updatedPrompt = `Query: ${query}. Weather Info: ${JSON.stringify(weatherInfo)}`;

  const payload = {
    model: 'gpt-4-0613',
    messages: [
      { role: 'system', content: systemMessage },
      { role: 'user', content: updatedPrompt },
    ],
  };

  const requestOptions = {
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    method: 'POST',
  };

  return fetch(endpoint, requestOptions)
    .then(response => response.json())
    .then(data => data.choices[0].message.content)
    .catch(error => {
      console.error('Error:', error);
      return Promise.reject('Failed to retrieve weather summary.');
    });
};

WeatherSummary.propTypes = {
  query: PropTypes.string.isRequired,
  weatherInfo: PropTypes.object.isRequired,
};

export default WeatherSummary;
