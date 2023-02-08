import { useState } from "react";
import SearchBar from "./SearchBar";
import CityDetails from "./CityDetails";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Greeting from "./Greeting";

const WeatherContainer = () => {
  const [cityInfo, setCityInfo] = useState({
    city: "",
    country: "",
    region: "",
    continent: "",
    localDateTime: "",
  });
  const [cityWeatherResponse, setCityWeatherResponse] = useState(null);

  return (
    <div className="weather-container">
      <SearchBar
        cityInfo={cityInfo}
        setCityInfo={setCityInfo}
        setCityWeatherResponse={setCityWeatherResponse}
      />
      {cityWeatherResponse ? (
        <>
          <CityDetails cityInfo={cityInfo} />
          <CurrentWeather cityWeatherResponse={cityWeatherResponse} />
          <Forecast cityWeatherResponse={cityWeatherResponse} />
        </>
      ) : (
        <Greeting />
      )}
    </div>
  );
};

export default WeatherContainer;
