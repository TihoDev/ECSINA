import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/products/Breadcrumb";
import ProductDetails from "@/components/products/ProductDetails";
import FrequentlyQuestions from "@/components/products/FrequentlyQuestions";
import RecommendedProducts from "@/components/UI/RecommendedProducts";
import AboutProduct from "@/components/products/AboutProduct";

export const metadata = {
  title: "صفحه محصول | اکسین",
  description: "صفحه محصول | اکسین",
};

export default function ProductPage({ params }) {
  return (
    <MainLayout>
      <section className="gradient-main-background min-h-screen pb-5">
        <Breadcrumb />
        <ProductDetails />
        <AboutProduct />
        <FrequentlyQuestions />
        <RecommendedProducts />
      </section>
    </MainLayout>
  );
}
