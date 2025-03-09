"use client";
import React, { useState } from "react";
import BaseIcon from "../icon/BaseIcon";
import Link from "next/link";

const CategoryItem = ({ item, isOpen, onToggle }) => (
  <div className="w-full flex justify-between">
    <div className="flex items-center gap-x-2">
      <Link
        href={`/products?category_id=${item.id}`}
        className={`${
          isOpen ? "text-main-color-active" : "text-title"
        } text-[18px] transition-all duration-300 hover:text-main-color-active cursor-pointer`}
      >
        {item.title}
      </Link>
      {item?.sub?.length > 1 && (
        <BaseIcon
          size={20}
          id="ArrowDown"
          disableGradient={true}
          fillColor={isOpen ? "#a45f9e" : "text-title"}
          className={`${
            isOpen ? "-rotate-180 transition-all duration-300" : ""
          } cursor-pointer transition-all duration-300`}
          onClick={onToggle}
        />
      )}
    </div>
    <h4 className="text-left xl:w-2/4 text-base text-title">
      {item.itemCount || 0}
    </h4>
  </div>
);

const SubCategories = ({ sub }) => (
  <div className="w-full mt-2 flex flex-col items-start px-4 gap-y-3 transition-all duration-300 text-black">
    {sub?.map((item) => (
      <Link
        key={item.id}
        href={`/products?category_id=${item.id}`}
        className="text-[16px] font-normal hover:text-main-color-active transition-all duration-300 cursor-pointer"
      >
        {item.title}
      </Link>
    ))}
  </div>
);

const ProductAside = ({ style, data }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [selectedCategories, setSelectedCategories] = useState("بوم ناب");

  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) => {
      const isCurrentlyOpen = prev[categoryId];
      if (isCurrentlyOpen) {
        return {
          ...prev,
          [categoryId]: false,
        };
      }
      return {
        [categoryId]: true,
      };
    });
  };

  return (
    <>
      <aside className={`${style} hidden lg:block`}>
        <h2 className="font-bold text-2xl mb-8 text-title">دسته بندی :</h2>
        <div className="flex flex-col gap-y-4">
          {data.map((item) => (
            <div key={item.id}>
              <CategoryItem
                item={item}
                isOpen={openCategories[item.id]}
                onToggle={() => toggleCategory(item.id)}
              />
              {openCategories[item.id] && item?.sub?.length > 0 && (
                <SubCategories sub={item.sub} />
              )}
            </div>
          ))}
        </div>
      </aside>
      {/* mobile */}
      <div className="flex items-center justify-between mb-12 lg:!hidden">
        <h2 className="font-bold text-xl text-title">دسته بندی :</h2>

        <div className="dropdown dropdown-end w-[60%] border-3 rounded-2xl border-[#71416D] py-2.5">
          <div className="flex items-center justify-between">
            <div tabIndex={0} role="button" className="text-black px-6">
              {selectedCategories}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-1 w-full p-2 shadow-sm"
          >
            {data.map((item) => (
              <li key={item.id}>
                <CategoryItem
                  item={item}
                  isOpen={openCategories[item.id]}
                  onToggle={() => toggleCategory(item.id)}
                />
                {openCategories[item.id] && item?.sub?.length > 0 && (
                  <SubCategories sub={item.sub} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductAside;
