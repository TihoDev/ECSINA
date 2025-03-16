import HeaderSingleProduct from "@/components/Header/HeaderSingleProduct";
import SingleProductTitle from "@/components/singleProduct/SingleProductTitle";
import ProductDetailsSection from "@/components/singleProduct/ProductDetailsSection";
import ProductDescription from "@/components/singleProduct/ProductDescription";
import ProductOfferingSection from "@/components/singleProduct/ProductOfferingSection";
import getProductById from "@/services/products/getProdutById";
import MoreImages from "@/components/singleProduct/MoreImages";
import ProductDetailsCard from "@/components/ProductDetailsCard";

export const metadata = {
  title: "صفحه محصول | اکسین",
  description: "صفحه محصول | اکسین",
};

async function Page({ params }) {
  const { product: productId } = await params;
  const { product } = await getProductById(productId);

  return (
    <div>
      <HeaderSingleProduct />
      <SingleProductTitle title={product.title} />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-x-8 text-black text-4xl ">
        <div className="lg:col-span-8 flex flex-col gap-5 ">
          <ProductDetailsSection product={product} />
          <ProductDescription description={product.body} />
          <ProductOfferingSection product={product} />
        </div>
        <div className="lg:col-span-4 ">
          <ProductDetailsCard product={product} />
        </div>
      </div>
    </div>
  );
}

{
  /* <ProductOfferingSection product={product} />  */
}

export default Page;
