import AllComments from "@/components/home/AllComments";
import Guidance from "@/components/home/Guidance";
import HeroBanner from "@/components/home/HeroBanner";
import OurServices from "@/components/home/OurServices";
import PersonalDashboardInvite from "@/components/home/PersonalDashboardInvite";
import TemplateFeatures from "@/components/home/TemplateFeatures";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "صفحه اصلی | اکسین ",
  description: "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
  keywords: "بوم ناب، لوازم نقاشی، محصولات هنری، خرید آنلاین، بوم نقاشی، رنگ روغن، آبرنگ، مداد طراحی",
  openGraph: {
    title: "بوم ناب | فروشگاه تخصصی لوازم نقاشی و هنری",
    description: "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <OurServices />
      <TemplateFeatures />
      <PersonalDashboardInvite />
      <AllComments />
      <Guidance />
    </MainLayout>
  );
}
