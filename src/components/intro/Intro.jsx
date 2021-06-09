import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            typeSpeed:  200,
            showCursor: false, 
            strings: ['Front-End','Back-End', 'Full Stack'] })
    }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <h2> Hi There, I'm</h2>
              <h1> Toby Torabi</h1>
              <h3><span ref= {textRef}></span> Developer</h3>
          </div>
          <a href="#portfolio">
              <img src="assets/down.png" alt="" />
          </a>
      </div>
    </div>
  );
}
