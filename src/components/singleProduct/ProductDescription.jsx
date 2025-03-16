import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="mt-8 mb-5 lg:mb-20">
      <div className="shadow-main-page p-8 rounded-4xl">
        <h2 className="text-[20px] font-extrabold mb-2 lg:mb-6 text-title">
          توضیحات
        </h2>
        <p className="font-normal text-base text-title">{description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
