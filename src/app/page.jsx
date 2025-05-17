import AllComments from "@/components/home/AllComments";
import Guidance from "@/components/home/Guidance";
import HeroBanner from "@/components/home/HeroBanner";
import OurServices from "@/components/home/OurServices";
import TemplateFeatures from "@/components/home/TemplateFeatures";

export const metadata = {
  title: "صفحه اصلی | اکسین ",
  description:
    "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
  keywords:
    "بوم ناب، لوازم نقاشی، محصولات هنری، خرید آنلاین، بوم نقاشی، رنگ روغن، آبرنگ، مداد طراحی",
  openGraph: {
    title: "بوم ناب | فروشگاه تخصصی لوازم نقاشی و هنری",
    description:
      "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
    type: "website",
    locale: "fa_IR",
  },
};

export default function Home() {
  return (
    <div className="my-20">
      <HeroBanner />
      <OurServices />
      <TemplateFeatures />
      <AllComments />
      <Guidance />
    </div>
  );
}
