import React, { useEffect, useState } from "react";
const Weather = () => {
  const [query, setQuery] = useState("");
  const [inputBox, setInputBox] = useState("srinagar");

  // use effect
  useEffect(() => {
    showWeather("On Load Data");
  }, []);

  const showWeather = async (status) => {
    const apiData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputBox}&appid=21498268b9697652dd38493f51052323`
    );
    const apiDataJson = await apiData.json();
    console.log(status, " = ", apiDataJson);
    setQuery(apiDataJson);
  };

  // on change
  const onInputChange = (e) => {
    setInputBox(e.target.value);
  };

  // on search
  const onInputSubmit = (e) => {
    if (e.key === "Enter") {
      showWeather("On Enter Data");
    }
  };

  // get date
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`;
  };

  // Main Body
  return (
    <div
      className={
        typeof query.main != "undefined"
          ? query.main.temp - 273.15 > 20
            ? "weather-app"
            : "weather-app warm"
          : "weather-app"
      }
    >
      <div>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={onInputChange}
              value={inputBox}
              onKeyPress={onInputSubmit}
            />
          </div>
          {typeof query.main != "undefined" ? (
            <div className="pt-5">
              <div className="location-box">
                <div className="location">
                  {query.name},{query.sys.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(query.main.temp) - 273}°C
                </div>
                <div className="weather">{query.weather[0].main}</div>
              </div>
              {query.weather[0].main === "Rain" ? (
                <span className="pos-abs-rain">
                  <video height="1" loop="true" autoplay="autoplay">
                    <source src="../images/rain.mp4" type="video/mp4" />
                  </video>
                </span>
              ) : (
                ""
              )}
              {query.weather[0].main === "Clear" ? (
                <span className="pos-abs">
                  <video height="0" loop="true" autoplay="autoplay">
                    <source src="../images/sunny.mp4" type="video/mp4" />
                  </video>
                </span>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="city-not-found">
              <h1>{query.message}</h1>
              <small>Please enter correct city.</small>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Weather;
