import Forecast from "../Weather/Forecast";
import Form from "../Form";

function TodaysWeather({
  handleSubmit,
  fetchMessage,
  fetchError,
  data,
  city,
  weather,
  tempEmoji,
}) {
  return (
    <section>
      <Form handleSubmit={handleSubmit} />

      {fetchMessage === "NOT_FOUND" ? (
        <h2>Unable to find your city. Please try again</h2>
      ) : fetchError !== true ? (
        <h2>
          {city !== undefined
            ? `The Weather in ${city?.charAt(0).toUpperCase() + city?.slice(1)}`
            : "Please enter a valid city"}
        </h2>
      ) : (
        <h2>An error occured. Please try again later</h2>
      )}

      {data && (
        <>
          <div>
            {tempEmoji(weather.description)}
            <div>{weather.temperature} </div>
            <div>{weather.wind} </div>
          </div>

          {fetchMessage !== "NOT_FOUND" ? <h2>Forecast</h2> : <h2>{null}</h2>}
          <article className="forecast__container">
            {fetchMessage === "NOT_FOUND"
              ? ""
              : weather.forecast?.map((day) => {
                  return (
                    <>
                      <Forecast day={day} key={day.index} />
                    </>
                  );
                })}
          </article>
        </>
      )}
    </section>
  );
}

export default TodaysWeather;
