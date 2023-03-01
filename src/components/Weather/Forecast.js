import React from "react";

function Forecast({ day }) {
  return (
    <section>
      <div className="flexbox">
        <div className="forecast__containercontent">
          <aside className="forecast__containercontent__box__headline">
            {day.day === "1" ? (
              <div className="forecast-headline">
                <p>Tomorrow</p>
              </div>
            ) : day.day === "2" ? (
              <div className="forecast-headline">
                <p>The day after tomorrow</p>
              </div>
            ) : (
              <div className="forecast-headline">
                <p>The 3rd day</p>
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
