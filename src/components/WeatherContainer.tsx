import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CityDetails from "./CityDetails";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Greeting from "./Greeting";

export interface CityInfo {
  city: string;
  country: string;
  region: string;
  continent: string;
  localDateTime: string;
}

const WeatherContainer: React.FC = () => {
  const [cityInfo, setCityInfo] = useState<CityInfo>({
    city: "",
    country: "",
    region: "",
    continent: "",
    localDateTime: "",
  });
  const [cityWeatherResponse, setCityWeatherResponse] = useState<any>(null);

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
