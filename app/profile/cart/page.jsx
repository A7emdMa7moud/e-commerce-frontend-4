"use client";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "@/app/_components/PageTitle";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  removeFromCart,
  resetCartState,
} from "@/app/_redux/features/cart/cartSlice";
import Link from "next/link";
import axios from "axios";
import {
  updateCustomer,
  updateProducts,
} from "@/app/_redux/features/order/orderSlice";

export default function Page() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const productsData = useSelector((state) => state.cart.items || []);
  const totalPrice = useSelector((state) => state.cart.totalPrice || 0);
  const quantity = useSelector((state) => state.cart.quantity || 0);
  const productsLenght = useSelector((state) => state.cart.productsLenght || 0);

  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);

  const products = [];
  const productObj = {
    name: "",
    price: 0,
    quantity: 0,
    totalPrice: 0,
    discount: 0,
    lastPrice: 0,
  };
  productsData.map((e) => {
    const newProduct = { ...productObj };
    newProduct.name = e.name;
    newProduct.price = e.price;
    newProduct.quantity = e.quantity;
    newProduct.totalPrice = e.price * e.quantity;
    newProduct.discount = (newProduct.totalPrice * (e.discount || 0)) / 100;
    newProduct.lastPrice = newProduct.totalPrice - newProduct.discount;
    products.push(newProduct);
  });
  const dispatch = useDispatch();
  const pushToCart = async (url) => {
    const cartData = {
      cart: [
        {
          products: productsData,
          totalPrice: totalPrice,
          quantity: quantity,
        },
      ],
    };
    await axios
      .put(`${url}/ecommerce/cart/${user.id}`, cartData)
      .then((res) => {
        // console.log(res.data.updatedUser);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <PageTitle title={"cart products"} />
      <br />
      {productsLenght > 0 ? (
        <>
          <div className="overflow-auto h-[71dvh] mx-auto rounded-xl">
            <table className="w-full bg-base-200 rounded-lg overflow-hidden text-left relative">
              <thead className="bg-main text-secondary-content text-sm lg:text-lg border-red-400">
                <tr className="*:p-2 *:py-4">
                  <th className="text-center">Id</th>
                  <th className="text-left">Name</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                  <th className="text-center">Control</th>
                </tr>
              </thead>
              <tbody className="hover:*:bg-base-300">
                {productsData.map((e, i) => {
                  return (
                    <tr
                      key={i}
                      className="rounded overflow-hidden text-sm *:px-0 *:py-2 lg:*:p-2"
                    >
                      <th className="text-center">{e.id}</th>
                      <td className="text-left">{e.name}</td>
                      <td className="text-left">{e.quantity}</td>
                      <td className="text-left">{e.price}</td>
                      <td className="flex justify-center items-center gap-1 *:p-1 lg:*:p-2 lg:gap-2 *:rounded-full *:transition *:ease-linear hover:*:bg-base-100">
                        <button
                          title="Increase product quantity"
                          onClick={() => {
                            dispatch(IncreaseQuantity(e.productId));
                          }}
                        >
                          ➕
                        </button>
                        <button
                          title="Decrease product quantity"
                          onClick={() => {
                            dispatch(DecreaseQuantity(e.productId));
                          }}
                        >
                          ➖
                        </button>
                        <button
                          title="Remove product from cart"
                          onClick={() => {
                            dispatch(removeFromCart(e.productId));
                          }}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <br />
          <div className="overflow-hidden flex justify-between items-center flex-wrap gap-2 ">
            <p className="capitalize tracking-wider text-lg">
              total price is <span className="text-main">{totalPrice}</span>{" "}
            </p>
            <div className="flex flex-row-reverse gap-4 items-center *:bg-secondary *:rounded *:text-secondary-content *:p-2 *:min-w-40 *:px-8 *:btn *:btn-md *:font-bold *:tracking-wider *:text-lg *:capitalize">
              <Link
                href={"/profile/delivery"}
                onClick={() => {
                  pushToCart(backendUrl).then(() => {
                    dispatch(updateProducts({ products }));
                    dispatch(
                      updateCustomer({
                        userId: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                      })
                    );
                  });
                }}
              >
                next
              </Link>
              <Link href={"/products"}>add more products</Link>
            </div>
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
