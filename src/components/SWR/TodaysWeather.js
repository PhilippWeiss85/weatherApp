import { useState } from "react";
import Forecast from "../Weather/Forecast";
import ExpandButton from "../ExpandButton";
import { BiExpand } from "react-icons/bi";
import moment from "moment";
import { motion } from "framer-motion";
import "moment/locale/de";

function TodaysWeather({
  fetchMessage,
  fetchError,
  data,
  city,
  weather,
  tempEmoji,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      opacity: 1,
      width: "100%",
      height: "100%",
      boxShadow: "0 0 9px 5px #fff,  0 0 15px #8198e5",
      scale: 1,
    },
    closed: {
      opacity: 1,
      scale: 0.8,
    },
  };

  const momentToday = moment().locale("de").format("dddd, ll");
  const momentTomorrow = moment().add(1, "d").locale("de").format("dddd, l");
  const momentTomorrowPlusOne = moment()
    .add(2, "d")
    .locale("de")
    .format("dddd, l");
  const momentTomorrowPlusTwo = moment()
    .add(3, "d")
    .locale("de")
    .format("dddd, l");

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
              <article className="city__today__article">
                <p>
                  Weather in {city?.charAt(0).toUpperCase() + city?.slice(1)}
                </p>
                <p>{momentToday}</p>
              </article>

              <article className="city__today__article-values">
                <p>{tempEmoji(weather.description)}</p>
                <p>{weather.temperature} degree</p>
                <p>{weather.wind} windspeed</p>
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
          <article className="forecast__container">
            {fetchMessage === "NOT_FOUND" ? (
              ""
            ) : (
              <>
                <motion.nav
                  animate={isOpen ? "open" : "closed"}
                  variants={variants}
                >
                  {isOpen !== true ? (
                    <ExpandButton setIsOpen={setIsOpen}>
                      <BiExpand /> Click to see forecast
                    </ExpandButton>
                  ) : (
                    <ExpandButton setIsOpen={setIsOpen}>
                      <BiExpand /> Collapse forecast
                    </ExpandButton>
                  )}
                  {isOpen && (
                    <div>
                      {weather.forecast?.map((day, index) => {
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
                    </div>
                  )}
                </motion.nav>
              </>
            )}
          </article>
        </>
      )}
    </section>
  );
}

export default TodaysWeather;
