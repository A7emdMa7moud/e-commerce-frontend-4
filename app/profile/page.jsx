"use client";

import PageTitle from "@/app/_components/PageTitle";
import Link from "next/link";
import { useSelector } from "react-redux";
import DeliveryProgress from "../_components/DeliveryProgress";

export default function Page() {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);
  return (
    <section className="min-h-[71dvh]">
      <div className="flex justify-between items-center">
        <PageTitle title={"my orders"} />
      </div>
      <br />
      <div className="overflow-auto sm:min-h-[53dvh] lg:min-h-[76dvh] mx-auto rounded-lg flex flex-col justify-center gap-4">
        {orders.map((e, i) => {
          return (
            <div
              key={i}
              className="bg-base-200 p-2 rounded-lg relative flex flex-col gap-4"
            >
              <div className="flex justify-between text-sm lg:*:text-lg *:p-2 *:font-bold *:tracking-wider">
                <p>{i + 1}</p>
                <p className="text-secondary">{e.totalPrice} LE</p>
              </div>
              <DeliveryProgress
                orderDate={e.orderDate}
                deliveryDate={e.deliveryDate}
              />
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-2 border-base-100"
              >
                <div className="collapse-title text-lg lg:text-xl font-medium tracking-wider">
                  Products {e.quantity}
                </div>
                <div
                  key={i}
                  className="collapse-content px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 *:p-2 *:bg-base-100 *:border-2 *:border-base-100 *:rounded-lg"
                >
                  {e.products.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="text-sm capitalize *:tracking-wider relative"
                      >
                        <p className="text-lg mb-1">{e.name}</p>
                        <span className="absolute top-2 right-2 font-semibold text-secondary">
                          {e.quantity}
                        </span>
                        <div className="*:pl-2 *:grid *:grid-cols-2 lg:*:grid-cols-3 *:gap-2">
                          <div>
                            <p className="col-span-1">price</p>
                            <p className="col-span-1 lg:col-span-2">
                              {e.price} LE
                            </p>
                          </div>
                          <div>
                            <p className="col-span-1">discount</p>
                            <p className="col-span-1 lg:col-span-2">
                              {e.discount} LE
                            </p>
                          </div>
                          <div>
                            <p className="col-span-1">lastPrice</p>
                            <p className="col-span-1 lg:col-span-2 font-bold">
                              {e.lastPrice} LE
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div className="overflow-hidden flex justify-between items-center">
        <p className="capitalize pl-4 tracking-wider text-lg">
          {/* Add other order display components here */}
        </p>
        <div className="flex flex-row-reverse gap-4 items-center *:bg-secondary *:rounded *:text-secondary-content *:p-2 lg*:min-w-40 *:px-8 *:btn *:btn-md *:font-bold *:tracking-wider *:text-sm lg:*:text-lg *:capitalize">
          <Link href={"/products"}>view more products</Link>
        </div>
      </div>
    </section>
  );
}
