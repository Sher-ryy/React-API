import { useState } from "react";
import PropTypes from "prop-types";
import "./WeatherForm.css";

function WeatherForm({ onSubmit }) {
  const [inputLocation, setInputLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputLocation.trim());
  };

  return (
    <form className="locationform" onSubmit={handleSubmit}>
      <div className="locationform__elements">
        <label htmlFor="location">Enter location:</label>
        <input
          id="location"
          type="text"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          placeholder="City, state code (if USA), country code"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

WeatherForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WeatherForm;
