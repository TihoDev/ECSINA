import { Suspense, useEffect, useState } from "react";
import HeaderSingleProduct from "@/components/Header/HeaderSingleProduct";
import SingleProductTitle from "@/components/singleProduct/SingleProductTitle";
import ProductDetailsSection from "@/components/singleProduct/ProductDetailsSection";
import ProductDescription from "@/components/singleProduct/ProductDescription";
import ProductOfferingSection from "@/components/singleProduct/ProductOfferingSection";
import getProductById from "@/services/products/getProdutById";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import ProductQuestions from "@/components/singleProduct/ProductQuestions";

export const metadata = {
  title: "صفحه محصول | اکسین",
  description: "صفحه محصول | اکسین",
};

const LoadingIndicator = () => (
  <div className="flex justify-center items-center py-4">
    <div className="w-[40px] h-[40px] rounded-full border-4 border-black border-t-transparent animate-spin"></div>
  </div>
);

function Page({ params }) {
  const { product: productId } = params;

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        setError("Product could not be loaded.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) return <LoadingIndicator />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <HeaderSingleProduct />
      <SingleProductTitle title={product.title} />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-x-8 text-black text-4xl ">
        <div className="lg:col-span-8 flex flex-col gap-5 ">
          <ProductDetailsSection product={product} />
          <ProductDescription description={product.body} />
          <div className="block lg:hidden">
            <ProductDetailsCard product={product} />
          </div>
          <ProductOfferingSection product={product} />
          <div className="h-[1px] w-full bg-main-color my-10"></div>
          <ProductQuestions />
        </div>
        <div className=" hidden lg:block lg:col-span-4 ">
          <ProductDetailsCard product={product} />
        </div>
      </div>
    </div>
  );
}

export default Page;
