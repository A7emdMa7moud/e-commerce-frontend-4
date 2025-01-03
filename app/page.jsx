"use client";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("JWT"));
  }, []);

  return (
    <div>
      <div className="grid grid-rows-1 gap-4 mt-20 mb-20 grid-cols-5">
        <div className="col-span-3 m-auto">
          <h1 className="lg:text-2xl lg:font-bold font-semibold capitalize mb-4">
            <span className="lg:text-5xl text-2xl text-main font-extrabold uppercase tracking-wider">
              E-commerce
            </span>
            <br />
            <span className="text-secondary font-semibold">website</span>
          </h1>
          <p className="text-sm lg:text-lg text-neutral-400 font-medium capitalize mb-4 lg:max-w-[80%] line-clamp-4 lg:line-clamp-none">
            Welcome to{" "}
            <strong className="text-gray-400">Our Online Store</strong>! We
            offer a wide range of premium products across various categories
            like <em>clothing, electronics, home appliances, and more</em>.
            Whether you{"'"}re looking for the latest fashion trends or the
            newest gadgets, we{"'"}ve got you covered. We believe shopping
            should be easy and enjoyable, so we provide a{" "}
            <strong className="text-gray-400">secure, fast</strong> shopping
            experience with flexible shipping options. Don{"'"}t miss out on our
            exclusive deals and promotions on select products.
          </p>
          {token ? (
            <Link
              href={"/products"}
              className="btn lg:btn-md btn-sm lg:font-bold font-semibold bg-main text-maintext tracking-wider capitalize text-sm lg:*:text-lg"
            >
              view all products
            </Link>
          ) : (
            <div className="w-[70%] grid grid-cols-2 gap-2 *:btn lg:*:btn-md *:btn-sm lg:*:font-bold font-semibold *:bg-main *:text-maintext *:tracking-wider *:capitalize *:text-sm lg:*:text-lg">
              <Link href={"/login"} className="">
                login
              </Link>
              <Link href={"/signup"} className="">
                signup
              </Link>
            </div>
          )}
        </div>
        <div className="col-span-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
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
        </div>
      </div>
      {/* links */}
      <div
        id="products"
        className="grid grid-cols-4 gap-2 lg:gap-6 *:w-full *:h-full justify-items-center lg:grid-cols-6"
      >
        <Link
          className="btn p-4 *:duration-100 *:hover:scale-125 *:hover:rotate-3"
          href={"/"}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58 58"
            xmlSpace="preserve"
          >
            <rect y={1} style={{ fill: "#AFB6BB" }} width={58} height={40} />
            <path
              style={{ fill: "#38454F" }}
              d="M32,49.073v3.06C32,52.611,31.611,53,31.132,53h-4.264C26.389,53,26,52.611,26,52.132v-3.06
	C18.599,49.424,13,51.047,13,53c0,2.209,7.163,4,16,4s16-1.791,16-4C45,51.047,39.401,49.424,32,49.073z"
            />
            <path
              style={{ fill: "#546A79" }}
              d="M31.132,53h-4.264C26.389,53,26,52.611,26,52.132V41h6v11.132C32,52.611,31.611,53,31.132,53z"
            />
            <rect y={5} style={{ fill: "#546A79" }} width={58} height={32} />
            <g>
              <path
                style={{ fill: "#839CAA" }}
                d="M4,14c0.256,0,0.512-0.098,0.707-0.293l4-4c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
		l-4,4c-0.391,0.391-0.391,1.023,0,1.414C3.488,13.902,3.744,14,4,14z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M4,19c0.256,0,0.512-0.098,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
		l-2,2c-0.391,0.391-0.391,1.023,0,1.414C3.488,18.902,3.744,19,4,19z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M7.29,13.29C7.11,13.48,7,13.74,7,14c0,0.27,0.11,0.52,0.29,0.71C7.48,14.89,7.73,15,8,15
		c0.26,0,0.52-0.11,0.71-0.29C8.89,14.52,9,14.26,9,14c0-0.26-0.11-0.52-0.29-0.71C8.33,12.92,7.66,12.92,7.29,13.29z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M9.293,12.707C9.488,12.902,9.744,13,10,13s0.512-0.098,0.707-0.293l3-3
		c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-3,3C8.902,11.684,8.902,12.316,9.293,12.707z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M12.293,13.293l-9,9c-0.391,0.391-0.391,1.023,0,1.414C3.488,23.902,3.744,24,4,24
		s0.512-0.098,0.707-0.293l9-9c0.391-0.391,0.391-1.023,0-1.414S12.684,12.902,12.293,13.293z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M14.29,11.29C14.11,11.48,14,11.74,14,12c0,0.26,0.11,0.52,0.29,0.71C14.48,12.89,14.74,13,15,13
		c0.26,0,0.52-0.11,0.71-0.29C15.89,12.52,16,12.26,16,12c0-0.27-0.11-0.52-0.29-0.71C15.34,10.92,14.66,10.92,14.29,11.29z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M18.707,8.293c-0.391-0.391-1.023-0.391-1.414,0l-1,1c-0.391,0.391-0.391,1.023,0,1.414
		C16.488,10.902,16.744,11,17,11s0.512-0.098,0.707-0.293l1-1C19.098,9.316,19.098,8.684,18.707,8.293z"
              />
            </g>
          </svg>
        </Link>
        <Link
          className="btn p-4 *:duration-100 *:hover:scale-125 *:hover:rotate-3"
          href={"/"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 58 58"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: "#E7ECED" }}
              d="M55,47V11.067C55,9.373,53.627,8,51.933,8H6.067C4.373,8,3,9.373,3,11.067V47H55z"
            />
            <rect y={47} style={{ fill: "#AFB6BB" }} width={58} height={3} />
            <rect
              x={6}
              y={11}
              style={{ fill: "#546A79" }}
              width={46}
              height={29}
            />
            <g>
              <path
                style={{ fill: "#839CAA" }}
                d="M11,21c0.256,0,0.512-0.098,0.707-0.293l4-4c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0   l-4,4c-0.391,0.391-0.391,1.023,0,1.414C10.488,20.902,10.744,21,11,21z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M11,26c0.256,0,0.512-0.098,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0   l-2,2c-0.391,0.391-0.391,1.023,0,1.414C10.488,25.902,10.744,26,11,26z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M14.29,20.29C14.109,20.48,14,20.73,14,21s0.109,0.52,0.29,0.71C14.479,21.89,14.74,22,15,22   s0.52-0.11,0.71-0.29C15.89,21.52,16,21.26,16,21c0-0.26-0.11-0.52-0.29-0.71C15.34,19.92,14.66,19.92,14.29,20.29z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M16.293,19.707C16.488,19.902,16.744,20,17,20s0.512-0.098,0.707-0.293l3-3   c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-3,3C15.902,18.684,15.902,19.316,16.293,19.707z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M19.293,20.293l-9,9c-0.391,0.391-0.391,1.023,0,1.414C10.488,30.902,10.744,31,11,31   s0.512-0.098,0.707-0.293l9-9c0.391-0.391,0.391-1.023,0-1.414S19.684,19.902,19.293,20.293z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M21.29,18.29C21.109,18.48,21,18.74,21,19c0,0.26,0.109,0.52,0.29,0.71C21.479,19.89,21.74,20,22,20   s0.52-0.11,0.71-0.29C22.89,19.52,23,19.26,23,19c0-0.26-0.11-0.52-0.29-0.71C22.34,17.92,21.66,17.92,21.29,18.29z"
              />
              <path
                style={{ fill: "#839CAA" }}
                d="M25.707,15.293c-0.391-0.391-1.023-0.391-1.414,0l-1,1c-0.391,0.391-0.391,1.023,0,1.414   C23.488,17.902,23.744,18,24,18s0.512-0.098,0.707-0.293l1-1C26.098,16.316,26.098,15.684,25.707,15.293z"
              />
            </g>
            <path
              style={{ fill: "#6C797A" }}
              d="M31,44h-4c-0.553,0-1-0.448-1-1s0.447-1,1-1h4c0.553,0,1,0.448,1,1S31.553,44,31,44z"
            />
          </svg>
        </Link>
        <Link
          className="btn p-4 *:duration-100 *:hover:scale-125 *:hover:rotate-3"
          href={"/"}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 59 59"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: "#546A79" }}
              d="M45.5,6.266L32.5,4v19h10.057C42.807,17.349,45.5,6.266,45.5,6.266z"
            />
            <path
              style={{ fill: "#546A79" }}
              d="M13.5,6.266c0,0,2.693,11.083,2.943,16.734H26.5V4L13.5,6.266z"
            />
            <path
              style={{ fill: "#38454F" }}
              d="M42.5,26.5c0-0.845,0.02-2.679,0.057-3.5H16.443c0.036,0.821,0.057,2.655,0.057,3.5
	c0,4.442-0.515,7.13-1.404,9.65c-1.082,3.066-1.599,6.308-1.34,9.548c0.047,0.587,0.1,1.058,0.159,1.303
	C15.564,53.855,21.942,59,29.5,59c7.559,0,13.937-5.146,15.586-12c0.059-0.245,0.112-0.716,0.159-1.303
	c0.258-3.24-0.259-6.482-1.34-9.547C43.015,33.63,42.5,30.942,42.5,26.5z"
            />
            <rect
              x="26.5"
              y={12}
              style={{ fill: "#38454F" }}
              width={6}
              height={1}
            />
            <rect
              x="26.5"
              y={8}
              style={{ fill: "#38454F" }}
              width={6}
              height={2}
            />
            <rect
              x="26.5"
              y={15}
              style={{ fill: "#38454F" }}
              width={6}
              height={1}
            />
            <rect
              x="26.5"
              y={18}
              style={{ fill: "#38454F" }}
              width={6}
              height="5.673"
            />
            <rect
              x="26.5"
              y={10}
              style={{ fill: "#6C797A" }}
              width={6}
              height={2}
            />
            <rect
              x="26.5"
              y={13}
              style={{ fill: "#6C797A" }}
              width={6}
              height={2}
            />
            <rect
              x="26.5"
              y={16}
              style={{ fill: "#6C797A" }}
              width={6}
              height={2}
            />
            <line
              style={{
                fill: "none",
                stroke: "#38454F",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              x1="29.5"
              y1={8}
              x2="29.5"
              y2={1}
            />
            <path
              style={{ fill: "#546A79" }}
              d="M29.5,30c-0.553,0-1-0.447-1-1v-6c0-0.553,0.447-1,1-1s1,0.447,1,1v6C30.5,29.553,30.053,30,29.5,30z
	"
            />
            <circle style={{ fill: "#43B05C" }} cx="29.5" cy={48} r={4} />
          </svg>
        </Link>
        <Link
          className="btn p-4 *:duration-100 *:hover:scale-125 *:hover:rotate-3"
          href={"/"}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 54.839 54.839"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: "#D3AA6E" }}
              d="M37.466,17.373l1.415-1.415l-1.415-1.414l3.536-3.535l1.414,1.414l0.708-0.707l-1.415-1.414
	l3.537-3.537l1.414,1.416l1.414-1.415c-0.391-0.391-0.391-1.023,0-1.414l-2.828-2.828l0,0l-4.243,4.242
	c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l4.243-4.242l0,0l-0.894-0.894
	c-0.288-0.288-0.754-0.288-1.042,0l-11.5,11.5l7.07,7.07C37.076,18.395,37.076,17.763,37.466,17.373z"
            />
            <path
              style={{ fill: "#D3AA6E" }}
              d="M54.623,11.902l-0.893-0.893l0,0l-4.243,4.242c-0.195,0.195-0.451,0.293-0.707,0.293
	s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l4.243-4.242l0,0l-2.122-2.122l-3.536,3.536l-1.413-1.413
	c0,0-0.001-0.001-0.001-0.001l-0.707,0.707l1.414,1.414l-3.536,3.535l-1.414-1.414l-0.707,0.707l1.414,1.414l-2.829,2.829
	c-0.195,0.195-0.451,0.293-0.707,0.293c-0.255,0-0.51-0.097-0.706-0.292l5.655,5.655l11.5-11.5
	C54.911,12.656,54.911,12.19,54.623,11.902z"
            />
            <polygon
              style={{ fill: "#F4D75D" }}
              points="37.466,18.787 37.468,18.788 37.465,18.786 "
            />
            <path
              style={{ fill: "#F2DD86" }}
              d="M45.245,9.596l1.413,1.413l3.536-3.536l-2.121-2.121c-0.39,0.391-0.39,1.023,0,1.414L46.659,8.18
	l-1.414-1.416l-3.537,3.537l1.415,1.414l-0.708,0.707l-1.414-1.414l-3.536,3.535l1.415,1.414l-1.415,1.415
	c-0.39,0.39-0.39,1.022-0.001,1.413l0.002,0.002c0.195,0.195,0.45,0.292,0.706,0.292c0.256,0,0.512-0.098,0.707-0.293l2.829-2.829
	l-1.414-1.414l0.707-0.707l1.414,1.414l3.536-3.535l-1.414-1.414l0.707-0.707C45.244,9.595,45.245,9.595,45.245,9.596z"
            />
            <path
              style={{ fill: "#F2DD86" }}
              d="M39.588,5.352c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
	s0.512-0.098,0.707-0.293l4.243-4.242l0,0L43.83,1.109l0,0L39.588,5.352z"
            />
            <path
              style={{ fill: "#F2DD86" }}
              d="M48.073,13.837c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
	s0.512-0.098,0.707-0.293l4.243-4.242l0,0l-1.414-1.414l0,0L48.073,13.837z"
            />
            <path
              style={{ fill: "#38454F" }}
              d="M24.94,10.1L7.414,27.626c-1.367,1.367-1.367,3.583,0,4.95l0,0c1.367,1.367,1.367,3.583,0,4.95
	l-1.227,1.227c-0.689,0.689-0.689,1.806,0,2.496l7.404,7.404c0.689,0.689,1.806,0.689,2.496,0l1.227-1.227
	c1.367-1.367,3.583-1.367,4.95,0l0,0c1.367,1.367,3.583,1.367,4.95,0l17.526-17.526c1.06-1.06,1.06-2.779,0-3.839L28.779,10.1
	C27.719,9.04,26,9.04,24.94,10.1z"
            />
            <path
              style={{ fill: "#546A79" }}
              d="M8.475,43.536l-7.889,7.889c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0l7.889-7.889
	L8.475,43.536z"
            />
          </svg>
        </Link>
        <Link
          className="btn p-4 *:duration-100 *:hover:scale-125 *:hover:rotate-3"
          href={"/"}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58 58"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: "#E7ECED" }}
              d="M43.038,58H16.962C15.326,58,14,56.674,14,55.038V2.962C14,1.326,15.326,0,16.962,0h26.077
	C44.674,0,46,1.326,46,2.962v52.077C46,56.674,44.674,58,43.038,58z"
            />
            <rect
              x={14}
              y={6}
              style={{ fill: "#38454F" }}
              width={32}
              height={44}
            />
            <path
              style={{ fill: "#38454F" }}
              d="M34,4h-5c-0.552,0-1-0.447-1-1s0.448-1,1-1h5c0.552,0,1,0.447,1,1S34.552,4,34,4z"
            />
            <path
              style={{ fill: "#38454F" }}
              d="M26,4h-1c-0.552,0-1-0.447-1-1s0.448-1,1-1h1c0.552,0,1,0.447,1,1S26.552,4,26,4z"
            />
            <circle style={{ fill: "#AFB6BB" }} cx={30} cy={54} r={3} />
            <g>
              <path
                style={{ fill: "#546A79" }}
                d="M17,14c0.256,0,0.512-0.098,0.707-0.293l4-4c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
		l-4,4c-0.391,0.391-0.391,1.023,0,1.414C16.488,13.902,16.744,14,17,14z"
              />
              <path
                style={{ fill: "#546A79" }}
                d="M17,19c0.256,0,0.512-0.098,0.707-0.293l2-2c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
		l-2,2c-0.391,0.391-0.391,1.023,0,1.414C16.488,18.902,16.744,19,17,19z"
              />
              <path
                style={{ fill: "#546A79" }}
                d="M20.29,13.29C20.11,13.479,20,13.74,20,14s0.11,0.52,0.29,0.71C20.48,14.89,20.74,15,21,15
		c0.26,0,0.52-0.11,0.71-0.29C21.89,14.52,22,14.26,22,14c0-0.271-0.11-0.521-0.29-0.71C21.34,12.92,20.67,12.92,20.29,13.29z"
              />
              <path
                style={{ fill: "#546A79" }}
                d="M22.293,12.707C22.488,12.902,22.744,13,23,13s0.512-0.098,0.707-0.293l3-3
		c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-3,3C21.902,11.684,21.902,12.316,22.293,12.707z"
              />
              <path
                style={{ fill: "#546A79" }}
                d="M25.293,13.293l-9,9c-0.391,0.391-0.391,1.023,0,1.414C16.488,23.902,16.744,24,17,24
		s0.512-0.098,0.707-0.293l9-9c0.391-0.391,0.391-1.023,0-1.414S25.684,12.902,25.293,13.293z"
              />
              <path
                style={{ fill: "#546A79" }}
                d="M27.29,11.29C27.11,11.479,27,11.729,27,12c0,0.26,0.11,0.52,0.29,0.71C27.48,12.89,27.74,13,28,13
		c0.26,0,0.52-0.11,0.71-0.29C28.89,12.52,29,12.26,29,12c0-0.271-0.11-0.521-0.29-0.7C28.34,10.92,27.66,10.92,27.29,11.29z"
              />
              <path
                style={{ fill: "#546A79" }}
                d="M31.707,8.293c-0.391-0.391-1.023-0.391-1.414,0l-1,1c-0.391,0.391-0.391,1.023,0,1.414
		C29.488,10.902,29.744,11,30,11s0.512-0.098,0.707-0.293l1-1C32.098,9.316,32.098,8.684,31.707,8.293z"
              />
            </g>
            <line
              style={{
                fill: "none",
                stroke: "#AFB6BB",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeMiterlimit: 10,
              }}
              x1={13}
              y1={9}
              x2={13}
              y2={10}
            />
            <line
              style={{
                fill: "none",
                stroke: "#AFB6BB",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeMiterlimit: 10,
              }}
              x1={13}
              y1={13}
              x2={13}
              y2={14}
            />
            <line
              style={{
                fill: "none",
                stroke: "#AFB6BB",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeMiterlimit: 10,
              }}
              x1={13}
              y1={17}
              x2={13}
              y2={18}
            />
          </svg>
        </Link>
        <Link
          className="btn p-4 *:duration-100 *:hover:scale-125 *:hover:rotate-3"
          href={"/"}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 58.189 58.189"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: "#38454F" }}
              d="M29.095,39.268h9.446c1.701,0,3.346,0.609,4.638,1.716l9.128,7.828
	c0.611,0.524,1.505,0.614,2.184,0.183c9.496-6.01-2.022-29.728-4.305-34.034c-0.242-0.457-0.641-2.936-1.126-3.113l-7.676-2.791
	c-0.673-0.245-1.422-0.155-2.017,0.242c0,0-2.164,1.383-2.649,1.383h-8.425h-6.549c-0.485,0-2.921-1.383-2.921-1.383
	c-0.596-0.397-1.345-0.487-2.017-0.242L9.13,11.848c-0.486,0.177-0.884,2.656-1.126,3.113C5.721,19.267-5.797,42.985,3.699,48.995
	c0.68,0.43,1.574,0.34,2.184-0.183l9.128-7.828c1.292-1.107,2.937-1.716,4.638-1.716H29.095z"
            />
            <circle style={{ fill: "#546A79" }} cx="36.786" cy="30.268" r={4} />
            <circle style={{ fill: "#546A79" }} cx="13.786" cy="20.268" r={4} />
            <circle style={{ fill: "#EBBA16" }} cx="43.786" cy="16.268" r={2} />
            <circle style={{ fill: "#7383BF" }} cx="39.786" cy="20.268" r={2} />
            <circle style={{ fill: "#D75A4A" }} cx="47.786" cy="20.268" r={2} />
            <circle style={{ fill: "#61B872" }} cx="43.786" cy="24.268" r={2} />
            <path
              style={{ fill: "#AFB6BB" }}
              d="M31.786,11.712c0-0.192-0.019-0.38-0.054-0.561c-0.035-0.181-0.111-0.338-0.215-0.469
	c-1.171,0-2.08,0-2.479,0c-0.085,0.007-0.165,0.03-0.251,0.03c-0.087,0-0.167-0.022-0.251-0.03c-0.013,0-0.242,0-0.242,0h-2.247
	c-0.088,0.114-0.158,0.245-0.192,0.4c-0.087,0.398-0.094,0.827,0,1.271c0.248,1.17,1.225,2.113,2.404,2.314
	C30.148,14.989,31.786,13.542,31.786,11.712z"
            />
            <path
              style={{ fill: "#546A79" }}
              d="M27.286,27.921H24v-3.286c0-0.395-0.32-0.714-0.714-0.714h-2.571c-0.395,0-0.714,0.32-0.714,0.714
	v3.286h-3.286c-0.395,0-0.714,0.32-0.714,0.714v2.571c0,0.395,0.32,0.714,0.714,0.714H20v3.286c0,0.395,0.32,0.714,0.714,0.714
	h2.571c0.395,0,0.714-0.32,0.714-0.714v-3.286h3.286c0.395,0,0.714-0.32,0.714-0.714v-2.571C28,28.241,27.68,27.921,27.286,27.921z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
