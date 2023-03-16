import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import useDarkSide from "./useDarkSide";

function Switcher({size}) {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? false : true
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    // <div
    //   className=""
    // >
      
      <DarkModeSwitch
        className="switcher"
        style={{ paddingRight: "5px", marginRight: "5px" }}
        moonColor="white"
        sunColor="white"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={size}
      />
    // </div>
  );
}

export default Switcher;
