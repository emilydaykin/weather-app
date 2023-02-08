const CityDetails = ({ cityInfo }) => {
  const { city, country, region, continent, localDateTime } = cityInfo;

  return (
    <div className="city-details">
      <h1 className="city-details__city">{city}</h1>
      <div className="city-details__sub-info">
        <p className="city-details__region">{region}</p>
        <p className="city-details__country">{country}</p>
        <p className="city-details__continent">{continent.split("/")[0]}</p>
      </div>
      <div>
        {localDateTime && (
          <p className="city-details__time">
            Local Time: <span>{localDateTime.split(" ")[1]}</span> ({localDateTime.split(" ")[0]})
          </p>
        )}
      </div>
    </div>
  );
};

export default CityDetails;
