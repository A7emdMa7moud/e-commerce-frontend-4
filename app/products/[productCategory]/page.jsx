"use client";
import ProductCard from "@/app/_components/productcard";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Page({ params }) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // For Next.js

  const [products, setProducts] = useState([]);
  const fetchProductsByCategory = useCallback(async (url, path) => {
    try {
      const res = await axios.get(`${url}/ecommerce/products/${path}`);
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      fetchProductsByCategory(backendUrl, params.productCategory);
    }
  }, [
    backendUrl,
    fetchProductsByCategory,
    params.productCategory,
    products.length,
  ]);
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-2 lg:gap-4 *:min-h-[10rem]">
      {products.map((e, i) => (
        <ProductCard key={i} e={e} />
      ))}
    </section>
  );
}
