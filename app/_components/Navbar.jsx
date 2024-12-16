"use client";
import axios from "axios";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { FaBars } from "react-icons/fa";
import { MdLogin, MdLogout } from "react-icons/md";
import Swal from "sweetalert2";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Nav_bar() {
  const [token, setToken] = useState(false);
  const logout = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js
    await Swal.fire({
      title: "Are you sure ?",
      text: "You want to logout ?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#991b1b",
      confirmButtonColor: "#82bcf4",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`${backendUrl}/logout`, {
            withCredentials: true, // Important to include cookies
          })
          .then(() => {
            localStorage.removeItem("JWT");
            localStorage.removeItem("persist:root");
            window.location.href = "/";
          })
          .catch((err) => {
            if (err) {
              // console.log(err);
            }
            // console.log("logged out false");
          });
      }
    });
  };
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js
  const user = useSelector((state) => state.user);
  useEffect(() => {
    setToken(localStorage.getItem("JWT"));
  }, [user, token]);
  return (
    <nav className="fixed w-full shadow z-50 flex justify-between items-center gap-4 p-2 bg-base-200">
      {/* title and theme and logo */}
      <Link
        href={"/"}
        className="btn btn-ghost bg-base-300 lg:text-xl text-main font-extrabold uppercase tracking-wider lg:tracking-widest rounded-md shadow-none"
      >
        <span className="hidden lg:block"> E-commerce</span>
        <svg
          width={40}
          height={40}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <defs>
            <style>
              {`
            .cls-2 { fill: #7c7d7d; }
            .cls-3 { fill: #747575; }
            .cls-6 { fill: #6fabe6; }
            .cls-7 { fill: #82bcf4; }
            .cls-8 { fill: #374f68; }
          `}
            </style>
          </defs>
          <g id="Ecommerce">
            <path
              d="M47 31H1V7a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4z"
              style={{ fill: "#dad7e5" }}
            />
            <path
              className="cls-2"
              d="M43 37H5a4 4 0 0 1-4-4v-2h46v2a4 4 0 0 1-4 4zM31 45H17l2-8h10l2 8z"
            />
            <path
              className="cls-3"
              d="M35 46H13a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"
            />
            <path
              d="M47 7v22H12a6 6 0 0 1-6-6V3h37a4 4 0 0 1 4 4z"
              style={{ fill: "#edebf2" }}
            />
            <path
              d="M47 31v2a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-2z"
              style={{ fill: "#919191" }}
            />
            <path className="cls-3" d="M29.5 39h-11l.5-2h10l.5 2z" />
            <path
              className="cls-6"
              d="M34 11c-1.79 8-1.41 6.34-2 9H17l-1.38-9z"
            />
            <path
              className="cls-7"
              d="m34 11-1.56 7h-7.29a6 6 0 0 1-5.93-5.09L18.93 11z"
            />
            <path
              className="cls-8"
              d="M18 20a1 1 0 0 0-1 1 1 1 0 0 1-1-.85c-.27-1.69 0 0-1.87-12.15H12a1 1 0 0 1 0-2h3a1 1 0 0 1 1 .85c2.24 14.6 2 12.98 2 13.15z"
            />
            <path
              className="cls-8"
              d="M29 24H18a3 3 0 0 1-.29-6c.31 2.05.29 1.85.29 2a1 1 0 0 0 0 2h11a1 1 0 0 1 0 2z"
            />
            <path
              d="M17.15 21.5A1 1 0 0 0 18 23c11.75 0 11.43-.2 11.85.5A1 1 0 0 0 29 22c-11.75 0-11.43.2-11.85-.5z"
              style={{ fill: "#2c435e" }}
            />
            <path
              className="cls-8"
              d="M21 26a1 1 0 0 0-2 0 1 1 0 0 0 2 0M27 26a1 1 0 0 0-2 0 1 1 0 0 0 2 0"
            />
            <path
              className="cls-6"
              d="M39.71 23.29a1 1 0 0 1-1.42 1.42L37 23.41V24a1 1 0 0 1-2 0c0-4.52-.6-4 4-4a1 1 0 0 1 0 2h-.59z"
            />
            <path
              className="cls-7"
              d="m39.87 24.49-4.35-4.35C35.63 20 36.66 20 39 20a1 1 0 0 1 0 2h-.59c1.35 1.34 1.92 1.7 1.46 2.49z"
            />
          </g>
        </svg>
      </Link>
      {/* auth or  pages */}
      <div className="flex items-center gap-2">
        {/* auth */}
        {token ? (
          <div className="flex justify-center lg:gap-2">
            {/* profile and logout */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-square btn-ghost"
              >
                <div className="btn btn-square bg-base-300 shadow-none">
                  {user.gender === "male" ? (
                    <svg
                      width={40}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 144.773 144.773"
                      xmlSpace="preserve"
                    >
                      <g>
                        <circle
                          style={{ fill: "#F5C002" }}
                          cx="72.387"
                          cy="72.386"
                          r="72.386"
                        />
                        <g>
                          <defs>
                            <circle
                              id="SVGID_1_"
                              cx="72.387"
                              cy="72.386"
                              r="72.386"
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use
                              xlinkHref="#SVGID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <g style={{ clipPath: "url(#SVGID_2_)" }}>
                            <g>
                              <path
                                style={{ fill: "#F1C9A5" }}
                                d="M107.053,116.94c-4.666-8.833-34.666-14.376-34.666-14.376s-30,5.543-34.666,14.376 c-3.449,12.258-6.334,27.833-6.334,27.833h41h41C113.387,144.773,111.438,128.073,107.053,116.94z"
                              />
                              <path
                                style={{ fill: "#E4B692" }}
                                d="M72.387,102.564c0,0,30,5.543,34.666,14.376c4.386,11.133,6.334,27.833,6.334,27.833h-41V102.564 z"
                              />
                              <rect
                                x="64.22"
                                y="84.606"
                                style={{ fill: "#F1C9A5" }}
                                width="16.334"
                                height="27.336"
                              />
                              <rect
                                x="72.387"
                                y="84.606"
                                style={{ fill: "#E4B692" }}
                                width="8.167"
                                height="27.336"
                              />
                              <path
                                style={{ opacity: 0.1, fill: "#DDAC8C" }}
                                d="M64.22,97.273c1.469,4.217,7.397,6.634,11.751,6.634 c1.575,0,3.107-0.264,4.583-0.747V84.606H64.22V97.273z"
                              />
                              <path
                                style={{ fill: "#F1C9A5" }}
                                d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783c-11.598,0-21,9.709-21,26.783 c0,22.966,9.402,30.917,21,30.917C83.984,98.274,93.387,89.366,93.387,67.357z"
                              />
                              <path
                                style={{ fill: "#E4B692" }}
                                d="M90.19,79.197c-3.807-0.398-6.377-4.5-5.732-9.156c0.637-4.66,4.242-8.12,8.051-7.724 c3.805,0.396,6.371,4.496,5.729,9.156C97.599,76.134,93.997,79.591,90.19,79.197z"
                              />
                              <path
                                style={{ fill: "#F1C9A5" }}
                                d="M46.685,71.474c-0.643-4.66,1.924-8.76,5.727-9.156c3.81-0.396,7.416,3.063,8.055,7.724 c0.643,4.656-1.93,8.758-5.734,9.156C50.925,79.591,47.323,76.134,46.685,71.474z"
                              />
                              <path
                                style={{ fill: "#E4B692" }}
                                d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783v57.7C83.984,98.274,93.387,89.366,93.387,67.357 z"
                              />
                            </g>
                            <path
                              style={{ fill: "#303030" }}
                              d="M91.277,81.668c-1.13,3.176-3.041,6.994-6.494,6.994c-4.316,0-7.403-3.508-12.354-3.508 c-0.014,0-0.027,0.002-0.041,0.002c-0.015,0-0.028-0.002-0.043-0.002c-4.95,0-8.036,3.508-12.354,3.508 c-3.453,0-5.363-3.818-6.493-6.994L52.52,75.55v7.321c0,0,1.641,8.622,4.79,10.705c2.565,2.279,10.938,6.183,15.033,6.183h0.001 c0.014,0,0.028-0.002,0.043-0.002c0.014,0,0.028,0.002,0.041,0.002h0.002c4.096,0,12.469-3.903,15.033-6.183 c3.149-2.083,4.79-10.705,4.79-10.705V75.55L91.277,81.668z"
                            />
                            <path
                              style={{ fill: "#303030" }}
                              d="M62.218,43.841c0,0,3.9,15.787,25.632,23.773c-2.044-3.529-2.415-7.801-2.415-7.801 s3.529,3.715,9.286,6.687c3.158-6.314,6.873-15.787-1.485-20.987C84.878,40.312,65.004,31.024,62.218,43.841z"
                            />
                            <path
                              style={{ fill: "#303030" }}
                              d="M54.975,66.314c0,0,1.613-18.023,8.328-22.01c-5.728-2.499-14.457,5.108-13.529,9.751 C50.703,58.699,54.975,66.314,54.975,66.314z"
                            />
                            <path
                              style={{ fill: "#FB621E" }}
                              d="M107.053,116.94c-2.726-5.158-14.082-9.191-23.065-11.656c-0.352,6.11-5.402,10.96-11.601,10.96 c-6.198,0-11.249-4.85-11.6-10.96c-8.983,2.465-20.34,6.498-23.066,11.656c-3.449,12.258-6.334,27.833-6.334,27.833h41h41 C113.387,144.773,111.438,128.073,107.053,116.94z"
                            />
                            <path
                              style={{ opacity: 0.2, fill: "#E53D0C" }}
                              d="M60.114,108.284c0.372,6.11,5.715,10.96,12.272,10.96c6.558,0,11.9-4.85,12.272-10.96 c8.233,2.135,18.34,5.449,22.772,9.65c-0.124-0.336-0.25-0.668-0.379-0.994c-2.726-5.158-14.082-9.191-23.065-11.656 c-0.352,6.11-5.402,10.96-11.601,10.96c-6.198,0-11.249-4.85-11.6-10.96c-8.983,2.465-20.34,6.498-23.066,11.656 c-0.081,0.289-0.163,0.577-0.25,0.866C56.476,113.733,58.498,105.586,60.114,108.284z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width={40}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 144.773 144.773"
                      xmlSpace="preserve"
                    >
                      <g>
                        <circle
                          style={{ fill: "#2B5971" }}
                          cx="72.387"
                          cy="72.386"
                          r="72.386"
                        />
                        <g>
                          <defs>
                            <circle
                              id="SVGID_1_"
                              cx="72.387"
                              cy="72.386"
                              r="72.386"
                            />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use
                              xlinkHref="#SVGID_1_"
                              style={{ overflow: "visible" }}
                            />
                          </clipPath>
                          <g style={{ clipPath: "url(#SVGID_2_)" }}>
                            <path
                              style={{ fill: "#583A2F" }}
                              d="M102.172,63.438c0-16.71-13.545-34.338-30.255-34.338c-16.71,0-30.255,17.628-30.255,34.338s13.545,30.255,30.255,30.255C88.627,93.692,102.172,80.147,102.172,63.438z"
                            />
                            <g>
                              <path
                                style={{ fill: "#583A2F" }}
                                d="M54.975,127.85h38.412c0,0,3.92-41.85,3.42-58.425s-16.334-26.742-30.5-26.742S37.475,106.608,54.975,127.85z"
                              />
                              <path
                                style={{ fill: "#F1C9A5" }}
                                d="M107.053,116.94c-3.087-5.844-17.258-10.246-26.499-12.557V84.606H64.22v19.777c-9.241,2.311-23.412,6.713-26.499,12.557c-3.449,12.258-6.334,27.833-6.334,27.833h41h41C113.387,144.773,111.438,128.073,107.053,116.94z"
                              />
                              <path
                                style={{ fill: "#E4B692" }}
                                d="M107.053,116.94c-3.087-5.844-17.258-10.246-26.499-12.557V84.606h-8.167v17.958v9.378v32.831h41C113.387,144.773,111.438,128.073,107.053,116.94z"
                              />
                              <path
                                style={{ opacity: 0.1, fill: "#DDAC8C" }}
                                d="M64.22,97.273c1.469,4.217,7.397,6.634,11.751,6.634c1.575,0,3.107-0.264,4.583-0.747V84.606H64.22V97.273z"
                              />
                              <path
                                style={{ fill: "#F1C9A5" }}
                                d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783c-11.598,0-21,9.709-21,26.783s9.402,30.917,21,30.917C83.984,98.274,93.387,84.432,93.387,67.357z"
                              />
                              <path
                                style={{ fill: "#E4B692" }}
                                d="M90.19,79.199c-3.807-0.366-6.377-4.14-5.733-8.423c0.637-4.287,4.242-7.47,8.051-7.105c3.805,0.365,6.371,4.137,5.729,8.424C97.599,76.382,93.997,79.562,90.19,79.199z"
                              />
                              <path
                                style={{ fill: "#F1C9A5" }}
                                d="M45.822,72.095c-0.643-4.287,1.924-8.059,5.727-8.424c3.811-0.364,7.416,2.818,8.055,7.105c0.643,4.283-1.93,8.057-5.734,8.423C50.062,79.562,46.461,76.382,45.822,72.095z"
                              />
                              <path
                                style={{ fill: "#E4B692" }}
                                d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783v57.7C83.984,98.274,93.387,84.432,93.387,67.357z"
                              />
                              <path
                                style={{ fill: "#C51C39" }}
                                d="M80.554,104.384v-4.461c-2.64,0.227-5.37,0.347-8.167,0.347c-2.797,0-5.527-0.12-8.167-0.347v4.461c-9.241,2.311-23.412,6.713-26.499,12.557c-3.449,12.258-6.334,27.833-6.334,27.833h41h41c0,0-1.948-16.7-6.334-27.833C103.966,111.097,89.795,106.694,80.554,104.384z"
                              />
                            </g>
                            <g>
                              <g>
                                <path
                                  style={{
                                    fill: "none",
                                    stroke: "#FFFFFF",
                                    strokeWidth: "1.4308",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                  d="M62.374,104.678c0,0.009,0,0.017,0,0.025"
                                />
                                <path
                                  style={{
                                    fill: "none",
                                    stroke: "#FFFFFF",
                                    strokeWidth: "1.4308",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeDasharray: "0.0479,1.9175",
                                  }}
                                  d="M62.561,106.61c0.9,4.605,4.957,8.079,9.827,8.079c5.203,0,9.479-3.968,9.966-9.043"
                                />
                                <path
                                  style={{
                                    fill: "none",
                                    stroke: "#FFFFFF",
                                    strokeWidth: "1.4308",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                  d="M82.4,104.703c0-0.009,0-0.017,0-0.025"
                                />
                              </g>
                            </g>
                            <path
                              style={{ fill: "#583A2F" }}
                              d="M41.662,63.438c0,0-3.688,61.177-6.438,81.336h21l-4.268-56.769"
                            />
                            <path
                              style={{ fill: "#583A2F" }}
                              d="M102.171,63.438c0,0,3.688,61.177,6.438,81.336h-21l2.781-53.508"
                            />
                            <path
                              style={{ fill: "#583A2F" }}
                              d="M73.595,37.149c-12.551,0-23.932,13.977-23.932,27.222c0,0.051,0.003,0.1,0.003,0.15h11.853l1.122-8.839v8.839h12v-8.839l2.104,8.839h7.614v-7.339l1.826,7.339h8.924c0-0.051,0.003-0.1,0.003-0.15C95.112,51.126,86.145,37.149,73.595,37.149z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}
                </div>
              </div>
              {/* display name and logout */}
              <ul
                tabIndex={0}
                className="menu menu-xs lg:menu-md dropdown-content bg-base-200 rounded-box z-[1] mt-5 w-52 p-2 shadow *:font-semibold *:tracking-wider *:capitalize "
              >
                <li>
                  <Link
                    href={"/profile"}
                    className="flex justify-between items-center"
                  >
                    Profile
                    <span className="capitalize tracking-wider font-md">
                      {user.name}
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                    }}
                    className="flex justify-between items-center text-red-600 uppercase"
                  >
                    logout
                    <MdLogout size={20} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        {!token ? (
          <ul className="rounded">
            <li>
              <Link
                className="btn btn-sm lg:btn-md flex justify-between items-center gap-2 bg-main text-maintext capitalize tracking-wider font-semibold"
                href={"/login"}
              >
                login
                <MdLogin className="lg:block hidden" size={20} />
              </Link>
            </li>
          </ul>
        ) : null}
        {/* cart */}
        {token ? <Cart /> : null}
        {/* theme */}
        {token ? <ToggleTheme /> : null}
        {/* pages */}
        {token ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-square bg-base-300 shadow-none"
            >
              <FaBars className="text-main" size={40} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xs lg:menu-md dropdown-content bg-base-200 rounded-box z-[1] mt-5 w-52 p-2 shadow *:font-semibold *:tracking-wider *:capitalize "
            >
              <li>
                <Link href={"/products"}>products</Link>
              </li>
              <li>
                <Link href={"/about"}>about</Link>
              </li>
              <li>
                <Link href={"/services"}>services</Link>
              </li>
              {/* <li>
                <Link href={"/company"}>company</Link>
              </li> */}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
