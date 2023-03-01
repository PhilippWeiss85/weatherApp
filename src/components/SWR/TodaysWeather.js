import Forecast from "../Weather/Forecast";

function TodaysWeather({
  fetchMessage,
  fetchError,
  data,
  city,
  weather,
  tempEmoji,
}) {
  var dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
  };
  var today = new Date().toLocaleTimeString("de-de", dateOptions);

  const weekDays = ["mo", "di", "mi", "do", "fr", "sa", "so"];
  const currentDate = today.slice(0, -10);

  return (
    <section>
      {fetchMessage === "NOT_FOUND" ? (
        <h2>Unable to find your city. Please try again</h2>
      ) : fetchError !== true ? (
        <>
          {city !== undefined ? (
            <div className="city__today">
              <article>
                <p className="city_todayname">
                  Weather in {city?.charAt(0).toUpperCase() + city?.slice(1)}
                </p>
                <p>{currentDate}</p>
              </article>
              <article>
                {tempEmoji(weather.description)}
                <div>{weather.temperature} degree</div>
                <div>{weather.wind} windspeed</div>
              </article>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <h2>An error occured. Please try again later</h2>
      )}

      {data && (
        <>
          {fetchMessage !== "NOT_FOUND" ? <h2>Forecast</h2> : <h2>{null}</h2>}
          <article className="forecast__container">
            {fetchMessage === "NOT_FOUND"
              ? ""
              : weather.forecast?.map((day, index) => {
                  return (
                    <div key={index}>
                      <Forecast day={day} />
                    </div>
                  );
                })}
          </article>
        </>
      )}
    </section>
  );
}

export default TodaysWeather;
