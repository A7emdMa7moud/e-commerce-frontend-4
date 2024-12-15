"use client";
import Link from "next/link";
import PageTitle from "../_components/PageTitle";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js

  const [categorys, setCategorys] = useState([]);
  async function fetchCategorys(url) {
    try {
      const response = await axios.get(`${url}/ecommerce/categorys`);
      setCategorys(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }
  useEffect(() => {
    if (categorys.length === 0) {
      fetchCategorys(backendUrl);
    }
  }, [backendUrl, categorys.length]);
  return (
    <div>
      <PageTitle title={"products"} />
      <br />
      <nav>
        <div
          id="ul"
          className="grid grid-cols-2 gap-2 lg:gap-4 lg:*:text-lg lg:grid-cols-4 *:text-xs *:font-bold *:tracking-wider *:bg-base-200 *:capitalize *:rounded *:p-2 *:px-4 *:text-neutral-500"
        >
          <Link href={`/products`}>all</Link>
          {categorys.map((category, i) => (
            <Link key={i} href={`/products/${category.name}`}>
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
      <br />
      {children}
    </div>
  );
}
