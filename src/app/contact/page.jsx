import MainLayout from "@/components/layout/MainLayout";
import React from "react";

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
      <section className="border-1">
        <h1 className="text-black font-bold">درباره اکسینا</h1>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
