"use client";
import React, { useEffect, useState } from "react";
import BaseIcon from "./icon/BaseIcon";
import Link from "next/link";
import ArrowUpButton from "./ArrowUpButton";
import useCategories from "@/hooks/useCategories";

const mockData = [
  { label: "محصولات ما", href: "/products" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

const Footer = () => {
  const { categories, error, isLoading } = useCategories();

  return (
    <footer className="rounded-tr-[100px] rounded-tl-[100px] lg:rounded-tr-[200px] lg:rounded-tl-[200px] relative py-10 px-6 text-gray-700 bg-[#F8FFFC] section-shadows mt-20 shadow-md before:content-[''] before:absolute before:top-[-35px] before:left-1/2 before:w-[85px] before:h-[95px] before:bg-[#F8FFFC] before:rounded-full before:transform before:-translate-x-1/2 ">
      <ArrowUpButton />
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-evenly items-start">
        <div className="w-full flex justify-around text-sm text-gray-800 text-right">
          <div>
            <h3 className="font-semibold mb-3 text-lg">دسترسی سریع</h3>
            <ul className="space-y-2">
              {mockData.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">دسته بندی ها</h3>
            <ul className="space-y-2">
              {categories?.map((categorie) => (
                <li key={categorie.id}>
                  <Link
                    href={`products?category_id=${categorie.id}`}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {categorie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center space-x-2 mb-3 mt-8 lg:mt-0">
            <p className="text-gray-800">جدیدترین قالب‌های ما را از دست نده</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden p-1 border border-gray-300 max-w-xl">
              <input
                type="email"
                placeholder="ایمیل"
                className="flex-1 px-4 py-2 focus:outline-none border-none placeholder:text-right"
              />
              <button className="bg-purple-gradient text-white px-6 py-2 rounded-full cursor-pointer">
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center flex justify-center items-center gap-7">
        <div className="flex justify-center space-x-4">
          <p className="mb-4 text-gray-800 font-extrabold pt-3 whitespace-nowrap">
            با ما در ارتباط باشید
          </p>

          <Link
            href="https://t.me/exinsoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-gradient text-white p-3 rounded-full text-lg w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <BaseIcon id={"Telegram"} size={28} disableGradient={true} />
          </Link>
          <Link
            href="https://www.instagram.com/exiness/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-gradient text-white p-3 rounded-full text-lg w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <BaseIcon id={"Instagram"} size={28} disableGradient={true} />
          </Link>
          <Link
            href="exinessexin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-gradient text-white p-3 rounded-full text-lg w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <BaseIcon id={"Gmail"} size={28} disableGradient={true} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
