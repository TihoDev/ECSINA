"use client";
import React, { useEffect, useState } from "react";
import ProductSampleCard from "../ProductSampleCard";
import { getAllProducts } from "@/services/products/getAllProducts";
import Pagination from "../UI/Pagination";
import { useSearchParams } from "next/navigation";

const AllProductsSection = ({ style }) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const category = searchParams.get("category_id");
  const page = searchParams.get("page") || "1";

  const fetchProducts = async (category, page) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getAllProducts(page, category);

      setProducts(data?.products || []);
      setPagination(data?.pagination || null);
    } catch (error) {
      setError(error.message || "An error occurred while fetching products.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(category, page);
  }, [category, page]);
  return (
    <section className={style}>
      <div
        className={`${
          isLoading
            ? "flex items-center justify-center"
            : "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 lg:grid-cols-3"
        }`}
      >
        {error && (
          <div className="col-span-full text-center text-red-500 py-4">
            {error}
          </div>
        )}

        {!isLoading && !error && products?.products?.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-4">
            محصولی یافت نشد
          </div>
        )}

        {!isLoading &&
          products?.products &&
          products.products.map((product) => (
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

      {!isLoading &&
        products?.pagination &&
        products.pagination.last_page > 1 && (
          <div className="mt-16 flex justify-center">
            <Pagination pagination={products.pagination} />
          </div>
        )}
    </section>
  );
};

export default AllProductsSection;
