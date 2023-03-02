import "./Header.css";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import SearchItemList from "./SearchItemList";

export default function Header({
  handleSubmit,
  previousSearchItems,
  deleteSearchItem,
}) {
  const container = useRef(null);
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
  }

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../logo_small.json"), // the path to the animation json
    });
    return () => animation.destroy();
  }, []);

  return (
    <header>
      <div className="container" ref={container}></div>
      <div className="header__container">
        <h1>Weappther</h1>
        <Form
          handleSubmit={handleSubmit}
          value={value}
          handleChange={handleChange}
        />

        {console.log(previousSearchItems)}
        <SearchItemList
          previousSearchitems={previousSearchItems}
          deleteSearchItem={deleteSearchItem}
          setValue={setValue}
        />
      </div>
    </header>
  );
}
