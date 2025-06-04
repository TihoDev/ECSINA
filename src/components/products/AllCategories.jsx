import Category from "../UI/Category";

const allCategorries = [
  {
    title: "بیزنس مدل",
    description:
      "انواعی از بیزنس مدل ها که نشان می‌دهد یک کسب‌وکار چگونه ارزش ایجاد می‌کند.",
    icon: "assets/icons/Status1.svg",
    id: 1,
  },
  {
    title: "بوم کسب و کار",
    description:
      "یکی از ابزار های مدیریت استراتژیک برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است ",
    icon: "assets/icons/Computer.svg",
    id: 2,
  },
  {
    title: "پروپوزال ها",
    description:
      "انواعی از اسناد رسمی که برای ارائه ایده ها پروژه‌ها یا پیشنهادات به افراد، سازمان‌ها یا سرمایه‌گذاران تهیه شده اند.",
    icon: "assets/icons/Document.svg",
    id: 3,
  },
  {
    title: "بیزنس پلن",
    description:
      "انواعی از سند های مکتوب  که اهداف، استراتژی‌ها، بازار هدف و برنامه‌های عملیاتی یک کسب‌وکار را مشخص می‌کند.",
    icon: "assets/icons/Status2.svg",
    id: 4,
  },
  {
    title: "بوم ناب",
    description:
      "یکی از بهترین ابزار های مدل سازی کسب و کار که مخصوص استارتاپ ها و کسب و کار های نوپا طراحی شده است ",
    icon: "assets/icons/Status3.svg",
    id: 5,
  },
];

const Categories = () => {
  return (
    <div className=" mt-10 md:mt-16 flex items-center flex-wrap  justify-center  gap-4 md:gap-8">
      {allCategorries.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
