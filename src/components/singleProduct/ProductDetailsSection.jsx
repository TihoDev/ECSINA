import ProductDetailsCard from "../ProductDetailsCard";

const ProductDetailsSection = () => {
  return (
    <div className="container space-y-8 lg:flex lg:flex-row-reverse lg:h-96 lg:gap-6 mb-20">
      <div className="w-full lg:h-full lg:w-3/5">
        {/* It is better to use the img element here. (Not Image component) */}
        <img
          src="/images/Checker.png"
          alt="Checker-img"
          className="w-full h-full object-cover rounded-[22px]"
        />
      </div>
      <ProductDetailsCard />
    </div>
  );
};

export default ProductDetailsSection;
