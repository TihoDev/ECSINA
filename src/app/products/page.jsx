"use client";

import { Suspense } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import ProductAside from "@/components/Aside/ProductAside";
import HeaderPageTwo from "@/components/Header/HeaderPageTwo";
import AllProducts from "@/components/allProductsSection/AllProducts";
import useCategories from "@/hooks/useCategories";

const ProductAsideWrapper = ({ style, data }) => (
  <Suspense fallback={<div>در حال بارگذاری نوار کناری...</div>}>
    <ProductAside style={style} data={data} />
  </Suspense>
);

export default function Page() {
  const { categories, error } = useCategories();

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
            <Suspense fallback={<div>در حال بارگذاری محصولات...</div>}>
              <AllProducts style="col-span-3" />
            </Suspense>
          </section>

          {error && (
            <div className="text-red-500 text-center mt-4">
              خطا در دریافت دسته‌بندی‌ها: {error.message || error.toString()}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
