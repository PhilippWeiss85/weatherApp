import React from "react";
import { motion } from "framer-motion";

function Forecast({ day, tomorrow, tomorrowPlusOne, tomorrowPlusTwo }) {
  return (
    <section>
      <div className="flexbox">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
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
        </motion.div>
      </div>
    </section>
  );
}

export default Forecast;
