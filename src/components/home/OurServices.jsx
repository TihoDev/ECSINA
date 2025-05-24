import Service from "../UI/Service";

const allProducts = [
  {
    title: "بیزنس مدل",
<<<<<<< HEAD
    description: "انواعی از بیزنس مدل ها که نشان می‌دهد یک کسب‌وکار چگونه ارزش ایجاد می‌کند.",
    icon: "/assets/icons/Status1.svg",
=======
    description:
      "انواعی از بیزنس مدل ها که نشان می‌دهد یک کسب‌وکار چگونه ارزش ایجاد می‌کند.",
    icon: "assets/icons/Status1.svg",
>>>>>>> dev
    id: 1,
  },
  {
    title: "بوم کسب و کار",
<<<<<<< HEAD
    description: "یکی از ابزار های مدیریت استراتژیک برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است ",
    icon: "/assets/icons/Computer.svg",
=======
    description:
      "یکی از ابزار های مدیریت استراتژیک برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است ",
    icon: "assets/icons/Computer.svg",
>>>>>>> dev
    id: 2,
  },
  {
    title: "پروپوزال ها",
<<<<<<< HEAD
    description: "انواعی از اسناد رسمی که برای ارائه ایده ها پروژه‌ها یا پیشنهادات به افراد، سازمان‌ها یا سرمایه‌گذاران تهیه شده اند.",
    icon: "/assets/icons/Document.svg",
=======
    description:
      "انواعی از اسناد رسمی که برای ارائه ایده ها پروژه‌ها یا پیشنهادات به افراد، سازمان‌ها یا سرمایه‌گذاران تهیه شده اند.",
    icon: "assets/icons/Document.svg",
>>>>>>> dev
    id: 3,
  },
  {
    title: "بیزنس پلن",
<<<<<<< HEAD
    description: "انواعی از سند های مکتوب  که اهداف، استراتژی‌ها، بازار هدف و برنامه‌های عملیاتی یک کسب‌وکار را مشخص می‌کند.",
    icon: "/assets/icons/Status2.svg",
=======
    description:
      "انواعی از سند های مکتوب  که اهداف، استراتژی‌ها، بازار هدف و برنامه‌های عملیاتی یک کسب‌وکار را مشخص می‌کند.",
    icon: "assets/icons/Status2.svg",
>>>>>>> dev
    id: 4,
  },
  {
    title: "بوم ناب",
<<<<<<< HEAD
    description: "یکی از بهترین ابزار های مدل سازی کسب و کار که مخصوص استارتاپ ها و کسب و کار های نوپا طراحی شده است ",
    icon: "/assets/icons/Status3.svg",
=======
    description:
      "یکی از بهترین ابزار های مدل سازی کسب و کار که مخصوص استارتاپ ها و کسب و کار های نوپا طراحی شده است ",
    icon: "assets/icons/Status3.svg",
>>>>>>> dev
    id: 5,
  },
];

const OurServices = () => {
  return (
    <section className="-mt-20  container">
      <h5 className=" text-xl md:text-4xl text-black font-bold text-center">
        محصولات ما
      </h5>

      <div className="mt-8 md:mt-20 flex items-center gap-4  justify-center md:justify-evenly flex-wrap ">
        {allProducts.map((product, index) => (
          <div
            key={product.id}
            className={`${index % 2 === 0 ? "md:mt-32" : ""}`}
          >
            <Service product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
