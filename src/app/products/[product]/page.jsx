import HeaderSingleProduct from "@/components/Header/HeaderSingleProduct";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import ProductDescription from "@/components/singleProduct/ProductDescription";
import ProductDetailsSection from "@/components/singleProduct/ProductDetailsSection";
import ProductOfferingSection from "@/components/singleProduct/ProductOfferingSection";
import ProductQuestions from "@/components/singleProduct/ProductQuestions";
import SingleProductTitle from "@/components/singleProduct/SingleProductTitle";
import useProduct from "@/hooks/useProduct";

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
  const { product, error, isLoading } = useProduct(productId);

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
