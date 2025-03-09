"use client";

import React, { useEffect, useState } from "react";
import ProductSampleCard from "../ProductSampleCard";
import axios from "axios";
import { API_VERSION, BASE_URL } from "@/constants/baseUrl";

const AllProductsSection = ({ style }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const data = await axios.get(`${BASE_URL}/${API_VERSION}/products`);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className={style}>
      <div
        className={`${
          isLoading
            ? "flex items-center justify-center"
            : "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 lg:grid-cols-3"
        }`}
      >
        {products?.products &&
          products?.products?.map((product) => (
            <ProductSampleCard
              key={product.id}
              id={product.id}
              title={product.title}
              text={product.body}
              imageId={product.main_image}
            />
          ))}
        <div
          className={`${
            isLoading ? "block" : "hidden"
          } w-[40px] h-[40px] rounded-full border-4 border-black border-t-transparent animate-spin`}
        ></div>
      </div>
    </section>
  );
};

export default AllProductsSection;
