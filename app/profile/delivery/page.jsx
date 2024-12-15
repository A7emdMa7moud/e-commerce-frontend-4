"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "@/app/_components/PageTitle";
import Link from "next/link";
import { updateShippingAddress } from "@/app/_redux/features/order/orderSlice";
import axios from "axios";

export default function Delivery() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const inputStyle =
    "outline-none p-3 px-4 bg-base-200 rounded placeholder:text-base placeholder:font-semibold placeholder:tracking-wider text-slate-300 font-semibold tracking-wider";
  const dispatch = useDispatch();
  const productsLenght = useSelector((state) => state.cart.productsLenght || 0);
  const shippingAddressFromSlice = useSelector(
    (state) => state.order.shippingAddress
  );
  const [isAddress, setIsAddress] = useState(false);
  const [sAO, setSAO] = useState({
    country: "",
    city: "",
    state: "",
    street: "",
    zipCode: "",
  });

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { country, city, state, street, zipCode } = e.target.elements;

    const updatedAddress = {
      country: country.value,
      city: city.value,
      state: state.value,
      street: street.value,
      zipCode: zipCode.value,
    };
    setSAO(updatedAddress);

    dispatch(updateShippingAddress({ data: updatedAddress }));

    if (shippingAddressFromSlice) {
      setIsAddress(true);
      // axios
      //   .put(`${backendUrl}/ecommerce/order/${"one"}`, {
      //     shippingAddress,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(updateShippingAddress({ data: null }));
  };
  useEffect(() => {
    if (shippingAddressFromSlice) {
      setCity(shippingAddressFromSlice.city || "");
      setState(shippingAddressFromSlice.state || "");
      setStreet(shippingAddressFromSlice.street || "");
      setPostalCode(shippingAddressFromSlice.zipCode || "");
    }
  }, [shippingAddressFromSlice]);
  console.log(productsLenght);
  return (
    <section>
      <PageTitle title={"delivery details"} />
      <br />
      {productsLenght > 0 ? (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          onReset={(e) => {
            handleReset(e);
          }}
        >
          <div className="overflow-auto h-[71dvh] mx-auto rounded-xl">
            <div className="flex flex-col h-full w-full justify-center items-center gap-4 *:w-full *:flex *:flex-col *:lg:flex-row *:gap-1 *:capitalize *:tracking-wider *:*:w-full lg:*:*:w-[50%] *:*:mx-auto">
              <div>
                <label htmlFor="country">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className={inputStyle}
                  disabled={true} // This input is intentionally read-only
                  value={"Egypt"} // Predefined value
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  id="city"
                  className={inputStyle}
                  value={city} // Controlled value
                  onChange={(e) => setCity(e.target.value)} // onChange handler to update state
                >
                  <option disabled value={"Where Are You"}>
                    Where are you?
                  </option>
                  <option>Cairo</option>
                  <option>Alexandria</option>
                  <option>Giza</option>
                  <option>Luxor</option>
                  <option>Aswan</option>
                </select>
              </div>
              <div>
                <label htmlFor="state">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className={inputStyle}
                  placeholder="Which state?"
                  required={true}
                  value={state} // Controlled value
                  onChange={(e) => setState(e.target.value)} // onChange handler
                />
              </div>
              <div>
                <label htmlFor="street">
                  Street <span className="text-red-500">*</span>
                </label>
                <input
                  value={street} // Controlled value
                  type="text"
                  name="street"
                  id="street"
                  className={inputStyle}
                  placeholder="Your street?"
                  required={true}
                  onChange={(e) => setStreet(e.target.value)} // onChange handler
                />
              </div>
              <div>
                <label htmlFor="zipCode">
                  Postal Code <span className="text-red-500">*</span>
                </label>
                <input
                  value={postalCode} // Controlled value
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  className={inputStyle}
                  placeholder="Postal code?"
                  required={true}
                  onChange={(e) => setPostalCode(e.target.value)} // onChange handler
                />
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-row-reverse gap-4 items-center *:bg-secondary *:rounded *:text-secondary-content *:p-2 *:w-40 *:btn *:btn-md *:font-bold *:tracking-wider *:text-lg *:capitalize">
            {isAddress == true ? (
              <Link href={"/profile/details"}>next</Link>
            ) : (
              <button type="submit">update data</button>
            )}

            <Link href={"/profile/cart"}>back</Link>
          </div>
        </form>
      ) : (
        <>
          <br />
          <div className="p-2 font-medium text-sm tracking-wide text-neutral-500">
            you don{"'"}t have any products in the cart!{" "}
            <Link
              onClick={() => {
                resetCartState();
                // pushToCart();
              }}
              className="text-main underline"
              href={"/products"}
            >
              view products
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
