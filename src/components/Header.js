import "./Header.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function Header() {
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
      <h1>Your weather app</h1>
    </header>
  );
}
