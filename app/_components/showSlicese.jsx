"use client";

import { useSelector } from "react-redux";

export default function ShowSlices() {
  const userSlice = useSelector((state) => state.user);
  const cartSlice = useSelector((state) => state.cart);
  const orderSlice = useSelector((state) => state.order);
  const user = () => {
    console.log(userSlice);
  };
  const cart = () => {
    console.log(cartSlice);
  };
  const order = () => {
    console.log(orderSlice);
  };
  return (
    <div className="fixed top-3 left-[50%] z-50 translate-x-[-50%] flex justify-center gap-4 *:border-2 *:border-slate-400 *:p-2 *:px-6 *:uppercase *:font-bold *:tracking-wider *:rounded-lg">
      <button
        onClick={() => {
          user();
        }}
      >
        user
      </button>
      <button
        onClick={() => {
          cart();
        }}
      >
        cart
      </button>
      <button
        onClick={() => {
          order();
        }}
      >
        order
      </button>
    </div>
  );
}
