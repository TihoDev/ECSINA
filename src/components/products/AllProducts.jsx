import Product from "../UI/Product";

const products = [
  {
    id: 1,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 2,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 3,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 4,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 5,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 6,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 7,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
  {
    id: 8,
    title: "بیزنس مدل اولیه",
    description:
      "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    image: "/assets/images/Product.png",
  },
];

const AllProducts = () => {
  return (
    <div className=" mt-8 mx-16 md:mx-0 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
