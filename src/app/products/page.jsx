"use client";

import { useEffect, useState, Suspense } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import ProductAside from "@/components/Aside/ProductAside";
import AllProductsSection from "@/components/allProductsSection/AllProductsSection";
import HeaderPageTwo from "@/components/Header/HeaderPageTwo";
import { getAllCategories } from "@/services/categories/getAllCategories";

const ProductAsideWrapper = ({ style, data }) => {
  return (
    <Suspense fallback={<div>Loading sidebar...</div>}>
      <ProductAside style={style} data={data} />
    </Suspense>
  );
};

function page() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getAllCategories();

      if (error) {
        setError(error);
      } else {
        setCategories(data.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeaderPageTwo />
      <main>
        <div className="container">
          <section>
            <SearchBar />
          </section>
          <section className="pt-6 mb-8 grid grid-cols-1 lg:gap-x-12 lg:grid-cols-4">
            <ProductAsideWrapper
              style="col-span-1 hidden lg:block min-w-[190px]"
              data={categories}
            />
            <Suspense>
              <AllProductsSection style="col-span-3" />
            </Suspense>
          </section>
          {/* show toast */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default page;
