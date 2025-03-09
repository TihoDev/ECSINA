import HeaderSingleProduct from "@/components/Header/HeaderSingleProduct";
import SingleProductTitle from "@/components/singleProduct/SingleProductTitle";
import ProductDetailsSection from "@/components/singleProduct/ProductDetailsSection";
import ProductDescription from "@/components/singleProduct/ProductDescription";
import ProductOfferingSection from "@/components/singleProduct/ProductOfferingSection";
import getProductById from "@/services/products/getProdutById";
import MoreImages from "@/components/singleProduct/MoreImages";

async function Page({ params }) {
  const { product: productId } = await params;
  const { product } = await getProductById(productId);

  return (
    <div className="overflow-y-hidden">
      <HeaderSingleProduct />
      <SingleProductTitle title={product.title} />
      <ProductDetailsSection product={product} />
      <ProductDescription description={product.body} />
      <MoreImages product={product} />
      <ProductOfferingSection product={product} />
    </div>
  );
}

export default Page;
