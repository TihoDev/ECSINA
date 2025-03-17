"use client";
import React, { useRef, useState } from "react";
import ProductSampleCard from "../ProductSampleCard";
import Link from "next/link";

const ProductOfferingData = [
  {
    id: 1,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
  {
    id: 2,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
  {
    id: 3,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
  {
    id: 4,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
  {
    id: 5,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
];

const ProductOfferingSection = () => {
  const totalSlides = ProductOfferingData.length;

  const linksRef = useRef([]);

  const handleLinkClick = (e, index) => {
    e.preventDefault();

    const newIndex = index === totalSlides - 1 ? 0 : index + 1;
    linksRef.current[newIndex]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="shadow-main-page px-8 pt-6 pb-10 rounded-4xl ">
      <h2 className=" font-bold text-title text-base lg:text-4xl mb-8">
        قالب های پیشنهادی
      </h2>

      <div className="carousel carousel-start rounded-box max-w-[100%] space-x-4 p-4 ">
        <div className="carousel-item ">
          {ProductOfferingData.map((product) => (
            <ProductSampleCard
              key={product.id}
              title={product.title}
              text={product.desc}
              imageId={product.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOfferingSection;
