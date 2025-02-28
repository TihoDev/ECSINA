import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetailsSection = () => {
  return (
    <div className="container my-10 space-y-8 md:flex md:flex-row-reverse md: md:h-96 md:gap-5">
      <div className="w-full md:h-full md:w-3/5">
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
