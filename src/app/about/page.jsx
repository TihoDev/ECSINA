import MainLayout from "@/components/layout/MainLayout";
import Typography from "@/components/UI/Typography";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "درباره اکسینا",
  description:
    "سایت تخصصی ما با ارائه خدمات حرفه‌ای در زمینه نگارش پروپوزال و طراحی بوم کسب‌وکار و.. همراه شما در مسیر موفقیت است. ما با تیمی متخصص و باتجربه، آماده ارائه مشاوره و خدمات تخصصی به دانشجویان، استارتاپ‌ها و سازمان‌ها هستیم.",
  keywords: "",
  openGraph: {
    title: "Ecsina",
    type: "website",
    locale: "fa_IR",
  },
};

const featurList = [
  { title: "آموزش‌ همراه قالب‌ها", desc: ".همه قالب‌ها همراه با آموزش‌های متنی و ویدئویی ارائه می‌شوند تا کاربر با نحوه استفاده صحیح و اصولی از آن‌ها آشنا شود" },
  { title: "نمونه‌های تکمیل‌شده", desc: "برای درک بهتر ساختار و نحوه تکمیل اسناد، نمونه‌هایی آماده در دسترس کاربران قرار دارد." },
  { title: "قالب‌های آماده", desc: "مجموعه‌ای متنوع از قالب‌های طراحی‌شده " },
  { title: "پیش‌نمایش و انتخاب هوشمند", desc: "برای درک بهتر ساختار و نحوه تکمیل اسناد، نمونه‌هایی آماده در دسترس کاربران قرار دارد." },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="my-5  gradient_about   min-w-screen">
        <div className="container my-8 p-5 py-12 relative shadow-2xl  md:shadow-none  rounded-lg">
          <div className="z-20  w-[10px] md:w-[35px] md:h-[35px] h-[10px] left-36   absolute">
            <Image src={"/assets/icons/Star.svg"} alt="Star" fill />
          </div>
          <div className="z-20 absolute w-[10px] md:w-[35px] md:h-[35px] h-[10px] right-[130px] top-[130px]">
            <Image src={"/assets/icons/Star.svg"} alt="Star" fill />
          </div>
          {/* <Image src={"/assets/icons/MainLogo.svg"} alt="Main Logo" width={600} height={550} className="z-20" /> */}
          <h1 className="text-black  text-center text-2xl md:text-4xl mb-12 font-bold pt-8">درباره اکسینا</h1>
          <div className="text-balance px-8 md:px-2">
            <h2 className="font-extralight text-base md:text-xl text-center">اکسین، سکویی برای هوشمندسازی تولید اسناد کسب‌وکار</h2>
            <Typography className={"font-extralight text-base md:text-xl    text-wrap text-center "}>
              اکسین یک پلتفرم نوآورانه است که با هدف ساده‌سازی فرآیند تولید اسناد کسب‌وکار طراحی شده است. ما در اکسین تلاش کرده‌ایم بستری فراهم کنیم که کاربران حتی با کمترین  دانش تخصصی در این زمینه
              بتوانند اسناد مهمی مانند بیزینس پلن، بوم مدل کسب‌وکار، پروپوزال، بیزینس مدل، بوم ناب و... را به شکلی کاملاً حرفه‌ای تهیه و ارائه کنند.
            </Typography>
          </div>
        </div>
        <div className="mt-24 md:mt-48 pb-36 container">
          <div></div>
          <div className="grid gap-5 md:gap-10 grid-cols-1 lg:grid-cols-2  my-6 px-4 sm:px-8">
            {featurList.map((item) => (
              <div
                key={item.title}
                className="h-80 flex items-center justify-evenly  flex-col bg-secondary-2 border border-primary-7 rounded-4xl p-4  hover:shadow-lg transition-all ease-linear duration-500 py-8"
              >
                <h1 className="text-black text-2xl font-bold text-center my-3">{item.title}</h1>
                <Typography className={"text-lg text-center leading-10 px-10"}>{item.desc}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
