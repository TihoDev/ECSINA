import Image from "next/image";

import Arrow from "../../../public/assets/icons/Arrow.svg";

const Service = ({ product }) => {
  return (
    <>
      <div className=" hidden md:flex px-6 shadow-product py-4  flex-col items-start gap-4 border border-primary-7 rounded-4xl md:min-h-96 md:w-[220px]">
        <div
          className="p-4 rounded-md  max-w-[64px] flex items-center justify-center"
          style={{ backgroundImage: "var(--gradient-cart-icon)" }}
        >
          <Image
            src={product.icon}
            alt={product.title}
            className="inline-flex"
          />
        </div>
        <h6 className="text-2xl text-black font-bold">{product.title}</h6>
        <p className=" invisible md:visible text-xl text-black font-normal">
          {product.description}
        </p>

        <div
          className="rounded-2xl p-4 mr-auto cursor-pointer"
          style={{ backgroundImage: "var(--gradient-cart-icon)" }}
        >
          <Image src={Arrow} width={13} height={13} alt="Arrow" />
        </div>
      </div>

      {/* Mobile */}
      <div
        className="p-3 md:hidden rounded-md flex flex-col gap-2 items-center justify-center min-w-24 sm:min-w-44"
        style={{ backgroundImage: "var(--gradient-cart-icon)" }}
      >
        <Image src={product.icon} alt={product.title} />

        <p className="text-white text-sm">{product.title}</p>
      </div>
    </>
  );
};

export default Service;
