"use client";
import ProductSampleCard from "../ProductSampleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BaseIcon from "../icon/BaseIcon";

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
  {
    id: 6,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
  {
    id: 7,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
  {
    id: 8,
    title: "بوم كسب و كار",
    desc: "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl: "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg",
  },
];
const responsive = {
  tablet: {
    breakpoint: { max: 3000, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2  bg-white  p-2 rounded-full shadow-lg transition"
  >
    <BaseIcon
      disableGradient={true}
      fillColor="#000"
      size={24}
      id="ChevronLeft"
    />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rotate-180 cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white  p-2 rounded-full shadow-lg transition"
  >
    <BaseIcon
      disableGradient={true}
      fillColor="#000"
      size={24}
      id="ChevronLeft"
    />
  </button>
);
const ProductOfferingSection = () => {
  return (
    <div className="shadow-main-page px-8 pt-6 pb-10 rounded-4xl ">
      <h2 className=" font-bold text-title text-base lg:text-4xl mb-8">
        قالب های پیشنهادی
      </h2>
      <div>
        <Carousel
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          responsive={responsive}
        >
          {ProductOfferingData.map((product) => (
            <div key={product.id} className="ml-6">
              <ProductSampleCard
                title={product.title}
                text={product.desc}
                imageId={product.imgUrl}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductOfferingSection;
