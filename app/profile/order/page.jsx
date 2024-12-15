"use client";

import PageTitle from "@/app/_components/PageTitle";
import { resetCartState } from "@/app/_redux/features/cart/cartSlice";
import {
  resetOrderState,
  updateDiscount,
  updateLastPrice,
  updateTotalPrice,
} from "@/app/_redux/features/order/orderSlice";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Order() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const order = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);
  const productsLenght = useSelector((state) => state.cart.productsLenght || 0);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState();
  const [lastPrice, setLastPrice] = useState();
  const [discount, setDiscount] = useState();

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const createOrder = async (url) => {
    await axios
      .post(`${url}/ecommerce/admin/orders`, order)
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "center",
          timer: 4000,
          showConfirmButton: true,
          confirmButtonColor: "#82bcf4",
          title: "Success",
          html: `<b>your order
           </b> was created successfully`,
          icon: "success",
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch((rej) => {
        // console.log(rej);
      });
  };
  const PostOrderAndResetCart = async (url) => {
    const orderData = {
      order: [
        {
          products: order.products,
          totalPrice: order.lastPrice,
          phone: order.customer.phone,
          quantity: cart.quantity,
          deliveryDate: order.deliveryDate,
        },
      ],
    };

    await axios
      .put(`${url}/ecommerce/order/${order.customer.userId}`, orderData)
      .then((res) => {
        // console.log("Order posted successfully:", res.data);

        createOrder(backendUrl);
        dispatch(resetCartState());
        dispatch(resetOrderState());
      })
      .catch((err) => {
        // console.error(
        //   "Failed to post order:",
        //   err.response?.data || err.message
        // );
      });
  };

  const products = Array.from(order.products);
  useEffect(() => {
    const tP = order.products.reduce(
      (sum, product) => sum + product.totalPrice,
      0
    );
    setTotalPrice(tP);
    const totalPrice = order.products.reduce(
      (sum, product) => sum + product.lastPrice,
      0
    );
    setLastPrice(totalPrice);
    const discount = order.products.reduce(
      (sum, product) => sum + product.discount,
      0
    );
    setDiscount(discount);
    dispatch(updateTotalPrice(tP));
    dispatch(updateDiscount(discount));
    dispatch(updateLastPrice(lastPrice));
  }, [dispatch, lastPrice, order.products]);
  return (
    <section className="w-full">
      <PageTitle title={"confirm order"} />
      <br />
      {productsLenght > 0 ? (
        <>
          <div className="h-[71dvh] grid grid-cols-5 gap-4 rounded-xl overflow-hidden">
            <div className="col-span-3 sticky top-0 z-10 flex flex-col gap-4">
              <div className="p-4 bg-base-200 rounded-lg">
                <p className="text-2xl font-bold tracking-wider capitalize mb-2">
                  your info
                </p>
                <div className="flex flex-col *:grid *:grid-cols-7 *:gap-4">
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">name</p>
                    <p className="col-span-4">{order.customer.name}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">email</p>
                    <p className="col-span-4">{order.customer.email}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">phone</p>
                    <p className="col-span-4">{order.customer.phone}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-base-200 rounded-lg">
                <p className="text-2xl font-bold tracking-wider capitalize mb-2">
                  your address
                </p>
                <div className="flex flex-col *:grid *:grid-cols-7 *:gap-4">
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">country</p>
                    <p className="col-span-4">
                      {order.shippingAddress.country}
                    </p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">city</p>
                    <p className="col-span-4">{order.shippingAddress.city}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">state</p>
                    <p className="col-span-4">{order.shippingAddress.state}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">street</p>
                    <p className="col-span-4">{order.shippingAddress.street}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">postal code</p>
                    <p className="col-span-4">
                      {order.shippingAddress.zipCode}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-base-200 rounded-lg">
                <p className="text-2xl font-bold tracking-wider capitalize mb-2">
                  payment and details
                </p>
                <div className="flex flex-col *:grid *:grid-cols-7 *:gap-4">
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">paymeny method</p>
                    <p className="col-span-4">{order.paymentMethod}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">customer notes</p>
                    <p className="col-span-4">{order.customerNotes}</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">delivery date</p>
                    <p className="col-span-4">
                      {formatDate(order.deliveryDate)}
                    </p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">total price</p>
                    <p className="col-span-4 font-bold">
                      {order.totalPrice} LE
                    </p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">discount</p>
                    <p className="col-span-4 font-bold">{order.discount} LE</p>
                  </div>
                  <div className="*:tracking-wider *:capitalize">
                    <p className="col-span-3">last price</p>
                    <p className="col-span-4 text-green-500 font-bold">
                      {order.lastPrice} LE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 overflow-auto flex flex-col gap-4 *:bg-base-200 *:p-4 *:rounded">
              {products.map((e, i) => {
                return (
                  <div key={i} className="relative">
                    <span className="absolute top-4 right-4">{e.quantity}</span>
                    <p className="font-semibold tracking-wider text-lg">
                      {e.name}
                    </p>
                    <p className="pl-2 font-semibold tracking-wider">
                      price{"  "}
                      <span className="font-bold text-secondarytext">
                        {e.price}
                      </span>
                    </p>
                    <p className="pl-2 font-semibold tracking-wider">
                      discount{"  "}
                      <span className="font-bold text-secondarytext">
                        {e.discount}
                      </span>
                    </p>
                    <p className="pl-2 font-semibold tracking-wider">
                      last price{"  "}
                      <span className="font-bold text-green-500">
                        {e.lastPrice}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <div className="flex flex-row-reverse gap-4 items-center *:bg-secondary *:rounded *:text-secondary-content *:p-2 *:w-40 *:btn *:btn-md *:font-bold *:tracking-wider *:text-lg *:capitalize">
            <button
              onClick={() => {
                PostOrderAndResetCart(backendUrl);
              }}
            >
              save order
            </button>
            <Link href={"/profile/details"}>back</Link>
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
