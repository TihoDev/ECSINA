import ProductCard from "./ProductCard"

const productCardData = [
  {
    id : 1,
    svg : "BusinessModel",
    style : "col-span-1 lg:self-end",
    title : "بیزنس مدل",
    desc : "انواعی از بیزنس مدل ها که نشان می‌دهد یک کسب‌وکار چگونه ارزش ایجاد می‌کند."
  },
  {
    id: 2,
    svg : "BusinessCanvas",
    style : "col-span-1 lg:self-start",
    title : "بوم کسب و کار",
    desc : "یکی از ابزار های مدیریت استراتژیک برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است "
  },
  {
    id : 3,
    svg : "Proposals",
    style : "col-span-2 lg:col-span-1 lg:self-end",
    title : "پروپوزال ها",
    desc : "انواعی از اسناد رسمی که برای ارائه ایده ها پروژه‌ها یا پیشنهادات به افراد، سازمان‌ها یا سرمایه‌گذاران تهیه شده اند."
  },
  {
    id : 4,
    svg : "BusinessPlan",
    style : "col-span-1 lg:self-start",
    title : "بیزنس پلن",
    desc : "انواعی از سند های مکتوب  که اهداف، استراتژی‌ها، بازار هدف و برنامه‌های عملیاتی یک کسب‌وکار را مشخص می‌کند."
  },
  {
    id : 5,
    svg : "BestCanvas",
    style : "col-span-1 lg:self-end",
    title : "بوم ناب",
    desc : "یکی از بهترین ابزار های مدل سازی کسب و کار که مخصوص استارتاپ ها و کسب و کار های نوپا طراحی شده است "
  },
]
const OurProductSection = () => {

  return (
    <section className="container text-center space-y-8 mt-42 mb-42">
    <h1 className="font-extrabold text-xl lg:text-3xl">محصولات ما</h1>
    <div className="our-products-section p-4">
      {
        productCardData.map(data => {
          return (
            <ProductCard key={data.id} title={data.title} text={data.desc} svg={data.svg} className={data.style}/>
          )
        })
      }
    </div>
</section>
  )
}

export default OurProductSection