import React from "react";

function Forecast({ day }) {
  console.log(day);
  return (
    <section>
      <div className="flexbox">
        <div className="forecast__containercontent">
          <aside className="forecast__containercontent__box">
            {day.day === "1" ? (
              <p>Tomorrow</p>
            ) : day.day === "2" ? (
              <p>The day after tomorrow</p>
            ) : (
              <p>The 3rd day</p>
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
