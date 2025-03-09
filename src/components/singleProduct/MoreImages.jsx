import React from "react";

const MoreImages = ({ product }) => {
  return (
    <div className="container mb-52">
      <h2 className="text-3xl font-extrabold mb-6 text-title">تصاویر بیشتر</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10  ">
        {product?.extra_images?.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="sm:w-[400px] sm:h-[300px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default MoreImages;
