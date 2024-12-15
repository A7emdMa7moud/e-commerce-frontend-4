"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../_components/productcard";

export default function Page() {
  const [products, setProducts] = useState([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js
  async function fetchProducts(url) {
    await axios.get(`${url}/ecommerce/products`).then((res) => {
      setProducts(res.data.data);
    });
  }
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts(backendUrl);
    }
  }, [backendUrl, products.length]);
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 *:min-h-[10rem]">
      {products.map((e, i) => {
        return <ProductCard key={i} e={e} />;
      })}
    </section>
  );
}
