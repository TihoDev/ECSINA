import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="container mb-24">
      <h2 className="text-[20px] font-extrabold mb-2 lg:mb-6 text-title">توضیحات</h2>
      <p className="font-normal text-base text-title">{description}</p>
    </div>
  );
};

export default ProductDescription;
