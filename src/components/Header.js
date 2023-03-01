import "./Header.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import Form from "./Form";

export default function Header({ handleSubmit }) {
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
        <h1>Your weather app</h1>
        <Form handleSubmit={handleSubmit} />
      </div>
    </header>
  );
}
