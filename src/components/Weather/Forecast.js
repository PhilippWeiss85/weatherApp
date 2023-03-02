function Forecast({ day, tomorrow, tomorrowPlusOne, tomorrowPlusTwo }) {
  return (
    <section>
      <div className="forecast-flexbox">
        <aside className="forecast__containercontent__box__headline">
          {day.day === "1" ? (
            <div className="forecast-content">
              <p>{tomorrow}</p>
              <div className="forecast-content__values">
                <p>{day.temperature}</p>
                <p>{day.wind}</p>
              </div>
            </div>
          ) : day.day === "2" ? (
            <div className="forecast-content">
              <p>{tomorrowPlusOne}</p>
              <div className="forecast-content__values">
                <p>{day.temperature}</p>
                <p>{day.wind}</p>
              </div>
            </div>
          ) : (
            <div className="forecast-content">
              <p>{tomorrowPlusTwo}</p>
              <div className="forecast-content__values">
                <p>{day.temperature}</p>
                <p>{day.wind}</p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

export default Forecast;
