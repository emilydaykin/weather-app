import Image from "next/image";
import React from "react";

const CurrentWeather: React.FC<any> = ({ cityWeatherResponse }) => {
  if (!cityWeatherResponse) return null;
  return (
    <div className="current-weather">
      <p>Current Temperature</p>
      <p>
        {cityWeatherResponse.current.temp_c}°C / {cityWeatherResponse.current.temp_f}°F
      </p>
      <Image
        className="current-weather__icon"
        src={"https:" + cityWeatherResponse.current.condition.icon}
        alt="weather icon"
        height={50}
        width={50}
      />
    </div>
  );
};

export default CurrentWeather;
