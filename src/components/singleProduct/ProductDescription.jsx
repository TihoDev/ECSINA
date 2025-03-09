import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="container mb-24">
      <h2 className="text-2xl font-extrabold mb-6 text-title">توضیحات</h2>
      <p className="font-normal text-lg text-title">{description}</p>
    </div>
  );
};

export default ProductDescription;
