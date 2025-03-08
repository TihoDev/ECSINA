import React from "react";

const Pagination = ({ countPage = 3 }) => {
  return (
    <div className="flex items-center gap-x-5 text-black">
      <button className="font-light text-xl cursor-pointer text-secondary-color ">
        قبلی
      </button>
      {Array.from({ length: countPage }).map((_, index) => (
        <button
          key={index}
          className={`font-light text-xl cursor-pointer ${
            index !== 0 ? "text-main-color" : "text-secondary-color"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button className="font-light text-xl cursor-pointer text-main-color">
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
