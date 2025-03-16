"use client";

import Link from "next/link";
import BaseIcon from "./icon/BaseIcon";

const ProductSampleCard = ({
  id = 0,
  title = "title",
  text = "description",
  imageId,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col items-start shadow-product-card  rounded-4xl ">
        <div className="h-[180px]">
          <img
            src={imageId}
            alt={imageId ? `product image` : `this product does not have image`}
            className="object-cover w-full h-full rounded-tl-4xl rounded-tr-4xl text-title"
          />
        </div>
        <div className="px-4 py-5">
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg leading-9  text-title">
              {" "}
              {title}
            </h3>
            <div className="flex items-end justify-between h-auto">
              <p className="font-normal text-sm leading-6 text-title  line-clamp-4">
                {text}
              </p>
              <div className="cursor-pointer shadow-arrow  rounded-2xl  ">
                <BaseIcon id="Arrow" size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductSampleCard;
