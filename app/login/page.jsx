"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import PageTitle from "../_components/PageTitle";
import { useDispatch } from "react-redux";
import { updateUserData } from "../_redux/features/user/userSlice";
import { updataCart } from "../_redux/features/cart/cartSlice";
import { addOrder } from "../_redux/features/orders/ordersSlice";
function Login() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userData = { email, password };
  const newLogin = async () => {
    try {
      const res = await axios.post(`${backendUrl}/login`, userData, {
        withCredentials: true, // Important to include cookies
      });
      // console.log("response => ", res.data);
      setEmail("");
      setPassword("");
      Swal.fire({
        position: "center",
        timer: 4000,
        showConfirmButton: true,
        confirmButtonColor: "#82bcf4",
        title: "Success",
        html: `<b>${res.data.user.name || "User"}</b> was login successfully`,
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
          orders = [],
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
          orders,
        };
        dispatch(updateUserData({ user: userSlice }));
        dispatch(addOrder(orders));
        dispatch(updataCart(cart[0]));
        window.location.href = "/";
      });
    } catch (error) {
      const errMsg = Object.values(error.response.data.errors.errors);
      localStorage.removeItem("JWT");
      localStorage.removeItem("persist:root");
      Swal.fire({
        position: "center",
        timer: 4000,
        showConfirmButton: true,
        confirmButtonColor: "#82bcf4",
        title: error.response.data.INVALID_CREDENTIALS.msg,
        html: `<b class="text-secondarytext">${errMsg}</b>`,
        icon: "error",
      });
    }
  };
  return (
    <section>
      <span className="flex justify-between items-center">
        <PageTitle title={"login"} />
        {/* <Link
          className="font-semibold tracking-wider capitalize"
          href="/company"
          target="_blank"
        >
          go to company
        </Link> */}
      </span>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newLogin();
          }}
          className="lg:w-[60%] sm:w-full mx-auto mt-[25dvh]"
        >
          <div className="*:outline-none flex flex-col *:p-3 *:px-4 mb-4 gap-4 *:bg-base-200 *:rounded *:placeholder:text-base-content/35 *:placeholder:font-semibold *:placeholder:tracking-wider *:text-slate-base *:font-semibold *:tracking-wider">
            <input
              type="email"
              name="email"
              className=""
              required={true}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              className=""
              required={true}
              minLength={8}
              maxLength={16}
              placeholder="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="grid grid-cols-2 gap-4 *:p-2 lg:*:text-lg *:rounded *:capitalize tracking-wider">
            <button
              className="btn bg-main text-maintext font-bold rounded"
              type="submit"
            >
              login
            </button>
            <Link
              className="btn bg-secondary text-maintext font-bold rounded"
              href={"/signup"}
            >
              i dont have an account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Login;
