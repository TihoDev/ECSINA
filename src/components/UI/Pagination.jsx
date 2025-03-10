import { useRouter, useSearchParams } from "next/navigation";

import React from "react";

const Pagination = ({ pagination }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = pagination.current_page;
  const lastPage = pagination.last_page;

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  const handlePageChange = (page) => {
    router.push(`?${createQueryString("page", page)}`);
  };

  return (
    <div className="flex items-center gap-x-5 text-black">
      <button
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        className={`font-light text-xl cursor-pointer ${
          currentPage === 1 ? "text-gray-400" : "text-main-color"
        }`}
        disabled={currentPage === 1}
      >
        قبلی
      </button>
      {Array.from({ length: lastPage }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`font-light text-xl cursor-pointer ${
            currentPage === index + 1
              ? " text-main-color"
              : "text-secondary-color"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage < lastPage && handlePageChange(currentPage + 1)
        }
        className={`font-light text-xl cursor-pointer ${
          currentPage === lastPage ? "text-gray-400" : "text-main-color"
        }`}
        disabled={currentPage === lastPage}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
