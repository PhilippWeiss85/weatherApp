import React from "react";

function Forecast({ day, momentToday }) {
  return (
    <section>
      <div className="flexbox">
        <div>
          <aside className="forecast__containercontent__box__headline">
            {day.day === "1" ? (
              <div className="forecast-headline">
                <p>Tomorrow</p>
                <p>{momentToday.add(7, "d")}</p>
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
