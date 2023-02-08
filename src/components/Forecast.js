import Image from "next/image";

const Forecast = ({ cityWeatherResponse }) => {
  console.log("cityWeatherRepsonse FROM FORECAST COMPONENT", cityWeatherResponse);

  const translateMonth = { 1: "Jan", 2: "Feb" };

  const formatDate = (date) => {
    const dayInt = parseInt(date.split("-")[2]);
    const monthInt = parseInt(date.split("-")[1]);
    const monthText = translateMonth[monthInt];
    return `${dayInt} ${monthText}`;
  };

  if (!cityWeatherResponse) return null;

  return (
    <div className="forecast__wrapper">
      <h5 className="forecast__title">10-day forecast (average temperature) &rarr;</h5>
      <div className="forecast">
        {cityWeatherResponse.forecast.forecastday.map((day, _id) => (
          <div key={_id} className="forecast__day">
            <p className="forecast__date">{formatDate(day.date)}</p>
            <Image
              className="forecast__icon"
              src={"https:" + day.day.condition.icon}
              alt="weather icon"
              height={50}
              width={50}
            />
            <p>
              {day.day.avgtemp_c}°C / {day.day.avgtemp_f}°F
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
