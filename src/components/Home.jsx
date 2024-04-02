import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import RevealedSOTD from "./RevealedSOTD";

const Home = () => {
  const [revealClicked, setRevealClicked] = useState(false);
  const [revealGone, setRevealGone] = useState(false);

  function onClickReveal() {
    setRevealClicked(true);
    setTimeout(() => {
      setRevealGone(true);
    }, 1250);
  }
 
  return (
    <div>
      <br />
      <br />
      <Banner />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="sotd">
        <span className="sotd-title">Scent of the Day</span>

        <div
          className={`below_sotd-title ${
            revealClicked ? "blur-out-expand" : ""
          }`}
        > 
          <br />
          <span>Explore the daily surprise scent</span>
          <br />
          <button className="reveal-button" onClick={onClickReveal}>
            Reveal
          </button>
        </div>
        {revealGone && <RevealedSOTD />}
      </div>
    </div>
  );
};

export default Home;
