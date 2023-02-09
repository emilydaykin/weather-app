import React from "react";

const Greeting: React.FC = () => {
  return (
    <div className="greeting">
      <h1 className="greeting__heading">Hello! 👋🏼</h1>
      <h2 className="greeting__sub-heading">Welcome to this weather app!</h2>
      <p className="greeting__text">
        Enter any city in the search bar above to retrive weather information! You&apos;ll find the
        city&apos;s current temperature, and a 10-day forecast, as well as some geographical
        information about the city and the local time.
      </p>
    </div>
  );
};

export default Greeting;
