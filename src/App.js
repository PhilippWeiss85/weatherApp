import "./App.css";
import Error from "./components/SWR/Error";
import Loading from "./components/SWR/Loading";

import { useCallback, useState } from "react";
import useSWR from "swr";
import Footer from "./components/Footer";
import Header from "./components/Header";
import cloudyIcon from "./icon_cloudy.png";
import rainyIcon from "./icon_rain.png";
import snowyIcon from "./icon_snow.png";
import sunnyIcon from "./icon_sunny.png";

import TodaysWeather from "./components/SWR/TodaysWeather";

const baseUrl = "https://goweather.herokuapp.com/weather/";

function App() {
  const [city, setCity] = useState();
  const [fetchError, setFetchError] = useState(false);
  const [previousSearchItems, setPreviousSearchItems] = useState([]);
  const [value, setValue] = useState("");

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

  function addNewSearchItem(cityname) {
    const prevItem = previousSearchItems.filter((name) => {
      return name.name;
    });
    console.log("prevItem", prevItem);

    if (
      prevItem[0]?.name === cityname ||
      prevItem[1]?.name === cityname ||
      prevItem[2]?.name === cityname ||
      previousSearchItems.length > 2
    ) {
      setPreviousSearchItems(previousSearchItems);
    } else {
      const newSearchItem = [{ name: cityname }, ...previousSearchItems];
      setPreviousSearchItems(newSearchItem);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.city === "undefined") {
      setCity(null);
    } else {
      addNewSearchItem(data.city);
      setCity(data.city);
      setValue("");
    }
  }

  function handleChange(event) {
    setValue(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
  }

  function deleteSearchItem(id) {
    const searchItemsAfterDeletion = previousSearchItems.filter(
      (item, index) => {
        return index !== id;
      }
    );
    setPreviousSearchItems(searchItemsAfterDeletion);
  }

  // debounce function suchen für onChange event in form

  if (error)
    return (
      <>
        <Header
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          previousSearchItems={previousSearchItems}
          deleteSearchItem={deleteSearchItem}
          value={value}
          setValue={setValue}
        />
        <Error />
        <Footer />
      </>
    );

  if (isLoading)
    return (
      <>
        <Header
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          previousSearchItems={previousSearchItems}
          deleteSearchItem={deleteSearchItem}
          value={value}
          setValue={setValue}
        />
        <Loading />
        <Footer />
      </>
    );

  return (
    <>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        previousSearchItems={previousSearchItems}
        deleteSearchItem={deleteSearchItem}
        value={value}
        setValue={setValue}
      />
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
