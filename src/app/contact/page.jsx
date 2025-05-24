import MainLayout from "@/components/layout/MainLayout";
import Typography from "@/components/UI/Typography";
import React from "react";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";

export const metadata = {
  title: "تماس با ما",
  description: "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
  keywords: "بوم ناب، لوازم نقاشی، محصولات هنری، خرید آنلاین، بوم نقاشی، رنگ روغن، آبرنگ، مداد طراحی",
  openGraph: {
    title: "بوم ناب | فروشگاه تخصصی لوازم نقاشی و هنری",
    description: "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
    type: "website",
    locale: "fa_IR",
  },
};

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col  items-center my-5   min-w-screen">
        <div className="py-12 pb-10 px-6 md:px-12 w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10 blue_shadow rounded-lg">
          <div className="col-span-1">
            <h1 className="text-black md:text-right  text-center text-3xl font-bold pt-8">تماس با اکسینا</h1>
            <Typography className={"font-light text-xl my-8  text-center md:text-right"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
              مورد نیاز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
              تکنولوژی مورد نیاز
            </Typography>
            <div className="my-8 flex flex-row-reverse items-center justify-center gap-5">
              <span className="bg-primary-7 flex items-center justify-center hover:bg-primary-6 transition-all ease-in duration-200 cursor-pointer p-2 rounded-full">
                <FaTelegramPlane size={30} className="text-white" />
              </span>
              <span className="bg-primary-7 flex items-center justify-center hover:bg-primary-6 transition-all ease-in duration-200 cursor-pointer p-2 rounded-full">
                <BiSolidPhoneCall size={30} className="text-white" />
              </span>
              <span className="bg-primary-7 flex items-center justify-center hover:bg-primary-6 transition-all ease-in duration-200 cursor-pointer p-2 rounded-full">
                <MdEmail size={30} className="text-white" />
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

function ContactForm() {
  return (
    <form className="flex flex-col w-full justify-between p-6 gap-6 col-span-1 blue_shadow  rounded-lg">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full">
          <input type="text" placeholder="شماره تماس:" className="p-4 placeholder:text-primary-7  resize-none rounded bg-input focus:outline-none" />
        </div>
        <div className="flex flex-col w-full">
          <input type="text" placeholder="نام و نام‌خانوادگی:" className="p-4 placeholder:text-primary-7  resize-none rounded bg-input focus:outline-none" />
        </div>
      </div>

      <div className="flex flex-col">
        <input type="email" placeholder="ایمیل:" className="p-4 placeholder:text-primary-7  resize-none rounded bg-input focus:outline-none" />
      </div>

      <div className="flex flex-col">
        <textarea rows="6" placeholder="* پیام خود را وارد کنید..." className="p-4  placeholder:text-primary-7  resize-none rounded bg-input focus:outline-none"></textarea>
      </div>

      <button className="bg-primary-7 mt-5 text-white p-2 rounded-lg text-2xl  hover:bg-primary-10 transition">ارسال پیام</button>
    </form>
  );
}

export default ContactPage;
