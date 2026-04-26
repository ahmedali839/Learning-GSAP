import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

const App = () => {
  const gsapRef = useRef();

  useGSAP(
    () => {
      // gsap.from(".box", {
        gsap.from(gsapRef.current, {
        x: 1500,
        scale: 0,
        duration: 1,
        // delay: 1,
        opacity: 0,
        rotate: 360,
      });
    },
    { scope: ".container" },
  );

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
