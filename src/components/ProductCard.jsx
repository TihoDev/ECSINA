import React from "react";
import BaseIcon from "./icon/BaseIcon";

// props
//  title : card title | text : card description | svg : icon name | className : custom class

function ProductCard({ title, text, svg, className }) {
  return (
    <div
      className={`${className} product-card hover:scale- flex flex-col justify-start gap-y-5 lg:justify-between  `}
    >
      <div>
        <div className="flex flex-col justify-items-start">
          <div className="mb-4 bg-white p-2 shadow-product-card-icon rounded-lg w-fit">
            <BaseIcon id={`${svg}`} size={32} />
          </div>
          <div>
            <h2 className="font-bold text-title text-right text-[16px] lg:text-xl leading-[35px] mb-4 text-(0,0,0,1)]">
              {title}
            </h2>
          </div>
        </div>
        <div>
          <p className="font-normal text-right lg:text-[12px] xl:text-[14px] lg:text-md leading-7 lg:leading-[31px] text-[rgba(0,0,0,1)]">
            {text}
          </p>
        </div>
      </div>

      <div className="mr-auto bg-white w-12 h-12 shadow-md rounded-2xl mt-2">
        <div className="w-full h-full flex items-center justify-center">
          <BaseIcon id="Arrow" size={18} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
