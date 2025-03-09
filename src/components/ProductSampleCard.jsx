"use client";

import Link from "next/link";
import BaseIcon from "./icon/BaseIcon";
import notFountProductImg from "../../public/images/Checker.png";

const ProductSampleCard = ({
  id = 0,
  title = "title",
  text = "description",
  imageId,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-full rounded-4xl max-h-[344px] flex flex-col shadow-[0px_2px_4px_0px_#1E132840]">
        <div className="w-full h-[180px]">
          <img
            src={imageId || notFountProductImg}
            alt={imageId ? `product image` : `this product does not have image`}
            className="object-cover w-full h-full rounded-tl-4xl rounded-tr-4xl text-title"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl lg:text-2xl leading-9 mb-2 text-title">
              {" "}
              {title}
            </h1>
            <p className="font-normal text-base leading-6 text-title">{text}</p>
          </div>
          <div className="mr-auto bg-white w-12 h-12 shadow-md rounded-2xl mt-2">
            <button className="cursor-pointer w-full h-full flex items-center justify-center">
              <BaseIcon id="Arrow" size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductSampleCard;
