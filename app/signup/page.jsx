"use client";
import { useState } from "react";
import PageTitle from "../_components/PageTitle";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { updateUserData } from "../_redux/features/user/userSlice";
import { useDispatch } from "react-redux";
export default function Signup() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  //
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [theme, setTheme] = useState("dark");
  const dispatch = useDispatch();
  const userData = {
    name: username,
    email,
    password,
    gender,
    age,
    phone,
    theme,
  };
  const newSignup = async (url) => {
    console.log(`${url}/signup`);
    try {
      const res = await axios.post(`${url}/signup`, userData, {
        withCredentials: true, // Important to include cookies
      });
      // console.log("response => ", res.data);
      setUsername("");
      setEmail("");
      setPassword("");
      setGender("");
      setAge("");
      setPhone("");
      setTheme("dark");
      Swal.fire({
        position: "center",
        timer: 4000,
        showConfirmButton: true,
        confirmButtonColor: "#82bcf4",
        title: "Success",
        html: `<b>${res.data.user.name || "User"}</b> was created successfully`,
        icon: "success",
      }).then(() => {
        localStorage.setItem("JWT", true);
        const {
          id,
          name,
          email,
          gender,
          age,
          phone,
          theme,
          cart = [],
          order = [],
        } = res.data.user;
        const userSlice = {
          id,
          name,
          email,
          age,
          gender,
          phone,
          theme,
          cart,
          order,
        };
        dispatch(updateUserData({ user: userSlice }));
        window.location.href = "/";
      });
    } catch (error) {
      console.error("error => ", error);
      localStorage.removeItem("JWT");
      localStorage.removeItem("persist:root");
      // Show error notification with error message if available
      Swal.fire({
        position: "center",
        timer: 2000,
        showConfirmButton: false,
        confirmButtonColor: "#82bcf4",
        title: "Error",
        text: error.response?.data?.msg || "An error occurred",
        icon: "error",
      });
    }
  };
  return (
    <section>
      <PageTitle title={"signup"} />
      <div className="h-[83dvh] flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newSignup(backendUrl);
          }}
          className="lg:w-[60%] sm:w-full"
        >
          <div className="*:outline-none flex flex-col *:p-3 *:px-4 mb-4 gap-4 *:bg-base-200 *:rounded *:placeholder:text-base-content/35 *:placeholder:font-semibold *:placeholder:tracking-wider *:text-slate-base *:font-semibold *:tracking-wider">
            <input
              type="text"
              name="username"
              required={true}
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              required={true}
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              required={true}
              minLength={8}
              maxLength={16}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <select onChange={(e) => setGender(e.target.value)} value={gender}>
              <option value={"female"}>Female</option>
              <option value={"male"}>Male</option>
            </select>
            <input
              type="number"
              name="age"
              min="1"
              required={true}
              max="120"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              name="phone"
              min="1"
              required={true}
              max="120"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <select onChange={(e) => setTheme(e.target.value)} value={theme}>
              <option value={"dark"}>dark</option>
              <option value={"light"}>light</option>
            </select>
          </div>
          <br />
          <div className="grid grid-cols-2 gap-4 *:p-2 lg:*:text-lg *:rounded *:capitalize tracking-wide">
            <button
              className="flex justify-center items-center btn bg-main text-maintext  font-bold rounded"
              type="submit"
            >
              sginup
            </button>
            <Link
              className="btn bg-secondary text-maintext font-bold rounded"
              href={"/login"}
            >
              i have an account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
