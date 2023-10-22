import { useState, useEffect } from "react";

// assets
import logo from "../assets/daisyui-seeklogo.com.svg";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const Navbar = () => {


// ====================================================================================
// dark mode light mode start
// ====================================================================================
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
// ====================================================================================
// dark mode light mode end
// ====================================================================================



  return (
    <div className="navbar shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <img src={logo} alt="OM" className="btn btn-ghost p-0" />
        <h1 className="text-lg font-bold mx-4">Your Website</h1>
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localStorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on bg-white" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off bg-gray-500" />
          </label>
        </button>
      </div>
    </div>
  );
};
export default Navbar;