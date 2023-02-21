import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import sunnyIcon from "./icon_sunny.png";
import cloudyIcon from "./icon_cloudy.png";
import snowyIcon from "./icon_snow.png";
import rainyIcon from "./icon_rain.png";
import useSWR from "swr";
import { useState } from "react";
import { BarLoader } from "react-spinners";

const baseUrl = "https://goweather.herokuapp.com/weather/";

function App() {
  const [city, setCity] = useState();
  const [fetchError, setFetchError] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(baseUrl + city, fetcher);

  const weather = data;
  const fetchMessage = data.message;
  console.log("fetchmessage", fetchMessage);

  console.log("fetch", data);
  console.log("city", city);

  if (error)
    return (
      <>
        <Header />
        <main>
          <section>
            <form onSubmit={handleSubmit}>
              <label htmlFor="city">Enter your City</label>
              <input name="city" id="city" type="text" />
              <button type="submit" id="sumbit">
                search
              </button>
            </form>
            <h2>An error occured. Please try again later</h2>
          </section>
        </main>
        <Footer />
      </>
    );

  if (isLoading)
    return (
      <div className="loadingscreen">
        <BarLoader color="#36d7b7" height={10} width={300} />
      </div>
    );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("forminput", data);
    setCity(data.city);
  }

  // debounce function suchen für onChange event in form

  let windspeedInt = parseInt(weather.wind);
  console.log(parseInt(windspeedInt));

  let temperatureInt = parseInt(weather.temperature);
  console.log(temperatureInt);

  function tempEmoji(description) {
    switch (description) {
      case "Sunny":
        return (
          <div className="weather__icon">
            <img
              src={sunnyIcon}
              alt="sunny"
              style={{ width: "1rem", height: "1.2rem" }}
            />
            {description}
          </div>
        );
      case "Partly cloudy":
      case "mist":
      case "drizzle":
        return (
          <div className="weather__icon">
            <img
              src={cloudyIcon}
              alt="sunny"
              style={{ width: "1.5rem", height: "1.2rem" }}
            />
            {description}
          </div>
        );
      case "Light drizzle and raining":
      case "Light rain":
        return (
          <div className="weather__icon">
            <img
              src={rainyIcon}
              alt="sunny"
              style={{ width: "1.5rem", height: "1.2rem" }}
            />
            {description}
          </div>
        );
      case "Light snow":
        return (
          <div className="weather__icon">
            <img
              src={snowyIcon}
              alt="sunny"
              style={{ width: "1.5rem", height: "1.2rem" }}
            />
            {description}
          </div>
        );
      default:
    }
  }

  if (data)
    return (
      <>
        <Header />
        <main>
          <section>
            <form onSubmit={handleSubmit}>
              <label htmlFor="city">Enter your City</label>
              <input name="city" id="city" type="text" />
              <button type="submit" id="sumbit">
                search
              </button>
            </form>
            {fetchMessage === "NOT_FOUND" ? (
              <h2>The API is unable to find your city</h2>
            ) : fetchError !== true ? (
              <h2>The Weather in {city.toUpperCase()}</h2>
            ) : (
              <h2>An error occured. Please try again later</h2>
            )}
            <div>
              {tempEmoji(weather.description)}

              <div>{weather.temperature} </div>
              <div>{weather.wind} </div>
            </div>

            <h2>Forecast</h2>
            {weather.forecast?.map((day) => {
              return (
                <div className="flexbox" key={day.day}>
                  <p>{day.day}</p>
                  <p>{day.temperature}</p>
                  <p>{day.wind}</p>
                </div>
              );
            })}
          </section>
        </main>
        <Footer />
      </>
    );
}

export default App;
