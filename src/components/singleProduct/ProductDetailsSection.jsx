import ProductDetailsCard from "../ProductDetailsCard";
import getProductById from "@/services/products/getProdutById";

const ProductDetailsSection = ({ product }) => {
  return (
    <div className="container space-y-8 lg:flex lg:flex-row-reverse lg:h-96 lg:gap-6 mb-20">
      <div className="w-full lg:h-full lg:w-3/5">
        {/* It is better to use the img element here. (Not Image component) */}
        <img
          src={product.main_image}
          alt={product.title}
          className="w-full h-full object-cover rounded-[22px]"
        />
      </div>
      <ProductDetailsCard product={product} />
    </div>
  );
};

export default ProductDetailsSection;
