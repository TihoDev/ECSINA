import React from "react";
import BaseIcon from "./icon/BaseIcon";

// props
//  title : card title | text : card description | svg : icon name | className : custom class

const FutureCard = ({ title, text, svg, className }) => {
  return (
    <div className={`${className} future-card `}>
      <div>
        <div className="flex flex-col justify-items-start">
          <div className="mb-4 bg-white p-2 shadow-product-card-icon rounded-lg w-fit">
            <BaseIcon id={`${svg}`} size={32} />
          </div>
          <div>
            <h2 className="font-bold text-title text-right text-[16px] lg:text-xl leading-[25px] lg:leading-[35px] mb-4 text-(0,0,0,1)]">
              {title}
            </h2>
          </div>
        </div>
        <div>
          <p className="font-normal text-right text-[14px] lg:text-md leading-7 lg:leading-[31px] text-[rgba(0,0,0,1)]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureCard;
