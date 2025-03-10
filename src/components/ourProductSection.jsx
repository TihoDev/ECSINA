import Link from "next/link";
import ProductCard from "./ProductCard";

const productCardData = [
  {
    id: 1,
    svg: "BusinessModel",
    style: "col-span-1 lg:self-end",
    title: "بیزنس مدل",
    desc: "چارچوبی که نحوه ایجاد ارزش در یک کسب‌وکار را مشخص می‌کند و به شفاف‌سازی فرآیندها و تصمیم‌گیری‌های تجاری کمک می‌کند.",
  },
  {
    id: 2,
    svg: "BusinessCanvas",
    style: "col-span-1 lg:self-start",
    title: "بوم کسب و کار",
    desc: "ابزاری استراتژیک برای تجزیه و تحلیل و طراحی مدل‌های کسب‌وکار، که اجزای اصلی یک کسب و کار را در یک قالب ساده ارائه می‌دهد.",
  },
  {
    id: 3,
    svg: "Proposals",
    style: "sm:col-span-2 lg:col-span-1 lg:self-end",
    title: "پروپوزال ها",
    desc: "اسناد رسمی که برای ارائه ایده‌ها و پروژه‌ها به افراد، سازمان‌ها یا سرمایه‌گذاران تهیه می‌شوند و به تصمیم‌گیری در مورد پروژه‌ها کمک می‌کنند.",
  },
  {
    id: 4,
    svg: "BusinessPlan",
    style: "col-span-1 lg:self-start",
    title: "بیزنس پلن",
    desc: "سندی که اهداف، استراتژی‌ها، بازار هدف و برنامه‌های اجرایی یک کسب‌وکار را بیان می‌کند و برای هدایت کسب‌وکار به سوی رشد استفاده می‌شود.",
  },
  {
    id: 5,
    svg: "BestCanvas",
    style: "col-span-1 lg:self-end",
    title: "بوم ناب",
    desc: "مدل‌سازی کسب‌وکار، مخصوص کسب‌وکارهای نوپا که با کمترین هزینه و در کوتاه‌ترین زمان به توسعه و تست مدل کسب‌وکار کمک می‌کند.",
  },
];
const OurProductSection = () => {
  return (
    <section className="container text-center space-y-8 mt-42 mb-42">
      <h1 className="font-extrabold text-2xl lg:text-3xl !text-black">محصولات ما</h1>
      <div className="our-products-section">
        {productCardData.map((data) => {
          return (
            <Link className={data.style} href="/products">
              <ProductCard
                key={data.id}
                title={data.title}
                text={data.desc}
                svg={data.svg}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
 
export default OurProductSection;
