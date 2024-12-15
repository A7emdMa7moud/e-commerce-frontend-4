"use client";

import PageTitle from "@/app/_components/PageTitle";
import {
  updateCustomer,
  updateCustomerNotes,
  updateDeliveryDate,
  updatePaymentMethod,
  updatePhone,
} from "@/app/_redux/features/order/orderSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Details() {
  const userData = useSelector((state) => state.user);
  const productsLenght = useSelector((state) => state.cart.productsLenght || 0);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const inputStyle =
    "outline-none p-3 px-4 bg-base-200 rounded placeholder:text-base placeholder:font-semibold placeholder:tracking-wider text-slate-300 font-semibold tracking-wider";
  const [phone, setPhone] = useState(order.customer.phone || "");
  const [paymentMethod, setPaymentMethod] = useState(
    order.paymentMethod || "credit card"
  );
  const [customer, setCustomer] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
  });

  const [notes, setNotes] = useState(order.customerNotes || "");
  const [date, setDate] = useState(order.deliveryDate || "");
  const [dayDelivery, setDayDelivery] = useState("1");

  const getDefaultDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + Number(dayDelivery));
    today.setHours(0, 0, 0, 0);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`; // ISO-compatible format
  };

  const d = new Date(getDefaultDate());
  const isoDate = d.toISOString();

  useEffect(() => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      userId: userData.id,
      name: userData.name,
      email: userData.email,
    }));
    setPhone(order.customer.phone || "");
  }, [order.customer.phone, userData.email, userData.name, userData.id]);
  return (
    <section>
      <PageTitle title={"Details"} />
      <br />
      {productsLenght > 0 ? (
        <>
          <div className="overflow-auto h-[71dvh] mx-auto rounded-xl">
            <div className="flex flex-col h-full w-full justify-center items-center gap-4 *:w-full *:flex *:flex-col *:lg:flex-row *:gap-1 *:capitalize *:tracking-wider *:*:w-full lg:*:*:w-[50%] *:*:mx-auto">
              <div>
                <label htmlFor="phone">
                  enter your phone <span className="text-red-500">*</span>
                </label>
                <input
                  value={phone}
                  type="text"
                  id="phone"
                  className={inputStyle}
                  placeholder="what is your phone ?"
                  required={true}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="paymentMethod">
                  payment method <span className="text-red-500">*</span>
                </label>
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  className={inputStyle}
                  value={paymentMethod}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                >
                  <option value={"credit card"}>credit card</option>
                  <option value={"payPal"}>payPal</option>
                  <option value={"cash on delivery"}>cash on delivery</option>
                </select>
              </div>
              <div>
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input
                  id="deliveryDate"
                  value={getDefaultDate()}
                  disabled
                  type="text"
                  className={inputStyle}
                />
              </div>
              <div>
                <p>delivery after</p>
                <ul className="text-sm font-medium *:rounded-lg flex justify-between gap-4 *:bg-base-200">
                  <div className="w-full flex items-center p-1 ps-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value="1"
                      name="list-radio"
                      checked={dayDelivery === "1"}
                      onChange={(e) => {
                        setDayDelivery(e.target.value);
                      }}
                      className="outline-none p-3 px-4 rounded-full bg-gray-100 border-gray-300 focus:ring-secondary"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ms-2 text-sm font-medium"
                    >
                      one day
                    </label>
                  </div>
                  <div className="w-full flex items-center p-1 ps-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value="2"
                      name="list-radio"
                      checked={dayDelivery === "2"}
                      onChange={(e) => {
                        setDayDelivery(e.target.value);
                      }}
                      className="outline-none p-3 px-4 rounded-full bg-gray-100 border-gray-300 focus:ring-secondary"
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ms-2 text-sm font-medium"
                    >
                      two days
                    </label>
                  </div>
                  <div className="w-full flex items-center p-1 ps-3">
                    <input
                      id="horizontal-list-radio-military"
                      type="radio"
                      value="3"
                      name="list-radio"
                      checked={dayDelivery === "3"}
                      onChange={(e) => {
                        setDayDelivery(e.target.value);
                      }}
                      className="outline-none p-3 px-4 rounded-full bg-gray-100 border-gray-300 focus:ring-secondary"
                    />
                    <label
                      htmlFor="horizontal-list-radio-military"
                      className="w-full py-3 ms-2 text-sm font-medium"
                    >
                      three days
                    </label>
                  </div>
                </ul>
              </div>
              <div>
                <label htmlFor="customerNotes">Customer Notes</label>
                <textarea
                  id="customerNotes"
                  value={notes}
                  placeholder="what is your notes on deliverying ?"
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-row-reverse gap-4 items-center *:bg-secondary *:rounded *:text-secondary-content *:p-2 *:w-40 *:btn *:btn-md *:font-bold *:tracking-wider *:text-lg *:capitalize">
            <Link
              onClick={() => {
                dispatch(updateCustomer(customer));
                dispatch(updatePaymentMethod(paymentMethod));
                dispatch(updateCustomerNotes(notes));
                dispatch(updatePaymentMethod(paymentMethod));
                dispatch(updatePhone(phone));
                dispatch(updateDeliveryDate(isoDate));
              }}
              href={"/profile/order"}
            >
              next
            </Link>
            <Link href={"/profile/delivery"}>back</Link>
          </div>
        </>
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
