import { useState } from "react";
import axios from "axios";

const SearchBar = ({ cityInfo, setCityInfo, setCityWeatherResponse }) => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchInputChange = (e) => {
    setErrorMessage("");
    setCityWeatherResponse(null);
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get(
        `/api/weather?city=${searchInput}&forecastPeriod=10&getAirQuality=no`
      );
      setCityWeatherResponse(response.data);
      setCityInfo({
        ...cityInfo,
        city: response.data.location.name,
        country: response.data.location.country,
        region: response.data.location.region,
        continent: response.data.location.tz_id,
        localDateTime: response.data.location.localtime,
      });
    } catch (err) {
      console.error(err);

      if (err.response.status === 500) {
        setErrorMessage("City not valid. Please check for any typos.");
      } else if (err.response.status === 400) {
        setErrorMessage("Please input a city");
      } else {
        setErrorMessage("Error");
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSearchSubmit();
    }
  };

  return (
    <div className="search-bar__container">
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search any city 🔎"
          onChange={handleSearchInputChange}
          value={searchInput}
          onKeyDown={handleKeyPress}
        />
        <button className="search-bar__button" type="submit" onClick={handleSearchSubmit}>
          Enter
        </button>
      </div>
      {errorMessage && <p className="search-bar__error">{errorMessage}</p>}
    </div>
  );
};

export default SearchBar;
