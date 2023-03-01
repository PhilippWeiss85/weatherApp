import React from "react";

function Forecast({ day, tomorrow, tomorrowPlusOne, tomorrowPlusTwo }) {
  return (
    <section>
      <div className="flexbox">
        <div>
          <aside className="forecast__containercontent__box__headline">
            {day.day === "1" ? (
              <div className="forecast-headline">
                <p>{tomorrow}</p>
              </div>
            ) : day.day === "2" ? (
              <div className="forecast-headline">
                <p>{tomorrowPlusOne}</p>
              </div>
            ) : (
              <div className="forecast-headline">
                <p>{tomorrowPlusTwo}</p>
              </div>
            )}
          </aside>
          <aside className="forecast__containercontent__box">
            {day.temperature}
          </aside>
          <aside className="forecast__containercontent__box">{day.wind}</aside>
        </div>
      </div>
    </section>
  );
}

export default Forecast;
