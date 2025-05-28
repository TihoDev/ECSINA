import Image from "next/image";

const Product = ({ product }) => {
  console.log(product.image);
  return (
    <div className=" group bg-white shadow-icon hover:shadow-2xl rounded-4xl  transition-all duration-300 cursor-pointer">
      {/* Image section */}
      <div className="relative w-full  aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.title || "Product Image"}
          fill
          quality={90}
          className="object-cover rounded-t-4xl"
          priority
        />
      </div>
      {/* Content section */}
      <div className="px-4 pt-3 pb-2 ">
        <h4 className="text-black font-semibold text-xs md:text-2xl mb-2">
          {product.title}
        </h4>

        <p className="text-black text-[10px] md:text-base font-normal max-w-[85%]">
          {product.description}
        </p>
        {/* Button */}
        <button className="relative w-8 h-8 mr-[88%] md:mr-[85%] xl:mr-[88%] mb-2 md:w-10 md:h-10 shadow-invite-cart rounded-2xl ">
          <Image
            src={"/assets/icons/ArrowProduct.svg"}
            alt="Arrow"
            fill
            className="group-hover:rotate-45 transition-all duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default Product;
