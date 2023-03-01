import Forecast from "../Weather/Forecast";
import moment from "moment";
import "moment/locale/de";

function TodaysWeather({
  fetchMessage,
  fetchError,
  data,
  city,
  weather,
  tempEmoji,
}) {
  const momentToday = moment().locale("de").format("dddd, ll");
  const momentTomorrow = moment().add(1, "d").locale("de").format("dddd, ll");
  const momentTomorrowPlusOne = moment()
    .add(2, "d")
    .locale("de")
    .format("dddd, ll");
  const momentTomorrowPlusTwo = moment()
    .add(3, "d")
    .locale("de")
    .format("dddd, ll");

  console.log("moment", momentToday);
  console.log(momentTomorrow);
  console.log(momentTomorrowPlusOne);
  console.log(momentTomorrowPlusTwo);

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
                <p>{momentToday}</p>
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
                      <Forecast
                        day={day}
                        tomorrow={momentTomorrow}
                        tomorrowPlusOne={momentTomorrowPlusOne}
                        tomorrowPlusTwo={momentTomorrowPlusTwo}
                      />
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
