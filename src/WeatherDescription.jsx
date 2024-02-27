import PropTypes from "prop-types";
import Spinner from "./Spinner";

const WeatherDescription = ({ loading, description }) => (
  <div className="description">
    <h2 className="description__title">Weather Details</h2>
    <div className="description__content">
      {loading ? <Spinner /> : <p className="description__text">{description}</p>}
    </div>
  </div>
);

WeatherDescription.propTypes = {
  loading: PropTypes.bool.isRequired,
  description: PropTypes.string,
};

export default WeatherDescription;
