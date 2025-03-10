import { Suspense } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import ProductAside from "@/components/Aside/ProductAside";
import AllProductsSection from "@/components/allProductsSection/AllProductsSection";
import HeaderPageTwo from "@/components/Header/HeaderPageTwo";
import getAllCategories from "@/services/categories/getAllCategories";

export const metadata = {
  title: "صفحه محصولات | اکسین",
  description: "صفحه محصولات | اکسین",
};

const ProductAsideWrapper = ({ style, data }) => {
  return (
    <Suspense
      fallback={
        <div className="w-[300px] h-[400px] bg-gray-100 animate-pulse rounded-lg" />
      }
    >
      <ProductAside style={style} data={data} />
    </Suspense>
  );
};

async function page() {
  const { categories } = await getAllCategories();

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
              style="col-span-1 hidden lg:block"
              data={categories}
            />
            <Suspense>
              <AllProductsSection style="col-span-3" />
            </Suspense>
          </section>
        </div>
      </main>
    </div>
  );
}

export default page;
