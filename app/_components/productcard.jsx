"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../_redux/features/cart/cartSlice";
export default function ProductCard({ e }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isInCart = (ID) => items.some((item) => item.productId === ID);
  return (
    <div className="bg-base-200 flex flex-col justify-between shadow p-2 lg:p-4 overflow-hidden rounded">
      <div>
        <h1 className="font-bold text-neutral-500 text-sm md:text-lg lg:text-xl mb-2 capitalize h-14">
          {e.name}
          <br />
          {e.newProduct ? (
            <span className="animate-pulse lg:text-xs text-main text-[.5rem]">
              new
            </span>
          ) : null}
        </h1>
        <div className="border-l-4 border-base-300 pl-2 *:text-xs lg:*:text-lg">
          <p className="font-medium capitalize tracking-wider">
            {e.inStock === "true" ? (
              <span className="text-green-500">in stock</span>
            ) : (
              <span className="text-red-500">out stock</span>
            )}
          </p>
          <p className="text-neutral-500 font-medium text-sm capitalize tracking-wider">
            quantity <span className="">{e.quantity}</span>
          </p>
          <p className="text-red-500 animate-pulse font-medium text-sm capitalize tracking-wider">
            discount {e.discount}%
          </p>
          <p className="text-neutral-500 font-medium text-sm capitalize tracking-wider">
            price <span className="text-main">{e.price}$</span>
          </p>
        </div>
      </div>
      <br />
      <div className="flex justify-between items-center *:btn-xl lg:*:text-xl *:shadow-sm *:bg-base-300 *:text-xs *:text-neutral-500 *:rounded-sm *:p-1 *:font-bold *:capitalize tracking-wider">
        <Link href={`http://localhost:3000/products/${e.category}/${e._id}`}>
          review
        </Link>
        {e.inStock === "true" ? (
          <>
            {isInCart(e._id) ? null : (
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      productId: e._id,
                      name: e.name,
                      price: e.price,
                      discount: e.discount,
                      category: e.category,
                    })
                  );
                }}
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-6 lg:w-6" viewBox="0 0 48 48">
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
              </button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
