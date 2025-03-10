import SearchBar from "@/components/SearchBar/SearchBar";
import ProductAside from "@/components/Aside/ProductAside";
import AllProductsSection from "@/components/allProductsSection/AllProductsSection";
import HeaderPageTwo from "@/components/Header/HeaderPageTwo";
import getAllCategories from "@/services/categories/getAllCategories";

export const metadata = {
  title: "صفحه محصولات | اکسین",
  description: "صفحه محصولات | اکسین",
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
            <ProductAside
              data={categories}
              style="col-span-1 hidden lg:block"
            />
            <AllProductsSection style="col-span-3" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default page;
