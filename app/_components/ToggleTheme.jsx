"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("");

  // Effect to get theme from localStorage and set it on page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"; // Default to light if no theme is set
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark"); // Apply dark class if dark theme is selected
  }, []);

  const handleThemeChange = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Apply dark mode class to the document element
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-square bg-base-300 shadow-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={40}
          version="1.1"
          id="Layer_1"
          viewBox="0 0 511.988 511.988"
          xmlSpace="preserve"
        >
          <path
            style={{ fill: "#FFCE54" }}
            d="M501.928,10.059c-22.625-22.632-60.342,0-60.342,0L272.059,179.595c0,0-54.008-21.422-67.882-7.547  c-13.874,13.874-80.373,80.373-80.373,80.373L259.567,388.19c0,0,64.084-64.091,80.365-80.388  c16.312-16.296-7.531-67.873-7.531-67.873L501.928,70.393C501.928,70.393,524.553,32.684,501.928,10.059z M479.303,47.769  c-4.156,4.164-10.922,4.164-15.093,0c-4.156-4.163-4.156-10.921,0-15.085c4.171-4.164,10.937-4.164,15.093,0  S483.459,43.598,479.303,47.769z"
          />
          <path
            style={{ fill: "#DA4453" }}
            d="M138.882,508.858c-4.164,4.172-10.914,4.172-15.078,0L3.128,388.189  c-4.164-4.172-4.164-10.92,0-15.092l128.2-128.192c4.164-4.164,10.914-4.172,15.078,0l120.677,120.677  c4.172,4.156,1.359,13.719-2.805,17.889L138.882,508.858z"
          />
          <path
            style={{ fill: "#ED5564" }}
            d="M188.483,428.173c-13.687-5.858-27.562-20.937-32.273-35.077l-4.273-12.811  c-2.648-7.953-12.289-17.594-20.234-20.234l-12.82-4.281c-14.125-4.703-29.202-18.578-35.069-32.265l-9.328-21.765L3.128,373.098  c-4.164,4.172-4.164,10.92,0,15.092l120.676,120.669c4.164,4.172,10.914,4.172,15.078,0l71.357-71.357L188.483,428.173z"
          />
          <path
            style={{ fill: "#E6E9ED" }}
            d="M161.14,215.085c-17.437,17.438-37.335,37.336-37.335,37.336L259.568,388.19  c0-0.016,19.617-19.623,37.335-37.342L161.14,215.085z"
          />
          <g>
            <path
              style={{ fill: "#CCD1D9" }}
              d="M176.569,230.522l-7.515,7.516c-4.164,4.164-4.164,10.914,0,15.086   c2.086,2.077,4.812,3.124,7.546,3.124c2.727,0,5.453-1.047,7.539-3.124l7.516-7.516L176.569,230.522z"
            />
            <path
              style={{ fill: "#CCD1D9" }}
              d="M206.74,260.693l-7.516,7.508c-4.163,4.164-4.163,10.914,0,15.086   c2.078,2.078,4.812,3.125,7.539,3.125c2.734,0,5.461-1.047,7.547-3.125l7.515-7.516L206.74,260.693z"
            />
            <path
              style={{ fill: "#CCD1D9" }}
              d="M236.559,290.506l-7.164,7.172c-4.164,4.156-4.172,10.921,0,15.077   c2.078,2.094,4.812,3.125,7.539,3.125c2.726,0,5.46-1.031,7.539-3.125l7.172-7.172L236.559,290.506z"
            />
            <path
              style={{ fill: "#CCD1D9" }}
              d="M266.731,320.677l-7.172,7.172c-4.165,4.156-4.165,10.921,0,15.077   c2.086,2.078,4.812,3.125,7.547,3.125c2.727,0,5.453-1.047,7.547-3.125l7.155-7.171L266.731,320.677z"
            />
          </g>
          <g>
            <path
              style={{ fill: "#DA4453" }}
              d="M33.291,418.346l30.171-30.172c4.164-4.156,4.164-10.904,0-15.076s-10.922-4.172-15.085,0   l-30.171,30.17L33.291,418.346z"
            />
            <path
              style={{ fill: "#DA4453" }}
              d="M93.633,478.687l15.086,15.078l30.163-30.155c4.172-4.172,4.172-10.922,0.008-15.094   c-4.172-4.156-10.921-4.156-15.085,0L93.633,478.687L93.633,478.687z"
            />
            <path
              style={{ fill: "#DA4453" }}
              d="M101.172,395.721L55.924,440.97l0,0l15.086,15.094l0,0l45.248-45.249   c4.164-4.172,4.164-10.922,0-15.094C112.094,391.564,105.336,391.564,101.172,395.721z"
            />
          </g>
        </svg>
      </div>
      <ul className="dropdown-content bg-base-200 rounded-2xl z-[1] w-52 p-2 mt-5 shadow">
        <li className="relative *:capitalize">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-xs lg:btn-sm btn-block btn-ghost justify-start"
            aria-label="light"
            value="light"
            onClick={() => handleThemeChange("light")}
          />
          <FaSun
            className="absolute top-[50%] right-2 translate-y-[-50%]"
            size={20}
          />
        </li>
        <li className="relative *:capitalize">
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-xs lg:btn-sm btn-block btn-ghost justify-start"
            aria-label="dark"
            value="dark"
            onClick={() => handleThemeChange("dark")}
          />
          <FaMoon
            className="absolute top-[50%] right-2 translate-y-[-50%]"
            size={20}
          />
        </li>
        <hr className="my-2 border-slate-500 rounded" />
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-xs lg:btn-sm btn-block btn-ghost justify-start"
            aria-label="cupcake"
            value="cupcake"
            onClick={() => handleThemeChange("cupcake")}
          />
        </li>
      </ul>
    </div>
  );
}
