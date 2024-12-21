"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  removeFromCart,
} from "../_redux/features/cart/cartSlice";
import axios from "axios";
function Cart() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js
  const productsCart = useSelector((state) => state.cart.items || []);
  const totalPrice = useSelector((state) => state.cart.totalPrice || 0);
  const quantity = useSelector((state) => state.cart.quantity || 0);
  const productsLenght = useSelector((state) => state.cart.productsLenght || 0);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const pushToCart = async () => {
    const cartData = {
      cart: [
        {
          products: productsCart,
          totalPrice: totalPrice,
          quantity: quantity,
        },
      ],
    };
    await axios
      .put(`${backendUrl}/ecommerce/cart/${user.id}`, cartData)
      .then((res) => {
        // console.log(res.data.updatedUser);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="dropdown dropdown-content">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-square bg-base-300 shadow-none"
      >
        <svg width={40} height={40} viewBox="0 0 48 48">
          <g id="Trolley">
            <path
              className="cls-1"
              d="M41 38H12a4 4 0 0 1-4-4c0-3.85 5-5.07 5-3a1 1 0 0 1-1 1 2 2 0 0 0 0 4h29a1 1 0 0 1 0 2z"
              style={{ fill: "#919191" }}
            />
            <path
              d="M41.86 37.5c-.4-.71 1.79-.5-29.86-.5a2 2 0 0 1-1.93-2.5A2 2 0 0 0 12 36h29a1 1 0 0 1 .86 1.5z"
              style={{ fill: "#7c7d7d" }}
            />
            <path
              className="cls-1"
              d="M8 11.14 7.13 5H2a1 1 0 0 1 0-2h6a1 1 0 0 1 1 .86l1 7a1 1 0 0 1-2 .28z"
              style={{ fill: "#919191" }}
            />
            <path
              d="M47 13c-4.08 19.36-3.4 16.15-4 19H11L8 11z"
              style={{ fill: "#dad7e5" }}
            />
            <path
              d="m47 13-3.58 17H22.2a6 6 0 0 1-5.94-5.15l-1.93-13.53z"
              style={{ fill: "#edebf2" }}
            />
            <path
              className="cls-5"
              d="M19 43a3 3 0 1 1-5.56-1.56A3 3 0 0 1 19 43z"
              style={{ fill: "#374f68" }}
            />
            <path
              className="cls-6"
              d="M17.56 45.56a3 3 0 0 1-4.12-4.12 3 3 0 0 1 4.12 4.12z"
              style={{ fill: "#425b72" }}
            />
            <circle
              className="cls-6"
              cx="34"
              cy="43"
              r="3"
              style={{ fill: "#425b72" }}
            />
            <path
              className="cls-5"
              d="M34 40a3 3 0 0 0-2.55 1.45 3 3 0 0 1 4.1 4.1A3 3 0 0 0 34 40z"
              style={{ fill: "#374f68" }}
            />
          </g>
        </svg>
        <span className="absolute font-extrabold top-[50%] left-[50%] translate-x-[-10%] translate-y-[-70%] border-1  text-main">
          {productsLenght}
        </span>
      </div>
      <ul className="border-base-100 lg:menu-md menu-sm dropdown-content w-[93dvw] fixed right-[-220%] lg:w-[50dvw] bg-base-200 rounded-2xl p-2 mt-5 shadow">
        {productsCart.length >= 1 ? (
          productsCart.map((e, i) => (
            <li
              key={i}
              className="*:font-medium *:tracking-wider text-neutral-500 grid grid-cols-12 items-center gap-2 lg:gap-2 *:overflow-hidden *:whitespace-nowrap *:text-xs lg:*:text-sm"
            >
              <p className="col-span-1">{e.id}</p>
              <p className="col-span-5 text-ellipsis">{e.name}</p>

              <button
                title="Increase product quantity"
                onClick={() => {
                  dispatch(DecreaseQuantity(e.productId));
                }}
                className="col-span-1 mx-auto transition p-1 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 5L19 12H7.37671M20 16H8L6 3H3M11.5 7L13.5 9M13.5 9L15.5 7M13.5 9V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#f5c002"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                title="Decrease product quantity"
                onClick={() => {
                  dispatch(IncreaseQuantity(e.productId));
                }}
                className="col-span-1 mx-auto transition p-1 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 5L19 12H7.37671M20 16H8L6 3H3M13.5 3V9M13.5 3L11.5 5M13.5 3L15.5 5M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#22c55e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                title="Remove product from cart"
                onClick={() => {
                  dispatch(removeFromCart(e.productId));
                }}
                className="col-span-1 mx-auto transition p-1 rounded-lg"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 5L19 12H7.37671M20 16H8L6 3H3M11 3L13.5 5.5M13.5 5.5L16 8M13.5 5.5L16 3M13.5 5.5L11 8M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="col-span-1 text-center">{e.quantity}</p>
              <p className="col-span-2 font-bold">{e.price}</p>
            </li>
          ))
        ) : (
          <div className="p-2 font-medium text-sm tracking-wide text-neutral-500">
            you don{"'"}t have any products in the cart!{" "}
            <Link
              onClick={pushToCart}
              className="text-main underline"
              href={"/products"}
            >
              view products
            </Link>
            .
          </div>
        )}
        {productsLenght > 0 ? <br /> : null}
        {productsLenght > 0 ? (
          <div className="flex flex-row-reverse gap-4 items-center lg:px-4">
            <Link
              href={"/profile/cart"}
              className="flex justify-center items-center px-2 py-1 bg-secondary rounded text-secondary-content p-2 w-40 btn btn-sm font-bold tracking-wider text-sm lg:text-lg capitalize"
              onClick={pushToCart}
            >
              confirm order
            </Link>
            <p className="lg:px-4 capitalize tracking-wider text-sm lg:font-medium text-neutral-500">
              total price{" "}
              <span className="font-bold text-green-500">{totalPrice} LE</span>
            </p>
          </div>
        ) : null}
      </ul>
    </div>
  );
}

export default Cart;
