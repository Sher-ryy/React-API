import PropTypes from 'prop-types';
import './Description.css'; // Asegúrate de que el nombre del archivo CSS coincida
import Spinner from './Spinner'; // Cambiado de Loader a Spinner

const WeatherDescription = ({ loading, description }) => (
  <div className="description">
    <h2 className="description__title">Weather Details</h2>
    <div className="description__content">
      {loading ? <Spinner /> : <p className="description__text">{description}</p>}
    </div>
  </div>
);

WeatherDescription.defaultProps = {
  description: 'Awaiting weather data...',
};

WeatherDescription.propTypes = {
  loading: PropTypes.bool.isRequired,
  description: PropTypes.string,
};

export default WeatherDescription;
