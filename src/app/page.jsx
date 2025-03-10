import HeroSection from "@/components/HeroSection";
import OurProductSection from "@/components/ourProductSection";
import OurFuturesSection from "@/components/OurFuturesSection";
import BelowMainPageBanner from "@/components/BelowMainPageBanner";
import MainPageBanner from "@/components/MainPageBanner";
import Footer from "@/components/Footer";

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
    <div className="overflow-x-hidden">
      <HeroSection />
      <OurProductSection />
      <OurFuturesSection />
      <MainPageBanner />
      <BelowMainPageBanner />
      <Footer />
    </div>
  );
}
