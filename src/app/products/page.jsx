"use client";

import { Suspense } from "react";
import ProductAside from "@/components/Aside/ProductAside";
import useCategories from "@/hooks/useCategories";

const ProductAsideWrapper = ({ style, data }) => (
  <Suspense fallback={<div>در حال بارگذاری نوار کناری...</div>}>
    <ProductAside style={style} data={data} />
  </Suspense>
);

export default function Page() {
  const { categories, error, isLoading } = useCategories();

  return <div className="overflow-x-hidden"></div>;
}
