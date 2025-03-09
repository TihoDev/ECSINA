import Link from "next/link";
import React from "react";

const Pagination = ({ pagination }) => {
  return (
    <div className="flex items-center gap-x-5 text-black">
      <Link
        href={`/products?page=${
          pagination.current_page === 1 ? 1 : pagination.current_page - 1
        }`}
        className="font-light text-xl cursor-pointer text-secondary-color "
      >
        قبلی
      </Link>
      {Array.from({ length: pagination.last_page }).map((_, index) => (
        <button
          key={index}
          className={`font-light text-xl cursor-pointer ${
            index !== 0 ? "text-main-color" : "text-secondary-color"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <Link
        href={`/products?page=${pagination.current_page + 1}`}
        className="font-light text-xl cursor-pointer text-main-color"
      >
        بعدی
      </Link>
    </div>
  );
};

export default Pagination;
