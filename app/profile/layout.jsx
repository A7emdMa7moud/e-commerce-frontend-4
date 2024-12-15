import PageTitle from "../_components/PageTitle";
import Link from "next/link";
export default function Layout({ children }) {
  // const value = true;
  return (
    <section>
      <div className="lg:grid lg:grid-cols-5 gap-8 min-h-[90dvh]">
        <div className="col-span-1 lg:flex gap-0 lg:flex-col">
          <PageTitle title={"profile"} />
          <br />
          {/* <ul className="steps steps-vertical *:capitalize *:tracking-wider *:font-semibold">
            <li
              className={`step ${
                value == true ? console.log("t") : console.log("n")
              }`}
            >
              check cart
            </li>
            <li className="step step-neutral">delivery details</li>
            <li className="step">payment and details</li>
            <li className="step">confirm</li>
          </ul>
          <br /> */}
          <ul className="grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-4 *:p-4 *:bg-base-200 hover:*:bg-base-300 *:rounded-lg *:text-maintext *:text-xs md:*:text-sm *:font-bold *:tracking-wider *:capitalize">
            <Link href={"/profile"}>my orders</Link>
            <Link href={"/profile/cart"}>cart</Link>
            <Link href={"/profile/delivery"}>delivery</Link>
            <Link href={"/profile/details"}>details</Link>
            <Link href={"/profile/order"}>order</Link>
          </ul>
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </section>
  );
}
