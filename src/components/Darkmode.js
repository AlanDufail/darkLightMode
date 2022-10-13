import { useState } from "react";
import moon from "../moon.svg";
import sun from "../sun.svg";

function DarkMode() {
  return (
    <div className="button">
      <input className="cb__input" type="checkbox" id="toogle-darkmode" />
      <label className="cb__label" for="toogle-darkmode">
        <img src={sun} className="sun"/>
        <img src={moon} className="moon"/>
      </label>
    </div>
  );
}

export default DarkMode;
