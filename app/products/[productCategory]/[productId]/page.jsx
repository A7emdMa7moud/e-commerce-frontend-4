"use client";
import ProductCard from "@/app/_components/productcard";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Page({ params }) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [product, setProduct] = useState([]);

  const fetchProduct = useCallback(async (url, pathCategory, pathProducts) => {
    try {
      const res = await axios.get(
        `${url}/ecommerce/products/${pathCategory}/${pathProducts}`
      );
      const data = res.data.data;
      setProduct(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  }, []);

  useEffect(() => {
    fetchProduct(backendUrl, params.productCategory, params.productId);
  }, [backendUrl, fetchProduct, params.productCategory, params.productId]);

  return (
    <section>
      {product.map((e, i) => {
        return <ProductCard key={i} e={e} />;
      })}
    </section>
  );
}
