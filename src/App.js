import "./App.css";
import Error from "./components/SWR/Error";
import Loading from "./components/SWR/Loading";

import Header from "./components/Header";
import Footer from "./components/Footer";
import sunnyIcon from "./icon_sunny.png";
import cloudyIcon from "./icon_cloudy.png";
import snowyIcon from "./icon_snow.png";
import rainyIcon from "./icon_rain.png";
import useSWR from "swr";
import { useCallback, useState } from "react";

import TodaysWeather from "./components/SWR/TodaysWeather";

const baseUrl = "https://goweather.herokuapp.com/weather/";

function App() {
  const [city, setCity] = useState();
  const [fetchError, setFetchError] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    city ? baseUrl + city : null,
    fetcher
  );

  const tempEmoji = useCallback((description) => {
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
      case "Light drizzle":
        return (
          <div className="weather__icon">
            <img
              src={cloudyIcon}
              alt="cloudy"
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
              alt="rainy"
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
              alt="snowy"
              style={{ width: "1.5rem", height: "1.2rem" }}
            />
            {description}
          </div>
        );
      default:
    }
  }, []);

  const weather = data;
  const fetchMessage = data?.message;
  console.log("fetchmessage", fetchMessage);
  console.log("fetch", data);
  console.log("city", city);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("forminput", data);
    if (data.city === "undefined") {
      setCity(null);
    } else {
      setCity(data.city);
    }
  }

  if (error)
    return (
      <>
        <Header handleSubmit={handleSubmit} />
        <Error />
        <Footer />
      </>
    );

  if (isLoading)
    return (
      <>
        <Header handleSubmit={handleSubmit} />
        <Loading />
        <Footer />
      </>
    );

  // debounce function suchen für onChange event in form

  let windspeedInt = parseInt(weather?.wind);
  console.log(parseInt(windspeedInt));

  let temperatureInt = parseInt(weather?.temperature);
  console.log(temperatureInt);

  // hier ne if abfrage oder danach für das includes()

  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <main>
        <TodaysWeather
          fetchMessage={fetchMessage}
          fetchError={fetchError}
          data={data}
          city={city}
          weather={weather}
          tempEmoji={tempEmoji}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
