import "./Header.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import Form from "./Form";
import SearchItemList from "./SearchItemList";

export default function Header({
  handleSubmit,
  previousSearchItems,
  deleteSearchItem,
  handleChange,
  value,
  setValue,
}) {
  const container = useRef(null);

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
