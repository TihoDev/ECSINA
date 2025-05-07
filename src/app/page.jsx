import HeroBanner from "@/components/home/HeroBanner";

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
    <div>
      <HeroBanner />
    </div>
  );
}
